
const db = require("../utils/utils_db");
const showtime = db.showtime;

/**
 * find one showtime
 * @param {object} conditions where clause
 * @param {string} includes table include, can contain conditions
 * @return {object} contain showtime was found
 */
const findOne = (conditions, includes) => {
  return showtime.findOne({
    where: conditions || null,
    include: includes || null,
  });
};

/**
 * Update showtime via newshowtime and conditions
 * @param {object} conditions where clause
 * @param {object} newshowtime info of showtime will be updated
 * @return {array} contain number of records was updated
 */
const update = (newshowtime, conditions = null) => {
  return showtime.update(newshowtime, {
    where: conditions || null,
  });
};

/**
 * FindAll showtime via newshowtime and conditions
 * @param {object} conditions where clause
 * @param {object} newshowtime info of showtime will be updated
 * @return {array} contain number of records was updated
 */
const findAll = (conditions, includes) => {
  return showtime.findOne({
    where: conditions || null,
    include: includes || null,
  });
};

/**
 * Delete showtime via newshowtime and conditions
 * @param {object} conditions where clause
 * @param {object} newshowtime info of showtime will be updated
 * @return {array} contain number of records was updated
 */
const Delete = (conditions, includes) => {
  return showtime.delete({
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
