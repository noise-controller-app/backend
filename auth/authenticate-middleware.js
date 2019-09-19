/*
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

function restricted(req, res, next) {
  const user = req.session.user
  console.log("checking", req.session.user, user, req.session)
  if(user) {
    next();
  } else {
    res.status(400).json({message: "Please log in."})
  }
}

module.exports = restricted
