const db = require("../utils/utils_db");
const roomFilm = db.roomFilm;

/**
 * find one roomFilm
 * @param {object} conditions where clause
 * @param {string} includes table include, can contain conditions
 * @return {object} contain roomFilm was found
 */
const findOne = (conditions, includes) => {
  return roomFilm.findOne({
    where: conditions || null,
    include: includes || null,
  });
};

/**
 * Update roomFilm via newroomFilm and conditions
 * @param {object} conditions where clause
 * @param {object} newroomFilm info of roomFilm will be updated
 * @return {array} contain number of records was updated
 */
const update = (newroomFilm, conditions = null) => {
  return roomFilm.update(newroomFilm, {
    where: conditions || null,
  });
};

/**
 * FindAll roomFilm via newroomFilm and conditions
 * @param {object} conditions where clause
 * @param {object} newroomFilm info of roomFilm will be updated
 * @return {array} contain number of records was updated
 */
const findAll = (conditions, includes) => {
  return roomFilm.findOne({
    where: conditions || null,
    include: includes || null,
  });
};

/**
 * Delete roomFilm via newroomFilm and conditions
 * @param {object} conditions where clause
 * @param {object} newroomFilm info of roomFilm will be updated
 * @return {array} contain number of records was updated
 */
const Delete = (conditions, includes) => {
  return roomFilm.delete({
    where: conditions || null,
    include: includes || null,
  })
}

module.exports = {
  findOne,
  update,
  findAll,
  Delete
};
