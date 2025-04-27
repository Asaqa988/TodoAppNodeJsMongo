const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Task title is required"],
    },

    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports=mongoose.model('Task',TaskSchema)
