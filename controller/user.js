const User = require('../models/User')

// Promises
// const index = (req, res) => {
//     User.find({}).then((users)=> {
//         return res.status(200).json({users})
//     }).catch((err)=> next(err))

// }
// const newUser = (req, res, next) => {
//     console.log('req.body content: ', req.body)
//     const newUser = new User(req.body)
//     console.log('newUser: ', newUser)
//     newUser.save().then((user) => {
//         return res.status(201).json({user})
//     }).catch((err) => next(err))
// }

// Async /await
const index = async (req, res, next) => {
    const users = await User.find({})
    return res.status(200).json({ users })
}
const newUser = async (req, res, next) => {
    const newUser = new User(req.body)
    await newUser.save()
    return res.status(201).json({ user: newUser })
}
const getUser = async (req, res, next) => {
    const { userID } = req.params
    const user = await User.findById(userID)
    return res.status(200).json({ user })
}
const replaceUser = async (req, res, next) => {
    const { userID } = req.params
    const newUser = req.body
    const result = await User.findByIdAndUpdate(userID, newUser)
    return res.status(200).json({ success: true })
}
const updateUser = async (req, res, next) => {
    const { userID } = req.params
    const newUser = req.body
    const result = await User.findByIdAndUpdate(userID, newUser)
    return res.status(200).json({ success: true })
}
module.exports = {
    index,
    newUser,
    getUser,
    replaceUser,
    updateUser
}