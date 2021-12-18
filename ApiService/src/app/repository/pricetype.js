const db = require("../utils/utils_db");
const priceType = db.priceType;

/**
 * find one priceType
 * @param {object} conditions where clause
 * @param {string} includes table include, can contain conditions
 * @return {object} contain priceType was found
 */
const findOne = (conditions, includes) => {
  return priceType.findOne({
    where: conditions || null,
    include: includes || null,
  });
};

/**
 * Update priceType via newpriceType and conditions
 * @param {object} conditions where clause
 * @param {object} newpriceType info of priceType will be updated
 * @return {array} contain number of records was updated
 */
const update = (newpriceType, conditions = null) => {
  return priceType.update(newpriceType, {
    where: conditions || null,
  });
};

/**
 * FindAll priceType via newpriceType and conditions
 * @param {object} conditions where clause
 * @param {object} newpriceType info of priceType will be updated
 * @return {array} contain number of records was updated
 */
const findAll = (conditions, includes) => {
  return priceType.findOne({
    where: conditions || null,
    include: includes || null,
  });
};

/**
 * Delete priceType via newpriceType and conditions
 * @param {object} conditions where clause
 * @param {object} newpriceType info of priceType will be updated
 * @return {array} contain number of records was updated
 */
const Delete = (conditions, includes) => {
  return priceType.delete({
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
