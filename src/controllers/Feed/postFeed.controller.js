const mongoose = require('mongoose');

const postFeed = async (request, response) =>{
    try{
        const FeedModel =mongoose.model('feed');
        const data = new FeedModel({
            title: request.body.title,
            description: request.body.description,
            createdBy: mongoose.mongo.ObjectId('5df3d53de0f72516d8c6f246'),
        });
        await data.save();
        return response.status(200).send({ message: 'feed Sucess!!!'});
    } catch(e){
        console.log(e)
        return response.status(500).send({error:true,message: 'Internal server error!!'});
    }
};
module.exports = postFeed;