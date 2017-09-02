import jwt from 'passport-jwt';

const ExtractJwt = jwt.ExtractJwt;
let opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('bearer'),
    secretOrKey: 'yaoyuan',
    jsonWebTokenOptions: {
        maxAge: '1d',
    },
};

export default opts;
