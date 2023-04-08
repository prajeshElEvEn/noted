const express = require('express')
const {
    getNotes,
    createNote,
    deleteNote,
    updateNote,
    getNoteById } = require('../controllers/noteControllers')
const router = express.Router()


router.route('/').get(getNotes).post(createNote)
router.route('/:id').get(getNoteById).put(updateNote).delete(deleteNote)

module.exports = router
