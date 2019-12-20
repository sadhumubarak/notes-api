const mongoose = require('mongoose');

const schema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: true,
    },
    createdBy: {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user'
    },
},  {
        timestamps: true,
    }
);

mongoose.model('feed', schema);