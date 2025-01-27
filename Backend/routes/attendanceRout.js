import express from 'express';
import {
  createAttendance,
  getAllAttendances,
  getAttendanceById,
  updateAttendance,
  deleteAttendance,
} from '../Controllers/AttendanceController.js';

const AttendanceRouter = express.Router();

AttendanceRouter.post('/', createAttendance);
AttendanceRouter.get('/', getAllAttendances);
AttendanceRouter.get('/:id', getAttendanceById);
AttendanceRouter.put('/:id', updateAttendance);
AttendanceRouter.delete('/:id', deleteAttendance);

export default AttendanceRouter;
