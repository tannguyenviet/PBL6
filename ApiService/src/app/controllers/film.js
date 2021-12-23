const db = require("../../utils/db");
const Film = db.film;
const Op = db.Sequelize.Op;
const initDb = require("../../utils/creator");
const { listFilmsIds, getListDetailFilms } = require("../../utils/createFilms");

// [GET] ../film/create
// Import nowPlaying Film from Create_films.js and save in database
exports.create = (req, res) => {
  try {
    // (async() => {
    //     // get film IDs from web
    //     initDb();
    //     const listIds = await listFilmsIds();
    //     // get film IDs from database
    //     const dataFilms = await Film.findAll().catch((err) => {
    //         console.log("Error: ", err);
    //     });
    //     const dataFilmsIds = dataFilms.map((r) => r.idFilmsOnWeb);
    //     // Retrieve distinct idFilms between 2 list: dataFilmsIds and listIds
    //     const differenceIds = listIds.filter(
    //         (x) => !dataFilmsIds.includes(x)
    //     );
    //     // g      et new films from differenceIds
    //     const differenceFilms = await getListDetailFilms(differenceIds);
    //     //save t   o database
    //     if (differenceFilms.length > 0) {
    //         Film.bulkCreate(differenceFilms)
    //             .then((data) => {
    //                 res.json(data);
    //             })
    //             .catch((err) => {
    //                 res.status(500).send({
    //                     message: err.message
    //                 });
    //             });
    //     } else {
    //         res.status(200).send({
    //             message: "Nothing new films to add into DB.",
    //         });
    //     }
    // })();
    initDb();
    res.send("Ok");
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

// [GET] ../film /list
// Retrieve all film from the database.
exports.findAll = (req, res) => {
  let currentPage = req.query.page;
  if (!Number(currentPage)) currentPage = 1;
  Film.findAll()
    .then((data) => {
      const quantity = 10;
      const totalResults = data.length;
      const totalPages = Math.floor(data.length / quantity + 1);
      let results = [];
      for (
        let i = (currentPage - 1) * quantity;
        i < currentPage * quantity;
        i++
      ) {
        if (data[i]) results = results.concat(data[i]);
        else break;
      }
      const jsonPacket = {
        page: currentPage,
        total_pages: totalPages,
        total_results: totalResults,
        results: results,
      };
      res.json(jsonPacket);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

// [GET] ../film/now-playing
// Retrieve all film 14 days before today
exports.findNowPlaying = (req, res) => {
  const twoWeeksAgo = new Date(new Date().setDate(new Date().getDate() - 27));
  Film.findAll({
    where: {
      time_release: {
        [Op.between]: [twoWeeksAgo, new Date()],
      },
    },
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

// [GET] ../film/up-coming
// R    etrieve all film 14 days from today
exports.findUpComing = (req, res) => {
  const twoWeeksFromNow = new Date(
    new Date().setDate(new Date().getDate() + 27)
  );
  Film.findAll({
    where: {
      time_release: {
        [Op.between]: [new Date(), twoWeeksFromNow],
      },
    },
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

// [GET] ../film/category?q=...
// Retrieve film by category (nowPlaying)
exports.category = (req, res) => {
  const twoWeeksAgo = new Date(new Date().setDate(new Date().getDate() - 27));
  const cateName = req.query.q;
  var condition = cateName
    ? {
        hashtag: {
          [Op.like]: `%${cateName}%`,
        },
      }
    : null;
  Film.findAll({
    where: {
      [Op.and]: [
        condition,
        {
          time_release: {
            [Op.between]: [twoWeeksAgo, new Date()],
          },
        },
      ],
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
// [GET] ../film/id
// Find a single Fil    m with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Film.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Film with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

// [PUT] ../ film/id
// Updat    e a Film by the id in the request
exports.update = async (req, res) => {
  const id = req.params.id;
  const film = await Film.findByPk(id);
  if (!film) {
    return res.status(404).send({ message: "This film not found" });
  }
  Film.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      res.send({
        message: "Film was updated successfully.",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

// [DELETE] ../film/id
// Delete a Film with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Film.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Film was deleted successfully!",
        });
      } else {
        res.status(404).send({
          message: `Cannot delete Film with id=${id}. Maybe Film was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
