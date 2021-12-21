const pricetype = require("../app/controllers/pricetype");
const router = require("express").Router();
const authen = require("../app/middlewares/authen");
const author = require("../app/middlewares/author");
/**
 * @swagger
 * components:
 *   schemas:
 *     pricetype:
 *       type: object
 *       required:
 *         - description
 *         - price
 *       properties:
 *         id:
 *           type: int
 *           description: The auto-generated id of the pricetype
 *         description:
 *           type: string
 *           description: The pricetype - description
 *         price:
 *           type: int
 *           description: The basic price
 *       example:
 *         id: 1
 *         description: Vé 2D - Ngày thường
 *         price: 45000
 */

/**
 * @swagger
 * tags:
 *   name: pricetype
 *   description: The pricetype managing API
 */

/**
 * @swagger
 * /pricetype:
 *   post:
 *     summary: Create a new pricetype
 *     tags: [pricetype]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/pricetype'
 *     responses:
 *       200:
 *         description: The pricetype was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/pricetype'
 *       500:
 *         description: Some server error
 */
// // Create a new pricetype
// router.post("/create", pricetype.create);

/**
 * @swagger
 * /pricetype/list:
 *   get:
 *     summary: Returns the list of all the pricetype
 *     tags: [pricetype]
 *     responses:
 *       200:
 *         description: The list of the pricetype
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/pricetype'
 */
// Retrieve all pricetype of a city
router.get("/list", authen.authenticationToken, author.checkMemberRole, pricetype.findAll);

/**
 * @swagger
 * /pricetype/{id}:
 *   get:
 *     summary: Get the pricetype by id
 *     tags: [pricetype]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The pricetype id
 *     responses:
 *       200:
 *         description: The pricetype description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/pricetype'
 *       404:
 *         description: The pricetype was not found
 */
// Retrieve a pricetype by id
router.get("/:id", authen.authenticationToken, author.checkMemberRole, pricetype.findByID);

/**
 * @swagger
 * /pricetype/{id}:
 *  put:
 *    summary: Update the pricetype by the id
 *    tags: [pricetype]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The pricetype id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/pricetype'
 *    responses:
 *      200:
 *        description: The pricetype was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/pricetype'
 *      404:
 *        description: The pricetype was not found
 *      500:
 *        description: Some error happened
 */
// Update a pricetype with id
router.put("/:id", authen.authenticationToken, author.checkAdminRole, pricetype.update);

/**
 * @swagger
 * /pricetype/{id}:
 *   delete:
 *     summary: Remove the pricetype by id
 *     tags: [pricetype]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The pricetype id
 * 
 *     responses:
 *       200:
 *         description: The pricetype was deleted
 *       404:
 *         description: The pricetype was not found
 *       500:
 *         description: Some error happened
 */
// Delete a pricetype with id
router.delete("/:id", authen.authenticationToken, author.checkAdminRole, pricetype.delete);



module.exports = router