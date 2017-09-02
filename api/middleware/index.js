import { check, validationResult } from 'express-validator';
import passport from 'passport';

export const isLoggedIn = (req, res, next) => {
    passport.authenticate('jwt', {session: false}, (err, user) => {
        if (err) {
            return res.json({'success': false, 'message': err});
        }
        if (!user) {
            return res.status(401).json({'success': false, 'message': 'Please log in first!'});
        } else {
            req.user = user;
            return next();
        }
    })(req, res, next);
};

export const hasPermission = (req, res, next) => {
    passport.authenticate('jwt', {session: false}, (err, user) => {
        if (err) {
            return res.json({'success': false, 'message': err});
        }
        if (!user) {
            return res.status(401).json({'success': false, 'message': 'Please log in first!'});
        } else {
            if (user.id === parseInt(req.params.id)) {
                return next();
            }
            res.json({'success': false, 'message': 'You don\'t have permission to do that'});
        }
    })(req, res, next);
};

export const validate = (req, res, next) => {
    [
        check('username').exists(),
    ]
};
