const param = {}
// table identity
param.tableName = 'f1_city';
param.primaryKey = 'ckode';

// parameter for select data
param.select = '';
param.selectFormatDate = 'cinputtgl, cmodifikasitgl';

// Parameter for post data
param.validatorPost = {
           'ckode'   : 'required',
           'cnama'   : 'required',
           'caktif'   : 'required|numeric|min:-127|max:127',
           'cinputuser'   : 'required|numeric|min:-9223372036854775808|max:9223372036854775808',
           'cinputtgl'   : 'required|date'};
param.dataPost = 'ckode, cnama, cpropinsi, ccatatan, caktif, cinputuser, cinputtgl, cnegara';

// Parameter for update data
param.validatorUpdate = {
           'cnama'   : 'required',
           'caktif'   : 'required|numeric|min:-127|max:127',
           'cmodifikasiuser'   : 'numeric|min:-9223372036854775808|max:9223372036854775808',
           'cmodifikasitgl'   : 'required|date'};
param.dataUpdate = 'cnama, cpropinsi, ccatatan, caktif, cmodifikasiuser, cmodifikasitgl, cnegara';
module.exports = {
    app: app => {
        app.get('/f1/city', async(req, result) => help.tc(master.show, req, result, __line, __filename, param));
        app.get('/f1/city/:id', async(req, result) => help.tc(master.showById, req, result, __line, __filename, param));
        app.post('/f1/city', async(req, result) => help.tc(master.insert, req, result, __line, __filename, param));
        app.put('/f1/city/:id', async(req, result) => help.tc(master.update, req, result, __line, __filename, param));
        app.delete('/f1/city/:id', async(req, result) => help.tc(master.delete, req, result, __line, __filename, param));
    }    
};