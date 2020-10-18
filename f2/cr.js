// GENERATOR POSTMAN
const insert = async(req) => {
    // varParam && this.setParam(varParam)
    // const result = help.validator(req.body, {
    //     "userid"    : "required|numeric|min:0|max:255",
    //     "isUpdate"  : "required|numeric|min:0|max:1",
    //     "target"    : "required",
    //     "utama"     : "required",
    //     "detail"    : "required",
    // });
    
    return {'ad':12};
}
    
module.exports = {
    app: app => {
        app.post('/f2/cr/insert', async(req, result) => {
            let respond
            try {
                res.data = await insert(req);
                respond = res.success();
            }
            catch (err) {
                respond = res.fail(err.stack.split('\n')[0], 409, err.stack.split('\n'), __line, __filename)
            }
            result.status(respond.status).send(respond.send);
        });
    }    
};