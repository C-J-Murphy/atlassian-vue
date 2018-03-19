/* eslint-disable */

const jwt = require('atlassian-jwt');
const moment = require('moment'); // time library for convenience
const now = moment().utc();

const createJwtToken = () => {
    // Simple form of [request](https://npmjs.com/package/request) object
    const secret = 'xxx';
    const req = {
        method: 'GET',
        originalUrl: '/rest/resource/you/want'
    };
    
    let token = {
        "iss": 'issuer-val',
        "iat": now.unix(),                      // the time the token is generated
        "exp": now.add(3, 'minutes').unix(),    // token expiry time (recommend 3 minutes after issuing)
        "qsh": jwt.createQueryStringHash(req)   // [Query String Hash](https://developer.atlassian.com/cloud/jira/platform/understanding-jwt/#a-name-qsh-a-creating-a-query-string-hash)
    };

    return jwt.encode(token, secret);
}

const decodeJwtToken = (token, secret) => {
    /*
    * jwt.decode(token, secret, noVerify, algorithm)
    *
    * Decodes the JWT token and verifies the signature using the secret and algorithm. Algorithm defaults to HS256.
    */
    //var decoded = jwt.decode(token, secret);
    //console.log(decoded); //=> { foo: 'bar' }

    /*
    * Decode without verifing the signature of the token.
    * Tokens should never be used without verifying the signature as otherwise payload trust cannot be established.
    */
    var decoded = jwt.decode(token, null, true);
    //console.log(decoded); //=> { foo: 'bar' }
    return decoded;
}

export { createJwtToken, decodeJwtToken };