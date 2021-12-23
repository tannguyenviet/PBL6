const ADMIN_ROLE = 1;
const MANAGER_ROLE = 2;
const MEMBER_ROLE = 3;

function identity(req, res, next) {
    if (req.payload.role === ADMIN_ROLE || req.payload.id == req.params.id) {
        next();
    } else {
        res.status(403);
        res.send("You dont have permission to access another User's resource.");
    }
}

module.exports = {
    identity
};