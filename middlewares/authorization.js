function authorizationMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    
    if (authHeader && authHeader === 'true') {
        next(); // Procede a la siguiente función en la cadena
    } else {
        res.status(403).json({ error: 'Acceso no autorizado' });
    }
}

module.exports = authorizationMiddleware;