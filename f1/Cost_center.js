const param = {}
// table identity
param.tableName = 'f1_cost_center';
param.primaryKey = 'cckode';

// parameter for select data
param.select = '';
param.selectFormatDate = 'ccinputtgl, ccmodifikasitgl';

// Parameter for post data
param.validatorPost = {
           'cckode'   : 'required',
           'ccnama'   : 'required',
           'ccdivisi'   : 'required',
           'ccaktif'   : 'required|numeric|min:-127|max:127',
           'ccinputuser'   : 'required|numeric|min:0|max:18446744073709551615',
           'ccinputtgl'   : 'required|date'};
param.dataPost = 'cckode, ccnama, ccdivisi, ccakun, ccaktif, cccatatan, ccinputuser, ccinputtgl';

// Parameter for update data
param.validatorUpdate = {
           'ccnama'   : 'required',
           'ccdivisi'   : 'required',
           'ccaktif'   : 'required|numeric|min:-127|max:127',
           'ccmodifikasiuser'   : 'required|numeric|min:0|max:18446744073709551615',
           'ccmodifikasitgl'   : 'required|date'};
param.dataUpdate = 'ccnama, ccdivisi, ccakun, ccaktif, cccatatan, ccmodifikasiuser, ccmodifikasitgl';
module.exports = {
    app: app => {
        app.get('/f1/cost_center', async(req, result) => help.tc(master.show, req, result, __line, __filename, param));
        app.get('/f1/cost_center/:id', async(req, result) => help.tc(master.showById, req, result, __line, __filename, param));
        app.post('/f1/cost_center', async(req, result) => help.tc(master.insert, req, result, __line, __filename, param));
        app.put('/f1/cost_center/:id', async(req, result) => help.tc(master.update, req, result, __line, __filename, param));
        app.delete('/f1/cost_center/:id', async(req, result) => help.tc(master.delete, req, result, __line, __filename, param));
    }    
};