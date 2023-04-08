const asyncHandler = require('express-async-handler')
const Note = require('../models/noteModel')

// @desc    Fetch all notes
// @route   GET /api/notes
// @access  Public
const getNotes = asyncHandler(async (req, res) => {
    const notes = await Note.find({})
    res.status(200).json(notes)
})

// @desc    Fetch single note
// @route   GET /api/notes/:id
// @access  Public
const getNoteById = asyncHandler(async (req, res) => {
    const note = await Note.findById(req.params.id)
    if (note) {
        res.status(200).json(note)
    } else {
        res.status(404)
        throw new Error('Note not found')
    }
})

// @desc    Delete a note
// @route   DELETE /api/notes/:id
// @access  Private/Admin
const deleteNote = asyncHandler(async (req, res) => {
    const note = await Note.findById(req.params.id)
    if (note) {
        await note.remove()
        res.status(200).json({ message: 'Note removed' })
    } else {
        res.status(404)
        throw new Error('Note not found')
    }
})

// @desc    Create a note
// @route   POST /api/notes
// @access  Private/Admin
const createNote = asyncHandler(async (req, res) => {
    const { title, content } = req.body
    const note = new Note({
        title,
        content
    })
    const createdNote = await note.save()
    res.status(201).json(createdNote)
})

// @desc    Update a note
// @route   PUT /api/notes/:id
// @access  Private/Admin
const updateNote = asyncHandler(async (req, res) => {
    const { title, content } = req.body
    const note = await Note.findById(req.params.id)
    if (note) {
        note.title = title
        note.content = content
        const updatedNote = await note.save()
        res.status(200).json(updatedNote)
    } else {
        res.status(404)
        throw new Error('Note not found')
    }
})

module.exports = {
    getNotes,
    getNoteById,
    deleteNote,
    createNote,
    updateNote
}
