const { Router } = require('express');
const noticeControllers = require('../controllers/noticeControllers');
const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');
const router = Router();

router.get('/notice',noticeControllers.getNotice);
router.post('/notice',noticeControllers.postNotice);
router.delete('/notice/:id',noticeControllers.deleteNotice);

module.exports = router;

