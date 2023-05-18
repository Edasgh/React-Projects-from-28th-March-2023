const Schema = mongoose.Schema;
let Task = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    deadline: {
        type: Date
    },
    category: {
        type: String
    }
});
module.exports = mongoose.model('Task', Task);
