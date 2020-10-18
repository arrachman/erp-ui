
const tableName = 'f0_user';
const primaryKey = 'userid';
const jwt = require('jsonwebtoken');

const login = async(req) => {
    const param = JSON.parse(req.query.param);
    res.target = param.target; 
    let refreshToken = Math.floor(Date.now() / 1000) +parseInt(process.env.REFRESH_AUTH)
    let resetToken = Math.floor(Date.now() / 1000) + parseInt(process.env.RESET_AUTH) 

    const checkLogin = (process.env.USER == req.body.user && process.env.PASS == req.body.pass)
    if (checkLogin) {
        var token = jwt.sign({ id: 123, role: 'admin', iat:  resetToken }, process.env.SECRET, { expiresIn: refreshToken});
        if (token) {
            const response = {
                "status": "Logged in",
                "token": token,
                refreshToken, resetToken,
            }
            tokenList[token] = response
            res.data = {
                        message: "Success Sign In",
                        token: token
                    };
        }else
         return res.fail('Failed create token', 401);
    } else {
        return res.fail('Failed Sign In', 401);
    }
    // if(help.attempt({'ukode':req.body.username, 'password':req.body.password}))
    //     return res.fail('Your credential is wrong', 401);

    // result = help.UpdateData(tableName, 'ukode', req.body.username, {'utoken': help.bcrypt(help.dateNow())});

    // if(!result.success)
    //     return res.fail('Update Failed', null, result.messageDev);

    // let db = new help.ModelsDB('tableName');
    // db.select = 'utoken';
    // res.data = db.getDataById('ukode', req.body.username);
    return res.success()
}

module.exports = {
    app: app => {
    // register: async(req) => {
    //     const valid = {
    //         'ukode'             : 'required|max:25',
    //         'unama'             : 'required|max:100',
    //         'uaktif'            : 'required|numeric',
    //         'ulevel'            : 'required|numeric',
    //         'ubahasa'           : 'required|max:25',
    //         'uaktivitasproduksi': 'required|numeric'};
    //     let result = help.validator(req.body, valid);
    //     if(!result.success)
    //         return res.fail(result.message, null, result.messageDev);
        
    //     const param = JSON.parse(req.query.param);
    //     res.target = param.target; 

    //     let checkById = await db.checkDataById(tableName, primaryKey, req.body[primaryKey]);
    //     if(checkById)
    //         return res.fail("Data already exiss '" + req.body[primaryKey] + "'");
    
    //     $dataPost = {};
    //     const arrdataPost = help.strToArray('ukode, upassword, unama, uaktif, ulevel, ubahasa, uaktivitasproduksi, utoken');
    //     for(const key in arrdataPost)
    //     {
    //         let column = arrdataPost[$i];
    //         let value  = req.body[$column];
            
    //         value = column == 'upassword' ? help.bcrypt(value) : value;
    //         value = column == 'utoken' ? help.bcrypt(help.dateNow()) : value;

    //         $value = isEmpty($value) ? '' : value;
            
    //         dataPost[column] = value;
    //     }

    //     result = help.insertDataResIndex(tableName, dataPost);
    //     res.data = result.success ? help.checkDataById(tableName, primaryKey, result['id']) : '';

    //     return res.success();
    // },

        app.post('/f0/auth/login', async(req, result) => {
            let respond
            try {
                respond = await login(req);
            }
            catch (err) {
                respond = res.fail(err.stack.split('\n')[0], 409, err.stack.split('\n'), __line, __filename)
            }
            result.status(respond.status).send(respond.send);
        });

    // logout: async(req) => {
    //     const param = JSON.parse(req.query.param);
    //     res.target = param.target; 

    //     let authorization = req.headers['authorization'][0];
    //     authorization = authorization.split('Bearer').join('');
    //     res.data = help.UpdateData(tableName, 'utoken', authorization, {'utoken' : ''});

    //     return res.success();
    // }
    
    }
};