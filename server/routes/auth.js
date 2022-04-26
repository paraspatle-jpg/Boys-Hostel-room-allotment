const { Router } = require('express');
const authController = require('../controllers/authControllers');
const auth = require('../middlewares/auth');
const router = Router();

router.post('/register', authController.signup);
router.post('/login', authController.login);
router.post('/logout',auth, authController.logout);
router.get('/getuser',auth, authController.logout);

module.exports = router;