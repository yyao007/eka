import Router from 'express-promise-router';
import User from '../models/user';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import opts from '../verification';

const router = new Router();

router.post('/login', async (req, res, next) => {
    passport.authenticate('local',  (err, user, info) => {
        if (err) {
            return res.json({'success': false, 'message': err});
        }
        if (!user) {
            return res.json({'success': false, 'message': info});
        } else {
            let payload = {id: user.id, password: user.password};
            let token = jwt.sign(payload, opts.secretOrKey, {
                expiresIn: '10h',
            });
            return res.json({
                'success': true,
                'user': {
                    'id': user.id,
                },
                'token': token,
            });
        }
    })(req, res, next);
});

export default router;
