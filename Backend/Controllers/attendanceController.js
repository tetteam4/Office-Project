import Attendance from '../models/attendence.js';

//get todays records
export const getTodayAttendance = async (req, res) => {
  try {
    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];

    // Fetch records where the date field matches today's date
    const todayRecords = await Attendance.findAll({
      where: {
        date: today,
      },
    });

    if (todayRecords.length === 0) {
      return res.status(404).json({
        message: 'No attendance records found for today.',
      });
    }

    res.status(200).json({
      message: 'Attendance records fetched successfully.',
      records: todayRecords,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching today\'s attendance records.',
      error,
    });
  }
};

/**
 * Create a new Attendance
 */
export const createAttendance = async (req, res) => {
  console.log(req);
  
  try {
    const { name, status } = req.body;
    console.log(name, status);
    

    if (!name || !status) {
      return res.status(400).json({ message: 'Name and status are required.' });
    }

    const newAttendance = await Attendance.create({
      name,
      status,
      date: new Date(),
    });

    res.status(201).json({
      message: 'Attendance created successfully.',
      Attendance: newAttendance,
    });
  } catch (error) {
    console.error('Error creating attendance:', error); // Log stack trace
    res.status(500).json({ message: 'Error creating attendance.', error });
  }
};


/**
 Get all Attendances
 */
export const getAllAttendances = async (req, res) => {
  try {
    const Attendances = await Attendance.findAll();
    res.status(200).json(Attendances);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Attendances.', error });
  }
};

/**
 * Get a specific Attendance by ID
 */
export const getAttendanceById = async (req, res) => {
  try {
    const { id } = req.params;
    const Attendance = await Attendance.findByPk(id);

    if (!Attendance) {
      return res.status(404).json({ message: 'Attendance not found.' });
    }

    res.status(200).json(Attendance);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Attendance.', error });
  }
};

/**
 * Update an Attendance by ID
 */
export const updateAttendance = async (req, res) => {
  try {
    const { id } = req.params;
    const { for: purpose, amount, person } = req.body;

    const Attendance = await Attendance.findByPk(id);

    if (!Attendance) {
      return res.status(404).json({ message: 'Attendance not found.' });
    }

    Attendance.for = purpose || Attendance.for;
    Attendance.amount = amount || Attendance.amount;
    Attendance.person = person || Attendance.person;

    await Attendance.save();

    res.status(200).json({
      message: 'Attendance updated successfully.',
      Attendance,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error updating Attendance.', error });
  }
};

/**
 * Delete an Attendance by ID
 */
export const deleteAttendance = async (req, res) => {
  try {
    const { id } = req.params;

    const Attendance = await Attendance.findByPk(id);

    if (!Attendance) {
      return res.status(404).json({ message: 'Attendance not found.' });
    }

    await Attendance.destroy();

    res.status(200).json({ message: 'Attendance deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting Attendance.', error });
  }
};
