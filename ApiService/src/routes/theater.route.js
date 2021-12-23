const theater = require("../app/controllers/theater");
const router = require("express").Router();
const authen = require("../app/middlewares/authen");
const author = require("../app/middlewares/author");
/**
 * @swagger
 * components:
 *   schemas:
 *     theater:
 *       type: object
 *       required:
 *         - name
 *         - address
 *         - city
 *         - account_id
 *       properties:
 *         id:
 *           type: int
 *           description: The auto-generated id of the theater
 *         name:
 *           type: String
 *           description: The theater - description
 *         address:
 *           type: String
 *           description: The basic price
 *         city:
 *           type: String
 *           description: The basic price
 *         account_id:
 *           type: int
 *           description: The basic price
 *       example:
 *         name: Rạp Metiz 1updated
 *         address: Đường 2/9
 *         city: Đà Nẵng
 *         account_id: null
 */

/**
 * @swagger
 * tags:
 *   name: theater
 *   description: The theater managing API
 */

/**
 * @swagger
 * /theater/create:
 *   post:
 *     summary: Create a new theater
 *     tags: [theater]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/theater'
 *     responses:
 *       200:
 *         description: The theater was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/theater'
 *       500:
 *         description: Some server error
 */
// Create a new theater
router.post("/create", authen.authenticationToken, author.checkAdminRole, theater.create);

/**
 * @swagger
 * /theater/search?cityName=:
 *   get:
 *     summary: Returns the list of all the theater
 *     tags: [theater]
 *     parameters:
 *      - in: query
 *        name: cityName
 *        schema:
 *          type: String
 *        description: The name of City at which the theater located
 *     responses:
 *       200:
 *         description: The list of the theater
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/theater'
 */
// Retrieve all theater of a city
router.get("/search", theater.searchWithCityName);

/**
 * @swagger
 * /theater/city/list:
 *   get:
 *     summary: Returns the list of all the city
 *     tags: [theater]
 *     responses:
 *       200:
 *         description: The list of the theater
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/theater'
 */
//Retrieve all city
router.get("/city/list", theater.findAllCity);

/**
 * @swagger
 * /theater/list:
 *   get:
 *     summary: Returns the list of all the theater
 *     tags: [theater]
 *     responses:
 *       200:
 *         description: The list of the theater
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/theater'
 */
//Retrieve all city
router.get("/list", theater.findAll);

/**
 * @swagger
 * /theater/manager-available/list:
 *   get:
 *     summary: Returns the list of all the managerAvailable
 *     tags: [theater]
 *     responses:
 *       200:
 *         description: The list of the theater
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/theater'
 */
// Get list manager available for a new Theater
router.get("/manager-available/list", authen.authenticationToken, author.checkManagerRole, theater.managerAvailable);

/**
 * @swagger
 * /theater/manager/{id}:
 *   get:
 *     summary: Get the theater by managerId
 *     tags: [theater]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The manager Id
 *     responses:
 *       200:
 *         description: The theater by managerId
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/theater'
 *       404:
 *         description: The theater was not found
 */
// Get a Theater by id Account (manager)
router.get("/manager/:id", authen.authenticationToken, author.checkManagerRole, theater.findByIdManager);

/**
 * @swagger
 * /theater/{id}:
 *  put:
 *    summary: Update the theater by the id
 *    tags: [theater]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The theater id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/theater'
 *    responses:
 *      200:
 *        description: The theater was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/theater'
 *      404:
 *        description: The theater was not found
 *      500:
 *        description: Some error happened
 */
// Update a theater with id
router.put("/:id", authen.authenticationToken, author.checkAdminRole, theater.update);

/**
 * @swagger
 * /theater/{id}:
 *   delete:
 *     summary: Remove the theater by id
 *     tags: [theater]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The theater id
 *     responses:
 *       200:
 *         description: The theater was deleted
 *       404:
 *         description: The theater was not found
 *       500:
 *         description: Some error happened
 */
// Delete a theater with id
router.delete("/:id", authen.authenticationToken, author.checkManagerRole, theater.delete);

module.exports = router