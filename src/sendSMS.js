import configData from './config.json';


function sendOTP(phone_no, otp){
    const accountSID = configData.SID;
    const authToken = configData.Secret;
    const client = require('twilio')(accountSID, authToken);

    client.message.create({
        body: 'Your OTP for Hyperloop is ' + otp,
        from: phone_no,
        to: phone_no, 
    })
    .then(message=>console.log(message))

}

export default sendOTP;