var mongoose = require('mongoose');

var historySchema = mongoose.Schema({

    author: {
        type: String,
        required: [true, '판매자 ID를 입력하세요']
    },
    title: {
        type: String,
        required:[true, "Title is required"]
    },
    contents: {
        type: String,
        required:[true, "Body is required"]
    },
    category:{
        type:String
    },
    CreatedAt:{
        type: Date
    }, // 판매 날짜
    attachment: { 
        type: mongoose.Schema.Types.ObjectId, ref: "file" }

});

var History = mongoose.model('historys', historySchema);
module.exports = History;


