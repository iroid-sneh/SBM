// middleware/preserveFlash.js
export default function preserveFlash(req, res, next) {
    res.locals.messages = {
        success: req.flash("success"),
        error: req.flash("error"),
    };
    next();
}
