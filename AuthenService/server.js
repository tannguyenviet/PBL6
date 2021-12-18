const cors = require("cors");
require("dotenv").config();
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const db = require("./utils/db");
const Account = db.account;
const PORT = process.env.PORT || 4000;
const Op = db.Sequelize.Op;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
db.sequelize.sync();

let refreshTokens = [];

app.get("/", (req, res) => {
  res.json('Hello Authen Service')
})

app.post("/token", (req, res) => {
  const refreshToken = req.body.token;
  if (refreshToken == null) return res.sendStatus(401);
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const accessToken = generateAccessToken({ name: user.name });
    res.json({ accessToken: accessToken });
  });
});

app.delete("/logout", (req, res) => {
  refreshTokens = refreshTokens.filter((token) => token !== req.body.token);
  res.sendStatus(204);
});

app.post("/login", async (req, res) => {
  // Authenticate User
  // const username = req.body.username;
  // const user = { name: username };
  //
  // Ser vice -> Account    db   ORM
  // PBL -> Account         db
  const { username, password } = req.body;
  const account = await Account.findOne({
    raw: true, // just only return dataValue
    // attributes: ['id', 'name', 'phone', 'email', 'address', 'birthday', 'gender', 'role_id'],
    where: {
      [Op.and]: [{ username: username }, { isVerified: true }],
    },
  });
  if (!account)
    return res
      .status(400)
      .json({ message: "Account is not exists or not yet verified" });
  console.log("account ne", account);
  const accessToken = generateAccessToken(account);
  const refreshToken = jwt.sign(account, process.env.REFRESH_TOKEN_SECRET);
  refreshTokens.push(refreshToken);
  res.json({
    info: account,
    token: accessToken,
    refreshToken: refreshToken,
  });
});

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1d" });
}

app.listen(PORT, () => {
  console.log("app listening on port ", PORT);
});
