const sha256 = require('js-sha256');
const salt = 'wow';

module.exports = (db) => {

    let newUserCallback = (req, res) => {
        res.render('users/new');
    };

    let userCreateCallback = (req, res) => {
        db.user.userCreate(req.body, (err, result) => {
            data = {
                result: req.body
            }
            res.render('users/create', data);
        });
    };

    let userLoginCallback = (req, res) => {
        res.render('users/login');
    };

    let userLoggedInCallback = (req, res) => {
        db.user.userLogin(req.body, (err, result) => {
            if (err) {
                res.send('query error');
            } else {
                if (result.rows.length > 0) {
                    let hashedPassword = sha256(req.body.password + salt);
                    if (hashedPassword === result.rows[0].password) {
                        let user_id = result.rows[0].id;
                        let hashedCookie = sha256(user_id + salt);

                        res.cookie('user_id', user_id);
                        res.cookie('hasLoggedIn', hashedCookie);
                        res.cookie('username', req.body.username);
                        res.redirect('/recipes/new');
                    } else {
                        res.status(403).send('wrong password');
                    }
                } else {
                    res.status(403).send('wrong username');
                }
            }
        });
    };

    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        userCreate: userCreateCallback,
        newUser: newUserCallback,
        userLogin: userLoginCallback,
        userLoggedIn: userLoggedInCallback,
    };

}
