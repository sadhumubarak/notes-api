const mongoose = require('mongoose');

module.exports = async (req, res, next) => {
    try {
        console.log('req: ', req.headers);
        if ('authorization' in req.headers) {
            const token = req.headers.authorization.split('Bearer')[ 1 ].trim();
            console.log('token', token);
            const UserLoginModel = mongoose.model('userlogin');
            const data = await UserLoginModel.findOne({ sessionToken: token });
            
            req.state = data;
            // console.log('data:' , data);

            return next();
        }
        return res.status(400).send({ success: false, message: 'Authorization header is required' });
    } catch (e) {
        console.log('error: ', e);
        return res.status(500).send({ success: false, message: 'Unexpected error occured!' });
    }
};
