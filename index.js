//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import 'dotenv/config'
import axios from 'axios';
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let mailObject = {
    "recipients": [{
        "to": [{
            "name": "Code",
            "email": "joydeepmobile.2014@gmail.com"
        }],
        "variables": {
            "company_name": "The TEST Company",
            "otp": "9785"
        }
    }],
    "from": {
        "email": "no-reply@app.code180.in"
    },
    "domain": "app.code180.in",
    "template_id": "global_otp"
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const options = {
    method: 'POST',
    url: 'https://control.msg91.com/api/v5/email/send',
    headers: {
        'accept': 'application/json',
        'content-type': 'application/JSON',
        'authkey': process.env.AUTHKEY,
    },
    data: JSON.stringify(mailObject)
};
//+++++++++++++++++++++++++++++++++++++++++++
// Send Mail
//+++++++++++++++++++++++++++++++++++++++++++
try {
    const getMailResond = await axios.request(options);
    console.log(getMailResond);
    console.error("Passed................................................!!!");
} catch (error) {
    console.error(error);
    console.error("Failled................................................!!!");
}