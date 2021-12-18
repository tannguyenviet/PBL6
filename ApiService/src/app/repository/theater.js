const db = require("../utils/utils_db");
const theather = db.theather;

/**
 * find one theather
 * @param {object} conditions where clause
 * @param {string} includes table include, can contain conditions
 * @return {object} contain theather was found
 */
const findOne = (conditions, includes) => {
  return theather.findOne({
    where: conditions || null,
    include: includes || null,
  });
};

/**
 * Update theather via newtheather and conditions
 * @param {object} conditions where clause
 * @param {object} newtheather info of theather will be updated
 * @return {array} contain number of records was updated
 */
const update = (newtheather, conditions = null) => {
  return theather.update(newtheather, {
    where: conditions || null,
  });
};

/**
 * FindAll theather via newtheather and conditions
 * @param {object} conditions where clause
 * @param {object} newtheather info of theather will be updated
 * @return {array} contain number of records was updated
 */
const findAll = (conditions, includes) => {
  return theather.findOne({
    where: conditions || null,
    include: includes || null,
  });
};

/**
 * Delete theather via newtheather and conditions
 * @param {object} conditions where clause
 * @param {object} newtheather info of theather will be updated
 * @return {array} contain number of records was updated
 */
const Delete = (conditions, includes) => {
  return theather.delete({
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
