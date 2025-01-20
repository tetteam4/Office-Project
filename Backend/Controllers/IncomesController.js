import Incomes from '../models/income.js';
import sequelize from 'sequelize';
import moment from 'moment';
// Get all incomes
export const getAllIncomes = async (req, res) => {
  try {
    const incomes = await Incomes.findAll();
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve incomes.', error });
  }
};

// Get a single income by ID
export const getIncomeById = async (req, res) => {
  const { id } = req.params;
  try {
    const income = await Incomes.findByPk(id);
    if (!income) {
      return res.status(404).json({ message: 'Income not found.' });
    }
    res.status(200).json(income);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve income.', error });
  }
};

// Create a new income
export const createIncome = async (req, res) => {
  const { source, amount, takingDate } = req.body;
  try {
    const newIncome = await Incomes.create({ source, amount, takingDate });
    res.status(201).json(newIncome);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create income.', error });
  }
};

// Update an existing income
export const updateIncome = async (req, res) => {
  const { id } = req.params;
  const { source, amount, takingDate } = req.body;
  try {
    const income = await Incomes.findByPk(id);
    if (!income) {
      return res.status(404).json({ message: 'Income not found.' });
    }
    await income.update({ source, amount, takingDate });
    res.status(200).json(income);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update income.', error });
  }
};

// Delete an income
export const deleteIncome = async (req, res) => {
  const { id } = req.params;
  try {
    const income = await Incomes.findByPk(id);
    if (!income) {
      return res.status(404).json({ message: 'Income not found.' });
    }
    await income.destroy();
    res.status(200).json({ message: 'Income deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete income.', error });
  }
};

// Get Monthly Income

export const getMonthlyIncome = async (req, res) => {
  try {
    // Fetch all incomes from the database
    const incomes = await Incomes.findAll(); // Replace with your ORM method
  
    // Group incomes by month and year, summing up the amounts correctly
    const groupedIncomes = incomes.reduce((acc, income) => {
      const monthYear = moment(income.takingDate).format("MMM YYYY"); // Format as "Jan 2025"
      
      // If the monthYear doesn't exist in the accumulator, initialize it with 0
      if (!acc[monthYear]) {
        acc[monthYear] = 0;
      }
      
      // Add the income amount to the total for the current monthYear, ensure the amount is numeric
      acc[monthYear] += parseFloat(income.amount); // Ensure we're adding numbers, not strings
  
      return acc;
    }, {});
  
    // Convert grouped data into an array of objects with month, year, and total amount
    const monthlyTotals = Object.entries(groupedIncomes).map(([monthYear, amount]) => {
      const [month, year] = monthYear.split(" ");
      return {
        month,
        year: parseInt(year, 10),
        amount,
      };
    });
  
    // Send the response
    res.status(200).json(monthlyTotals);
  } catch (error) {
    console.error("An error occurred while processing data:", error);
    res.status(500).json({ error: "An error occurred while processing data." });
  }
  
  
};



