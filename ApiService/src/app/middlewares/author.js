const ADMIN_ROLE = 1;
const MANAGER_ROLE = 2;
const MEMBER_ROLE = 3;
module.exports = {
  async checkMemberRole(req, res, next) {
    if (
      req.payload.role === ADMIN_ROLE ||
      req.payload.role === MANAGER_ROLE ||
      req.payload.role === MEMBER_ROLE
    ) {
      next();
    } else {
      res.status(403);
      res.send("You dont have user permission");
    }
  },
  async checkManagerRole(req, res, next) {
    if (req.payload.role === ADMIN_ROLE || req.payload.role === MANAGER_ROLE) {
      next();
    } else {
      res.status(403);
      res.send("You dont have Manager permission");
    }
  },
  async checkAdminRole(req, res, next) {
    if (req.payload.role === ADMIN_ROLE) {
      next();
    } else {
      res.status(403);
      res.send("You dont have admin permission");
    }
  },
};
