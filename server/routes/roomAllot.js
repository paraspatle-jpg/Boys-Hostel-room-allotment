const {Router} = require('express');
const roomAllotControllers = require('../controllers/roomAllotControllers');
const auth = require('../middleswares/auth');
const admin = require('../middleswares/admin');
const router = Router();

router.update('/swap',admin);