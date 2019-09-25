/*
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/





function restricted(req, res, next) {
  const user = req.session.user
  if(user) {
    next();
  } else {
    res.status(400).json({message: "Please log in."})
  }
}

function restricted_by_profile(req, res, next) {
  const user = req.session.user
  if(user && user.teacher_id == req.params.id) {
    next();
  } else {
    res.status(400).json({message: "Please log in."})
  }
}

module.exports = {restricted, restricted_by_profile}