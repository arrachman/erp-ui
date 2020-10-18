const param = {}
// table identity
param.tableName = 'f1_branch';
param.primaryKey = 'bkode';

// parameter for select data
param.select = '';
param.selectFormatDate = 'binputtgl, bmodifikasitgl';

// Parameter for post data
param.validatorPost = {
           'bkode'   : 'required',
           'bnama'   : 'required',
           'baktif'   : 'required|numeric|min:-127|max:127',
           'binputuser'   : 'required|numeric|min:0|max:18446744073709551615',
           'binputtgl'   : 'required|date'};
param.dataPost = 'bkode, bnama, balamat1, balamat2, bkota, bkodepos, bnotelp, bnofax, bcatatan, baktif, binputuser, binputtgl';

// Parameter for update data
param.validatorUpdate = {
           'bnama'   : 'required',
           'baktif'   : 'required|numeric|min:-127|max:127',
           'bmodifikasiuser'   : 'required|numeric|min:0|max:18446744073709551615',
           'bmodifikasitgl'   : 'required|date'};
param.dataUpdate = 'bnama, balamat1, balamat2, bkota, bkodepos, bnotelp, bnofax, bcatatan, baktif, bmodifikasiuser, bmodifikasitgl';
module.exports = {
    app: app => {
        app.get('/f1/branch', async(req, result) => help.tc(master.show, req, result, __line, __filename, param));
        app.get('/f1/branch/:id', async(req, result) => help.tc(master.showById, req, result, __line, __filename, param));
        app.post('/f1/branch', async(req, result) => help.tc(master.insert, req, result, __line, __filename, param));
        app.put('/f1/branch/:id', async(req, result) => help.tc(master.update, req, result, __line, __filename, param));
        app.delete('/f1/branch/:id', async(req, result) => help.tc(master.delete, req, result, __line, __filename, param));
    }    
};