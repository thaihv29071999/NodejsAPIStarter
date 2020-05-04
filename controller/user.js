const index = (req, res) => {
    return res.status(200).json({
        message: "You requested  to use handle."
    })
}

module.exports = {
    index
}