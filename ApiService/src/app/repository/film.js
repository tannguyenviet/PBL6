const db = require('../utils/utils_db');
const film = db.film;

/**
 * find one film
 * @param {object} conditions where clause
 * @param {string} includes table include, can contain conditions
 * @return {object} contain film was found
 */

//   Diều hướng -> controller -> res + logic
// MVC Controller -> điều hướng gọi service -> tính  -> repository -> model ORM
// Đổi db repository 
const findOne = (conditions, includes) => {
  return film.findOne({
    where: conditions || null,
    include: includes || null,
  });
};

const findOne = (conditions, includes) => {
  return film.findOne({
    where: conditions || null,
    include: includes || null,
  },);
};

/**
 * Update film via newfilm and conditions
 * @param {object} conditions where clause
 * @param {object} newfilm info of film will be updated
 * @return {array} contain number of records was updated
 */
const update = (newfilm, conditions = null) => {
  return film.update(newfilm, {
    where: conditions || null,
  });
};

/**
 * FindAll film via newfilm and conditions
 * @param {object} conditions where clause
 * @param {object} newfilm info of film will be updated
 * @return {array} contain number of records was updated
 */
const findAll = (conditions, includes) => {
  return film.findOne({
    where: conditions || null,
    include: includes || null,
  });
};

/**
 * Delete film via newfilm and conditions
 * @param {object} conditions where clause
 * @param {object} newfilm info of film will be updated
 * @return {array} contain number of records was updated
 */
const Delete = (conditions, includes) => {
  return film.delete({
    where: conditions || null,
    include: includes || null,
  });
};

module.exports = {
  findOne,
  update,
  findAll,
  Delete,
};
