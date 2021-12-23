const account = require("../app/controllers/account");
const authen = require("../app/middlewares/authen");
const author = require("../app/middlewares/author")
const router = require("express").Router();
const identity = require("../app/middlewares/identity");
const createCheck = require("../app/middlewares/createCheck");
/**
 * @swagger
 * components:
 *   schemas:
 *     account:
 *       type: object
 *       required:
 *          - username
 *          - password
 *          - name
 *          - phone
 *          - email
 *          - address
 *          - birthday
 *          - gender
 *          - role_id
 *       properties:
 *         id:
 *          type: int
 *          description: The auto-generated id of the account
 *         username:
 *          type: string
 *          description: The account title
 *         password:
 *          type: string
 *          description: The account title
 *         name:
 *          type: string
 *          description: The account title
 *         phone:
 *          type: string
 *          description: The account title
 *         email:
 *          type: string
 *          description: The account title
 *         address:
 *          type: string
 *          description: The account title
 *         birthday:
 *          type: date
 *          description: The account title
 *         gender:
 *          type: boolean
 *          description: The account author
 *         role_id:
 *          type: int
 *          description: The account author
 *       example:
 *          username: member_1
 *          password: pass123456
 *          name: tuandeptrai
 *          phone: 0905803676
 *          email: tuakb881@gmail.com
 *          address: Sơn Trà, Đà Nẵng
 *          birthday: 2021-11-26
 *          gender: true
 *          role_id: 3
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     accountInfo:
 *       type: object
 *       required:
 *          - name
 *          - phone
 *          - address
 *          - birthday
 *          - gender
 *       properties:
 *         name:
 *          type: string
 *          description: The account title
 *         phone:
 *          type: string
 *          description: The account title
 *         address:
 *          type: string
 *          description: The account title
 *         birthday:
 *          type: date
 *          description: The account title
 *         gender:
 *          type: boolean
 *          description: The account author
 *       example:
 *          name: tuandeptrai
 *          phone: 0905803676
 *          address: Sơn Trà, Đà Nẵng
 *          birthday: 2021-11-26
 *          gender: true
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     accountPassword:
 *       type: object
 *       required:
 *          - password
 *       properties:
 *         password:
 *          type: string
 *          description: The account password
 *       example:
 *          password: pass123456
 */
/**
 * @swagger
 * tags:
 *   name: account
 *   description: The account managing API
 */

/**
 * @swagger
 * /account/register:
 *   post:
 *     summary: Create a new account
 *     tags: [account]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/account'
 *     responses:
 *       200:
 *         description: The account was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/account'
 *       400:
 *         description: User with username or email already exists!
 *       500:
 *         description: Some server error
 */
// Register a new account
router.post("/register", createCheck.createCheck, account.register);
// Verify a new account
router.get("/verify-email", account.verifyEmail);


/**
 * @swagger
 * /account/login:
 *   post:
 *     summary: Login 
 *     tags: [account]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/account'
 *     responses:
 *       200:
 *         description: Login successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/account'
 *       400:
 *         description: Account is not exists or not yet verified
 *       500:
 *         description: Some server error
 */
// Login account
router.post("/login", account.login);

/**
 * @swagger
 * /account/list?idRole=:
 *   get:
 *     summary: Returns the list of all the account
 *     tags: [account]
 *     parameters:
 *      - in: query
 *        name: idRole
 *        schema:
 *          type: integer
 *        description: The number of idRole
 *     responses:
 *       200:
 *         description: The list of the account
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/account'
 */
// Retrieve all account
router.get("/list", authen.authenticationToken, author.checkAdminRole, account.findAll);

/**
 * @swagger
 * /account/{id}:
 *   get:
 *     summary: Get the account by id
 *     tags: [account]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The account id
 *     responses:
 *       200:
 *         description: The account description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/account'
 *       404:
 *         description: The account was not found
 */
// Retrieve a single account with id
router.get("/:id", authen.authenticationToken, author.checkMemberRole, identity.identity, account.findOne);

/**
 * @swagger
 * /account/info/{id}:
 *  put:
 *    summary: Update the account info by the id
 *    tags: [account]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The account id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/accountInfo'
 *    responses:
 *      200:
 *        description: The account was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/account'
 *      404:
 *        description: The account was not found
 *      500:
 *        description: Some error happened
 */
// Update a account with id
router.put("/info/:id", authen.authenticationToken, author.checkMemberRole, identity.identity, account.updateAccountInfo);

// Update password 
router.put("/password/:id", authen.authenticationToken, author.checkMemberRole, identity.identity, account.updatePassword);

// reset password 
router.post("/reset-password/", account.resetPassword);
/**
 * @swagger
 * /account/{id}:
 *   delete:
 *     summary: Remove the account by id
 *     tags: [account]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The account id
 *     responses:
 *       200:
 *         description: The account was deleted
 *       404:
 *         description: The account was not found
 *       500:
 *         description: Some error happened
 */
// Delete a account with id
router.delete("/:id", authen.authenticationToken, author.checkAdminRole, account.delete);;


module.exports = router