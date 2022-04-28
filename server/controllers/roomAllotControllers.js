const User = require("../models/User");

module.exports.roomAllot = async (req, res) => {
  try {
    const roomNo = req.params.roomNo;
    const user = req.user;
    const reqUser = await User.findOne({ email: user.email });
    console.log(roomNo);
    reqUser.roomNumber = roomNo;

    await reqUser.save();
    res.status(200).send({ message: "Room Alloted Successfully" });
  } catch (err) {
    res.status(400).send({ err: err });
  }
};

module.exports.pendingSwapReq = async (req, res) => {
  try {
    const arr = [];

    const users1 = await User.find({});
    const users2 = await User.find({});

    users1.map((user1) => {
      users2.map((user2) => {
        if (
          user1.roomNumber === user2.swapRoom &&
          user2.roomNumber === user1.swapRoom
        ) {
          arr.push({ user1, user2 });
        }
      });
    });
    arr.map((arr1) => {
      arr.map((arr2, index) => {
        if (
          arr1.user1.email === arr2.user2.email &&
          arr1.user2.email === arr2.user1.email
        ) {
          arr.splice(index, index);
        }
      });
    });
    res.status(200).send(arr);
  } catch (err) {
    res.status(400).send({ err: err });
  }
};

module.exports.approveSwap = async (req, res) => {
  try {
    const { user1, user2 } = req.body;
    const usera = await User.findOne(user1);
    const userb = await User.findOne(user2);

    usera.roomNumber = user2.roomNumber;
    userb.roomNumber = user1.roomNumber;  

    usera.swapRoom = 0;
    userb.swapRoom = 0;

    console.log(usera);

    await usera.save();
    await userb.save();

    res.status(200).send({ message: "Rooms Swapped" });
  } catch (err) {
    res.status(400).send({ err: err });
  }
};

module.exports.acceptSwap = async (req, res) => {
  try {
    const roomNo = req.params.roomNo;
    const user = req.user;

    const reqUser = await User.findOne({ email: user.email });

    reqUser.swapRoom = roomNo;
    await reqUser.save();

    res
      .status(200)
      .send({ message: "Swap Requested, will be approved by admim soon" });
  } catch (err) {
    res.status(400).send({ err: err });
  }
};

module.exports.getRoomInfo = async (req, res) => {
  try {
    const roomNo = req.params.roomNo;
    const roomOwners = await User.find({ roomNumber: roomNo });
    res.status(200).send(roomOwners);
  } catch (err) {
    res.status(400).send({ err: err });
  }
};

module.exports.getSwapRequests = async (req, res) => {
  try {
    const roomNo = req.params.roomNo;
    const swapRequests = await User.find({ swapRoom: roomNo });

    res.status(200).send(swapRequests);
  } catch (err) {
    res.status(400).send({ err: err });
  }
};

module.exports.requestSwap = async (req, res) => {
  try {
    const roomNo = req.params.roomNo;
    const user = req.user;

    user.swapRoom = roomNo;
    await user.save();

    res.status(200).send({message:"Requested Successfully"});

  } catch (err) {
    res.status(400).send({ err: err });
  }
}