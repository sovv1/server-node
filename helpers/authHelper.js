import passport from 'passport';

export const withAuth = () => passport.authenticate('jwt', {session: false});
