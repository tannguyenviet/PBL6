const showtime = require("../app/controllers/showtime");
const passport = require("passport");
const router = require("express").Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     showtime:
 *       type: object
 *       required:
 *         - time_start
 *         - time_end
 *         - film_id
 *         - price_type_id
 *         - room_film_id
 *       properties:
 *         id:
 *           type: int
 *           description: The auto-generated id of the showtime
 *         time_start:
 *           type: date
 *           description: The showtime - description
 *         time_end:
 *           type: date
 *           description: The basic price
 *         film_id:
 *           type: int
 *           description: The basic price
 *         price_type_id:
 *           type: int
 *           description: The basic price
 *         room_film_id:
 *           type: int
 *           description: The basic price
 *       example:
 *         time_start: 2021-11-19T19:00:00.000Z
 *         time_end: 2021-11-19T21:00:00.000Z
 *         film_id: 1
 *         price_type_id: 2
 *         room_film_id: 1
 */

/**
 * @swagger
 * tags:
 *   name: showtime
 *   description: The showtime managing API
 */

/**
 * @swagger
 * /showtime/create:
 *   post:
 *     summary: Create a new showtime
 *     tags: [showtime]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/showtime'
 *     responses:
 *       200:
 *         description: The showtime was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/showtime'
 *       500:
 *         description: Some server error
 */
// Create a new showtime - Manager
router.post("/create", showtime.create);

/**
 * @swagger
 * /showtime/list?idRoom=&date=:
 *   get:
 *     summary: Returns the list of all the showtime
 *     tags: [showtime]
 *     parameters:
 *      - in: query
 *        name: idRoom
 *        schema:
 *          type: integer
 *        description: The number of idRoom
 *      - in: query
 *        name: date
 *        schema:
 *          type: date
 *        description: The date of the showtime
 *     responses:
 *       200:
 *         description: The list of the showtime
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/showtime'
 */
// Retrieve all Showtime with condition
router.get("/list", showtime.findAll);

/**
 * @swagger
 * /showtime/search?idTheater=&idFilm=&date=:
 *   get:
 *     summary: Returns the list of all the showtime
 *     tags: [showtime]
 *     parameters:
 *      - in: query
 *        name: idTheater
 *        schema:
 *          type: integer
 *        description: The number of idTheater
 *      - in: query
 *        name: idFilm
 *        schema:
 *          type: integer
 *        description: The number of idFilm
 *      - in: query
 *        name: date
 *        schema:
 *          type: date
 *        description: The date of the showtime
 *     responses:
 *       200:
 *         description: The list of the showtime
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/showtime'
 */
// Retrieve all showtime of a Film having a specific idTheater and a date - Manager
router.get("/search", showtime.findAllWithIdFilmAndIdTheaterAndDate);

/**
 * @swagger
 * /showtime/searchForAdmin?idTheater=&idFilm=&date=:
 *   get:
 *     summary: Returns the list of all the showtime
 *     tags: [showtime]
 *     parameters:
 *      - in: query
 *        name: idTheater
 *        schema:
 *          type: integer
 *        description: The number of idTheater
 *      - in: query
 *        name: idFilm
 *        schema:
 *          type: integer
 *        description: The number of idFilm
 *      - in: query
 *        name: date
 *        schema:
 *          type: date
 *        description: The date of the showtime
 *     responses:
 *       200:
 *         description: The list of the showtime
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/showtime'
 */
// Retrieve all showtime of a Film having a specific idTheater and a date - Admin
router.get("/searchForAdmin", showtime.findAllWithIdFilmAndIdTheaterAndDateForAdmin);

/**
 * @swagger
 * /showtime/{id}:
 *   get:
 *     summary: Get the showtime by id
 *     tags: [showtime]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The showtime id
 *     responses:
 *       200:
 *         description: The showtime description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/showtime'
 *       404:
 *         description: The showtime was not found
 */
// Retrieve a Showtime by id
router.get("/:id", showtime.findById);

/**
 * @swagger
 * /showtime/{id}:
 *  put:
 *    summary: Update the showtime by the id
 *    tags: [showtime]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The showtime id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/showtime'
 *    responses:
 *      200:
 *        description: The showtime was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/showtime'
 *      404:
 *        description: The showtime was not found
 *      500:
 *        description: Some error happened
 */
// Update a showtime with id - Manager
router.put("/:id", showtime.update);

/**
 * @swagger
 * /showtime/{id}:
 *   delete:
 *     summary: Remove the showtime by id
 *     tags: [showtime]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The showtime id
 * 
 *     responses:
 *       200:
 *         description: The showtime was deleted
 *       404:
 *         description: The showtime was not found
 *       500:
 *         description: Some error happened
 */
// Delete a showtime with id - Manager
router.delete("/:id", showtime.delete);

module.exports = router;