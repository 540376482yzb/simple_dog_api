const express = require('express')
const router = express.Router()
const Dog = require('../dbs/dogmodel')
const fetch = require('node-fetch')
// router.get('/add', async (req, res, next) => {
//     const { status, message } = await fetch('https://dog.ceo/api/breeds/image/random').then(res => res.json())
//     if (!status) {
//         return next('FETCH DOG ERROR')
//     }
//     Dog.create({ url: message }).then(result => res.json({
//         status: true,
//         url: result.url
//     }))
// })
router.get('/random', async (req, res, next) => {
    const count = await Dog.find().count()
    const random = Math.floor(Math.random() * count)
    Dog.findOne().skip(random).exec((err, result) => {
        res.json({
            status: true,
            url: result.url
        })
    })
})
module.exports = router