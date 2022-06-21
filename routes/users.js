import express from 'express';
import { createUser, getUsers, getUser, updateUser, deleteUser } from '../controllers/users.js';

const router = express.Router();

// Add a new user to the database
router.post('/', createUser);

// Get all users from the database
router.get('/', getUsers);

// Get user identified by UUID from the database
router.get('/:id', getUser);

// Update an existing user in the database
router.patch('/:id', updateUser);

// Delete an existing user from the database
router.delete('/:id', deleteUser);

export default router;
