const express = require('express')
const router = express.Router()
const ChecklistModel = require('../models/checklistModel')

router.get('/', async (req, res) => {
    try {
        let checklists = await ChecklistModel.find({})
        res.status(200).render('checklists/index', {checklists: checklists})
    }catch(error) {
        res.status(500).render('pages/error', {error: 'Erro ao renderizar os checklists'})
    }
})

router.get('/new', async (req, res) => {
    try {
        const checklist = new ChecklistModel()
        res.status(200).render('checklists/new', {checklist: checklist})
    } catch (error) {
        
    }
})

router.get('/:id', async (req, res) => {
    try {
        let checklist = await ChecklistModel.findById(req.params.id)
        res.status(200).render('checklists/show', {checklist: checklist})
    }catch(error) {
        res.status(500).render('pages/error', {error: 'Erro ao renderizar o checklist'})
    }
})

router.post('/', async (req, res) => {
    let {name} = req.body.checklist
    let checklist = new ChecklistModel({name})
    
    try {
        await checklist.save()
        res.redirect('/checklists')
    }catch(error) {
        res.status(422).render('checklist/new', {error:'Erro ao enviar o checklist', checklists: {...checklist, error}})
    }
})

router.put('/:id', async (req, res) => {
    let {name} = req.body

    try {
        let checklist = await ChecklistModel.findByIdAndUpdate(req.params.id, {name}, {new: true})
        res.status(200).json(checklist)
    } catch(error) {
        res.status(422).json(error)
    }
})


router.delete('/:id', async (req, res) => {
    try {
        let checklist = await ChecklistModel.findByIdAndRemove(req.params.id)
        res.status(200).json(checklist)
    }catch (error) {
        res.status(422).json(error)
    }
})

module.exports = router;

