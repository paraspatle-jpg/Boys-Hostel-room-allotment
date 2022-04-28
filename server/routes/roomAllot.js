const { Router } = require("express");
const roomAllotControllers = require("../controllers/roomAllotControllers");
const auth = require("../middlewares/auth");
const admin = require("../middlewares/admin");
const router = Router();

router.get("/swaprequests/:roomNo", roomAllotControllers.getSwapRequests);
router.post("/roomallotment/:roomNo",auth, roomAllotControllers.roomAllot);
router.post("/acceptswap/:roomNo", auth, roomAllotControllers.acceptSwap);
router.get("/getroominfo/:roomNo", roomAllotControllers.getRoomInfo);
router.get("/pendingswap",admin, roomAllotControllers.pendingSwapReq);
router.post("/approveswap",admin, roomAllotControllers.approveSwap);
router.post("/requestswap/:roomNo", auth, roomAllotControllers.requestSwap);

module.exports = router;
