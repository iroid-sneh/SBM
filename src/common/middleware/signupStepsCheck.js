function ensureSignupStep(requiredStep) {
    return function (req, res, next) {
        if (!req.session.signup || req.session.signup.step < requiredStep) {
            return res.redirect(`/step${req.session.signup?.step || 1}`);
        }
        next();
    };
}
