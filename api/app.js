import express from 'express';
import bodyParser from 'body-parser';
import LocalStrategy from 'passport-local';
import passportJwt from 'passport-jwt';
import passport from 'passport';
import User from './models/user';
import opts from './verification';
import formsRoutes from './routes/forms';
import indexRoutes from './routes/index';


// sequelize.authenticate().then(() => {
//     console.log('conncted');
// }).catch(err => {
//     console.log('failed');
// });

const JwtStrategy = passportJwt.Strategy;
const app = express();

app.use(passport.initialize());
passport.use(new JwtStrategy(opts, async (jwtPayload, done) => {
    try{
        let user = await User.findById(jwtPayload.id);
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    } catch(err) {
        return done(err, false);
    }
}));
passport.use(new LocalStrategy(async (username, password, done) => {
    try{
        let user = await User.findOne({where: {username}});
        if (!user) {
            return done(null, false, 'cannot find user profile on system');
        }
        if (!user.authenticate(password)) {
            return done(null, false, 'username or password are incorrect');
        }
        return done(null, user);
    } catch(err) {
        console.log(err);
        return done(err, false);
    }
}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin,Content-Type, Authorization, x-id, Content-Length, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/user', formsRoutes);
app.use('/', indexRoutes);

let port = 5051;
app.listen(port, function() {
    console.log(`Signing Server listening on port ${port}`);
});
