const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoticeSchema = new Schema({
  notice: { type: "string" },
});

module.exports = Notice = mongoose.model('notice',NoticeSchema);
