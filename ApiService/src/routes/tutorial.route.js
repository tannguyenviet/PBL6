const tutorials = require("../app/controllers/tutorial");
const passport = require("passport");
const express = require("express")
const router = express.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     Tutorial:
 *       type: object
 *       required:
 *         - title
 *         - author
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The book title
 *         author:
 *           type: string
 *           description: The book author
 *       example:
 *         id: d5fE_asz
 *         title: The New Turing Omnibus
 *         author: Alexander K. Dewdney
 */

/**
 * @swagger
 * tags:
 *   name: Tutorials
 *   description: The tutorials managing API
 */
// Create a new Tutorial
router.post("/", passport.authenticate("jwt", { session: false }), tutorials.create);


/**
 * @swagger
 * /tutorials:
 *   get:
 *     summary: Returns the list of all the tutorials
 *     tags: [Tutorials]
 *     responses:
 *       200:
 *         description: The list of the tutorials
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tutorial'
 */
// Retrieve all Tutorials
router.get("/", tutorials.findAll);

// Retrieve all published Tutorials
router.get("/published", tutorials.findAllPublished);
// function get + /published -> hardcode

// Retrieve a single Tutorial with id
router.get("/:id", tutorials.findOne);

// Update a Tutorial with id
router.put("/:id", tutorials.update);

// Delete a Tutorial with id
router.delete("/:id", tutorials.delete);

// Delete all Tutorials
// router.delete("/", tutorials.deleteAll);

module.exports = router