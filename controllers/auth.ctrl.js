import passport from 'passport';
import jwt from 'jsonwebtoken';

const signIn = (req, res, next) => {
    passport.authenticate('local', { session: false }, (err, user, info) => {
        if (err || !user) {
            return res.status(400).json({
                message: info ? info.message : 'Login failed',
                user   : user
            });
        }
       req.login(user, { session: false }, err => {
           if (err) {
               return next(err);
           }
           const token = jwt.sign(user.toJSON(), 'your_jwt_secret', { expiresIn: 604000 });
           return res.json({ user, token });
       });
    })(req, res);
};

export default {
    signIn
};
