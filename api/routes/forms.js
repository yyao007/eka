import Router from 'express-promise-router';
import { matchedData } from 'express-validator/filter';
import { updateOrCreate } from '../db';
import User from '../models/user';
import { isLoggedIn, hasPermission } from '../middleware';

const router = new Router();

router.get('/', async (req, res) => {
    res.json({success: true, message: 'You have reached form1'});
});

router.post('/', async (req, res) => {
    let user = {
        username: req.body.username || null,
        password: req.body.password || null,
        email: req.body.email || null,
        firstName: req.body.firstName || null,
        lastName: req.body.lastName || null,
        telephone: req.body.telephone || null,
        address: req.body.address || null,
        city: req.body.city || null,
        state: req.body.state || null,
        zip: req.body.zip || null,
    };
    fillForm(user, res);
});

router.put('/:id', hasPermission, async (req, res) => {
    let user = {
        id: parseInt(req.params.id),
        username: req.body.username || null,
        password: req.body.password || null,
        email: req.body.email || null,
        firstName: req.body.firstName || null,
        lastName: req.body.lastName || null,
        telephone: req.body.telephone || null,
        address: req.body.address || null,
        city: req.body.city || null,
        state: req.body.state || null,
        zip: req.body.zip || null,
    };
    fillForm(user, res, true);
});

// router.post('/2', isLoggedIn, async (req, res) => {
//     // prevent user accessing /2 if user does not complete form1.
//     if(!req.body.id) {
//         res.status(422).json({
//             success: false,
//             message: 'You need to finish form1 first',
//         });
//     }
//
//     let user = {
//         id: req.body.id,
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         telephone: req.body.telephone,
//     };
//
//     let newUser;
//     try {
//         newUser = await updateOrCreate(User, {id: user.id}, user);
//         res.status(201).json({
//             success: true,
//             message: 'Completed form2 successfully!',
//         });
//     } catch(err) {
//         res.status(400).json({
//             success: false,
//             message: err.original? err.original.detail : err.errors,
//         });
//     }
// });
//
// router.post('/3', isLoggedIn, async (req, res) => {
//     // prevent user accessing /3 if user does not complete form2.
//     if(!req.body.id || !req.body.firstName || !req.body.lastName || !req.body.telephone) {
//         res.status(422).json({
//             success: false,
//             message: 'You need to finish form2 first',
//         });
//     }
//
//     let user = {
//         id: req.body.id,
//         address: req.body.address,
//         city: req.body.city,
//         state: req.body.state,
//         zip: req.body.zip,
//     };
//
//     let newUser;
//     try {
//         newUser = await updateOrCreate(User, {id: user.id}, user);
//         res.status(201).json({
//             success: true,
//             message: 'Completed form3 successfully!',
//         });
//     } catch(err) {
//         res.status(400).json({
//             success: false,
//             message: err.original? err.original.detail : err.errors,
//         });
//     }
// });

const fillForm = async (user, res, update=false) => {
    let newUser;
    try {
        newUser = await updateOrCreate(User, {id: user.id}, user, update);
        res.status(201).json({
            success: true,
            message: 'Completed',
            user: {
                id: newUser.id,
            }
        });
    } catch(err) {
        res.status(400).json({
            success: false,
            message: err.original? err.original.detail : err.errors,
        });
    }
}

export default router;
