/*
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/



  // const user = req.session.user
  // console.log("checking", req.session.user, "USER", user, req.session)
  // if(user) {
  //   next();
  // } else {
  //   res.status(400).json({message: "Please log in."})
  // }

function restricted(req, res, next) {
  next();
}

function restricted_by_profile(req, res, next) {
  next();
}

// const user = req.session.user
// console.log("checking", req.session.user, user, req.session)
// if(user && user.teacher_id == req.params.id) {
//   next();
// } else {
//   res.status(400).json({message: "Please log in."})
// }


module.exports = {restricted, restricted_by_profile}
