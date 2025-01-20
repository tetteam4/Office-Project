import express from 'express';
import {
  getAllIncomes,
  getIncomeById,
  createIncome,
  updateIncome,
  deleteIncome,
  getMonthlyIncome,
} from '../Controllers/IncomesController.js';

const IncomesRouter = express.Router();

// Routes for incomes
IncomesRouter.get('/month', getMonthlyIncome); // Get all incomes
IncomesRouter.get('/:id', getIncomeById); // Get a specific income by ID
IncomesRouter.get('/', getAllIncomes); // Get monthly income 
IncomesRouter.post('/', createIncome); // Create a new income
IncomesRouter.put('/:id', updateIncome); // Update an existing income
IncomesRouter.delete('/:id', deleteIncome); // Delete an income

export default IncomesRouter;
