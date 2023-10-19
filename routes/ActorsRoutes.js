const express = require('express');
const db = require('../models/db');
const Joi = require('joi');

const router = express.Router();

// Define un esquema de validación para el actor
const actorSchema = Joi.object({
    first_name: Joi.string().trim().regex(/^[A-Za-z\s]+$/).min(1).max(100).required(),
    last_name: Joi.string().trim().regex(/^[A-Za-z\s]+$/).min(1).max(100).required()
});

// Obtener todos los actores
router.get('/', async (req, res) => {
    let queryStr = 'SELECT * FROM actor';
    const values = [];

    if (req.query.limit && req.query.offset) {
        queryStr += ' LIMIT ? OFFSET ?';
        values.push(parseInt(req.query.limit), parseInt(req.query.offset));
    }

    try {
        const [actors] = await db.query(queryStr, values);
        res.json(actors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Obtener actor por ID
router.get('/:id', async (req, res) => {
    const actorId = req.params.id;
    try {
        const [actor] = await db.query('SELECT * FROM actor WHERE actor_id = ?', [actorId]);
        res.json(actor[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Crear actor nuevo
router.post('/', async (req, res) => {
    const { first_name, last_name } = req.body;

    // Validación
    const validationResult = actorSchema.validate(req.body);
    if (validationResult.error) {
        return res.status(400).send(validationResult.error.details[0].message);
    }

    try {
        const [result] = await db.query('INSERT INTO actor (first_name, last_name) VALUES (?, ?)', [first_name, last_name]);
        res.json({ actorId: result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Actualizar actor por ID
router.put('/:id', async (req, res) => {
    const actorId = req.params.id;
    const { first_name, last_name } = req.body;

    // Validación
    const validationResult = actorSchema.validate(req.body);
    if (validationResult.error) {
        return res.status(400).send(validationResult.error.details[0].message);
    }

    try {
        await db.query('UPDATE actor SET first_name = ?, last_name = ? WHERE actor_id = ?', [first_name, last_name, actorId]);
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Eliminar actor por ID
router.delete('/:id', async (req, res) => {
    const actorId = req.params.id;
    try {
        await db.query('DELETE FROM actor WHERE actor_id = ?', [actorId]);
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
