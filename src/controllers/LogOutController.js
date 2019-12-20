const mongoose = require('mongoose');
const shajs = require('sha.js');
const uuid = require('uuid');
const moment = require('moment');

const LogOutController = async (request, response) => {
    try {
        const UserLoginModel = mongoose.model('userlogin');
        // console.log('state: ', request.state );
        const data = await UserLoginModel.findOne({ sessionToken: request.state.sessionToken });
        if (data) {
            await UserLoginModel.findOneAndUpdate({ _id: data._id }, { $set: { logoutDateTime: moment().format('YYYY-MM-DD HH:mm:ss') } });
            return response.status(200).send({ error: false, message: 'Logout Successfully' });
        }
        return response.status(400).send({ error: true, message: 'Invalid Credentials' });
    } catch (e) {
        return response.status(500).send({ error: true, message: e.toString() });
    }
};

module.exports = LogOutController;
