const User = require('../models/User')

const index = (req, res) => {
    // Promises
    User.find({}).then((users)=> {
        return res.status(200).json({users})
    }).catch((err)=> next(err))
    
}
const newUser = (req, res, next) => {
    console.log('req.body content: ', req.body)
    const newUser = new User(req.body)
    console.log('newUser: ', newUser)
    newUser.save().then((user) => {
        return res.status(201).json({user})
    }).catch((err) => next(err))
}
module.exports = {
    index,
    newUser
}