const express = require( 'express' );
const { checkAuthorization } = require('../middelwares/user' );
const userRouter = require( './user.js' );
const taskRouter = require( './task.js' );
const adminRouter = require( './admin.js' );
const { handleAppError } = require( '../middelwares/error_handleres' );

const router = express.Router();


router.use( '/admin', adminRouter );


router.use( checkAuthorization );
router.use( userRouter );
router.use( taskRouter );

router.use( handleAppError );

module.exports = router;