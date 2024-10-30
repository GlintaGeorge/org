const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const connectDB = require('./config/database')

const userRoutes = require('./routes/userRoutes');
const departmentRoutes = require('./routes/departmentRoutes');
const departmentHeadRoutes = require('./routes/departmentHeadRoutes')
const requestRoutes = require('./routes/requestRoutes')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

connectDB();

app.use('/api/users',userRoutes);
app.use('/api/departments',departmentRoutes);
app.use('/api/Request',departmentHeadRoutes);
app.use('/api/request',requestRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

