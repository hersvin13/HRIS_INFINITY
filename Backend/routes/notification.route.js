const router = require("express").Router()

const {Op} = require("sequelize")

//Notification Model:
const Notification = require("../db/models/notifcation.model")

router.route('/').get(async (req, res) => {
    await Notification.findAll()
            .then((data) => {
                res.json(data)
            }).catch((e) => {
                console.log(e)
                res.status(400)
            })
})


module.exports = router
