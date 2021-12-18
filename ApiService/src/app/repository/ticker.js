const db = require("../utils/utils_db");
const ticket = db.ticket;

/**
 * find one ticket
 * @param {object} conditions where clause
 * @param {string} includes table include, can contain conditions
 * @return {object} contain ticket was found
 */
const findOne = (conditions, includes) => {
  return ticket.findOne({
    where: conditions || null,
    include: includes || null,
  });
};

/**
 * Update ticket via newticket and conditions
 * @param {object} conditions where clause
 * @param {object} newticket info of ticket will be updated
 * @return {array} contain number of records was updated
 */
const update = (newticket, conditions = null) => {
  return ticket.update(newticket, {
    where: conditions || null,
  });
};

/**
 * FindAll ticket via newticket and conditions
 * @param {object} conditions where clause
 * @param {object} newticket info of ticket will be updated
 * @return {array} contain number of records was updated
 */
const findAll = (conditions, includes) => {
  return ticket.findOne({
    where: conditions || null,
    include: includes || null,
  });
};

/**
 * Delete ticket via newticket and conditions
 * @param {object} conditions where clause
 * @param {object} newticket info of ticket will be updated
 * @return {array} contain number of records was updated
 */
const Delete = (conditions, includes) => {
  return ticket.delete({
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
