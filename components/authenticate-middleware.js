/*
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

const jwt = require('jsonwebtoken')

function restricted(req, res, next) {
  const token = req.headers.authorization

  console.log(process.env.JWT_SECRET, token)
  if(token){
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      console.log("INSIDE VERIFY")
      if(err){
        console.log(err)
        res.status(401).json({message: "Error.", error: err})
      } else {
        next();
      }
    })
  }else{
    req.decodedToken = decodedToken
    res.status(400).json({message: "No token provided."})
  }
}

function restricted_by_profile(req, res, next) {
    restricted(req, res, next)
}

module.exports = {restricted, restricted_by_profile}
