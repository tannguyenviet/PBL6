const film = require("../app/controllers/film");
const passport = require("passport");
const router = require("express").Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     film:
 *       type: object
 *       required:
 *          - name
 *          - time_release
 *          - country
 *          - director
 *          - duration
 *          - labor
 *          - stars
 *          - description
 *          - hashtag
 *          - rating
 *          - image
 *          - trailer
 *          - idFilmsOnWeb
 *       properties:
 *         id:
 *          type: int
 *          description: The auto-generated id of the film
 *         name:
 *          type: string
 *          description: The film title
 *         time_release:
 *          type: date
 *          description: The film title
 *         country:
 *          type: string
 *          description: The film title
 *         director:
 *          type: string
 *          description: The film title
 *         duration:
 *          type: int
 *          description: The film title
 *         labor:
 *          type: string
 *          description: The film title
 *         stars:
 *          type: string
 *          description: The film title
 *         description:
 *          type: string
 *          description: The film author
 *         hashtag:
 *          type: string
 *          description: The film author
 *         rating:
 *          type: double
 *          description: The film author
 *         image:
 *          type: string
 *          description: The film author
 *         trailer:
 *          type: string
 *          description: The film author
 *         idFilmsOnWeb:
 *          type: int
 *          description: The film author
 *       example:
 *          name: Aquaman
 *          time_release: 2018-07-06T00:00:00.000Z
 *          country: Australia, United States of America
 *          director: DC Comics, DC Entertainment, Warner Bros. Pictures, The Safran Company, Rodeo FX, Panoramic Pictures, DC Films, Cruel & Unusual Films
 *          duration: 143
 *          labor: C16
 *          stars: Jason Momoa, Amber Heard, Willem Dafoe, Patrick Wilson, Nicole Kidman, Dolph Lundgren, Yahya Abdul-Mateen II, Temuera Morrison, Ludi Lin, Michael Beach
 *          description: Once home to the most advanced civilization on Earth, Atlantis is now an underwater kingdom ruled by the power-hungry King Orm. With a vast army at his disposal, Orm plans to conquer the remaining oceanic people and then the surface world. Standing in his way is Arthur Curry, Orm's half-human, half-Atlantean brother and true heir to the throne.
 *          hashtag: Action, Adventure, Fantasy
 *          rating: 6.9
 *          image: https://image.tmdb.org/t/p/w500/xLPffWMhMj1l50ND3KchMjYoKmE.jpg
 *          trailer: https://www.youtube.com/embed/2wcj6SrX4zw
 *          idFilmsOnWeb: 297802
 */

/**
 * @swagger
 * /film/list?page=:
 *   get:
 *     summary: Returns the list of each page containing 10 films
 *     tags: [film]
 *     parameters:
 *      - in: query
 *        name: page
 *        schema:
 *          type: integer
 *        description: The number of page
 *     responses:
 *       200:
 *         description: The list of the film
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/film'
 */
// Retrieve all film
router.get("/list", film.findAll);

/**
 * @swagger
 * /film/now-playing:
 *   get:
 *     summary: Returns the list of all the film
 *     tags: [film]
 *     responses:
 *       200:
 *         description: The list of the now_playing films
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/film'
 */
//Get NowPlaying films
router.get("/now-playing", film.findNowPlaying);

/**
 * @swagger
 * /film/up-coming:
 *   get:
 *     summary: Returns the list of all the film
 *     tags: [film]
 *     responses:
 *       200:
 *         description: The list of the now_playing films
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/film'
 */
//Get UpComing films
router.get("/up-coming", film.findUpComing);

/**
 * @swagger
 * /film/category?q=:
 *   get:
 *     summary: Returns the list of each page containing 10 films (just for nowPlaying)
 *     tags: [film]
 *     parameters:
 *      - in: query
 *        name: q
 *        schema:
 *          type: string
 *        description: The genres of film
 *     responses:
 *       200:
 *         description: The list of the film categoried by the genres
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/film'
 */
//Get films by categories
router.get("/category", film.category);

/**
 * @swagger
 * /film/create:
 *   get:
 *     summary: Get new list of film from the https://www.themoviedb.org/
 *     tags: [film]
 *     responses:
 *       200:
 *         description: The new list of film
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/film'
 */
// Create a new film
router.get("/create", film.create);

/**
 * @swagger
 * /film/{id}:
 *   get:
 *     summary: Get the film by id
 *     tags: [film]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The film id
 *     responses:
 *       200:
 *         description: The film description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/film'
 *       404:
 *         description: The film was not found
 */
// Retrieve a single film with id
router.get("/:id", film.findOne);

/**
 * @swagger
 * /film/{id}:
 *  put:
 *    summary: Update the film  by the id
 *    tags: [film]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The film id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/film'
 *    responses:
 *      200:
 *        description: The film was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/film'
 *      404:
 *        description: The film was not found
 *      500:
 *        description: Some error happened
 */
// Update a film with id
router.put("/:id", film.update);

/**
 * @swagger
 * /film/{id}:
 *   delete:
 *     summary: Remove the film by id
 *     tags: [film]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The film id
 * 
 *     responses:
 *       200:
 *         description: The film was deleted
 *       404:
 *         description: The film was not found
 *       500:
 *         description: Some error happened
 */
// Delete a film with id
router.delete("/:id", film.delete);

module.exports = router