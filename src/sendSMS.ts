const configData = {
    "SID": "ACf676f73c02ca42a5a80ae3d29169c324",
    "Secret": "1af119bb1505483f6e85a69c1ebe29cb"
}

function sendOTP(otpDocument: any){
    const accountSID = configData.SID;
    const authToken = configData.Secret;
    const client = require('twilio')(accountSID, authToken);

    client.messages.create({
        body: 'Your OTP for Hyperloop is ' + otpDocument.code,
        from: otpDocument.mobile_no,
        to: '+91' + otpDocument.mobile_no, 
    })
    .then((message: any)=>console.log(message))
}

export default sendOTP;