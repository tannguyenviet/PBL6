const db = require("../utils/utils_db");
const membership = db.membership;

/**
 * find one membership
 * @param {object} conditions where clause
 * @param {string} includes table include, can contain conditions
 * @return {object} contain membership was found
 */
const findOne = (conditions, includes) => {
  return membership.findOne({
    where: conditions || null,
    include: includes || null,
  });
};

/**
 * Update membership via newmembership and conditions
 * @param {object} conditions where clause
 * @param {object} newmembership info of membership will be updated
 * @return {array} contain number of records was updated
 */
const update = (newmembership, conditions = null) => {
  return membership.update(newmembership, {
    where: conditions || null,
  });
};

/**
 * FindAll membership via newmembership and conditions
 * @param {object} conditions where clause
 * @param {object} newmembership info of membership will be updated
 * @return {array} contain number of records was updated
 */
const findAll = (conditions, includes) => {
  return membership.findOne({
    where: conditions || null,
    include: includes || null,
  });
};

/**
 * Delete membership via newmembership and conditions
 * @param {object} conditions where clause
 * @param {object} newmembership info of membership will be updated
 * @return {array} contain number of records was updated
 */
const Delete = (conditions, includes) => {
  return membership.delete({
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
