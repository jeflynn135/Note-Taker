const router = require('express').Router();


// Import our modular routers for /notes
const noteRoutes = require('./noteRoutes');


router.use('/notes', noteRoutes);


module.exports = router;
