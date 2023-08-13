const mongoose= require("mongoose")

const tasks = new mongoose.Schema({
    tasks:{
        type: String,
    },
});

module.exports = mongoose.model("Tasks", tasks)