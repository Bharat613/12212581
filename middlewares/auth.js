const {getUser} = require('../service/auth')

async function usersOnly(req, res, next){
    console.log(req)
    const userId = req.cookies.uid;
    if (!userId) {
        return res.redirect('/login')
    }
     const user = getUser(userId);
    if(!userId) return res.redirect("/login");

    req.user = user;
    next();
}

module.exports = {usersOnly};