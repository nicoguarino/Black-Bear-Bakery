const jwt = require('jsonwebtoken');

const secret = 'it a secret for a reason';
const expiration = '3h';

module.exports = {
    authMiddleware: function ({ req }) {
        // sends token as a body, query, or header
        let token = req.body.token || req.query.token || req.headers.authorization;

        // ["Bearer", "<tokenvalue>"] -> syntax of authorization token
        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        // if not token return req
        if (!token) {
            return req;
        }

        //try to verify token, catch if token is invalid
        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid token');
        }

        return req;
    },
    signToken: function ({ firstName, email, _id }) {
        const payload = { firstName, email, _id };

        //returns token
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};
