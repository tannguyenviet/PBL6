const ticket = require("../app/controllers/ticket");
const passport = require("passport");
const router = require("express").Router();
const payment = require("../app/controllers/order")
    /**
     * @swagger
     * components:
     *   schemas:
     *    ticket:
     *       type: object
     *       required:
     *          - amount
     *          - price
     *          - time_booking
     *          - account_id 
     *          - show_time_id 
     *          - location
     *          - ticketHash
     *          - ticketQR
     *          - check_in
     *       properties:
     *         id:
     *          type: int
     *          description: The auto-generated id of theticket
     *         amount:
     *          type: string
     *          description: The ticket title
     *         price:
     *          type: string
     *          description: The ticket title
     *         time_booking:
     *          type: string
     *          description: The ticket title
     *         account_id:
     *          type: string
     *          description: The ticket title
     *         show_time_id:
     *          type: string
     *          description: The ticket title
     *         location:
     *          type: string
     *          description: The ticket title
     *         ticketHash:
     *          type: date
     *          description: The ticket title
     *         ticketQR:
     *          type: boolean
     *          description: The ticket author
     *         check_in:
     *          type: int
     *          description: The ticket author
     *       example:
     *          amount: 2
     *          price: 100000
     *          time_booking: 2021-11-19T19:00:00.000Z
     *          account_id: 10
     *          show_time_id: 2
     *          location: A2,B2,C2,D2
     */

/**
 * @swagger
 * tags:
 *   name: ticket
 *   description: The ticket managing API
 */

/**
 * @swagger
 * /ticket/create:
 *   post:
 *     summary: Create a new ticket
 *     tags: [ticket]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ticket'
 *     responses:
 *       200:
 *         description: The ticket was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ticket'
 *       500:
 *         description: Some server error
 */
// Create a new ticket
router.post("/create", ticket.create);

/**
 * @swagger
 * /ticket/location/list?idShowtime=:
 *   get:
 *     summary: Returns location - ticket list of a showtime
 *     tags: [ticket]
 *     parameters:
 *      - in: query
 *        name: idShowtime
 *        schema:
 *          type: int
 *        description: The showtime id
 *     responses:
 *       200:
 *         description: The list of the location - ticket
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ticket'
 */
// Retrieve all ticket-locations of a showtime by showtimeId
router.get("/location/list", ticket.findLocationsByShowtimeId);

/**
 * @swagger
 * /ticket/revenue?idShowtime=:
 *   get:
 *     summary: Returns revenue of a showtime
 *     tags: [ticket]
 *     parameters:
 *      - in: query
 *        name: idShowtime
 *        schema:
 *          type: int
 *        description: The showtime id
 *     responses:
 *       200:
 *         description: The revenue of a showtime
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ticket'
 */
// Retrieve all ticket-locations of a showtime by showtimeId
router.get("/revenue", ticket.countRevenueByShowtimeId);

/**
 * @swagger
 * /ticket/account/{id}:
 *   get:
 *     summary: Get the ticket by account id
 *     tags: [ticket]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The account id
 *     responses:
 *       200:
 *         description: The ticket description by account id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ticket'
 *       404:
 *         description: The ticket was not found
 */
// Retrieve all ticket of a ticket  - Phanquyen
router.get("/account/:id", ticket.findByAccountId);

/**
 * @swagger
 * /ticket/{id}:
 *   delete:
 *     summary: Remove the ticket by id
 *     tags: [ticket]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ticket id
 *     responses:
 *       200:
 *         description: The ticket was deleted
 *       404:
 *         description: The ticket was not found
 *       500:
 *         description: Some error happened
 */
// Delete a ticket with id
router.delete("/:id", ticket.delete);

module.exports = router