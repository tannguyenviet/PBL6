const db = require("../utils/utils_db");
const account = db.account;

/**
 * find one account
 * @param {object} conditions where clause
 * @param {string} includes table include, can contain conditions
 * @return {object} contain account was found
 */
const findOne = (conditions, includes) => {
  return account.findOne({
    where: conditions || null,
    include: includes || null,
  });
};

/**
 * Update account via newaccount and conditions
 * @param {object} conditions where clause
 * @param {object} newaccount info of account will be updated
 * @return {array} contain number of records was updated
 */
const update = (newaccount, conditions = null) => {
  return account.update(newaccount, {
    where: conditions || null,
  });
};

/**
 * FindAll account via newaccount and conditions
 * @param {object} conditions where clause
 * @param {object} newaccount info of account will be updated
 * @return {array} contain number of records was updated
 */
const findAll = (conditions, includes) => {
  return account.findOne({
    where: conditions || null,
    include: includes || null,
  });
};

/**
 * Delete account via newaccount and conditions
 * @param {object} conditions where clause
 * @param {object} newaccount info of account will be updated
 * @return {array} contain number of records was updated
 */
const Delete = (conditions, includes) => {
  return account.delete({
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
