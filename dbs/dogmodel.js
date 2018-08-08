'use strict'
const mongoose = require('mongoose')
const dogScehma = new mongoose.Schema({
    url: { type: String }
})
dogScehma.set('toObject', {
    transform: function (doc, ret) {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
    }
})
module.exports = mongoose.model('Dog', dogScehma)