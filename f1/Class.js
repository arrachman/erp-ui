const param = {}
// table identity
param.tableName = 'f1_class';
param.primaryKey = 'ckode';

// parameter for select data
param.select = '';
param.selectFormatDate = 'cinputtgl, cmodifikasitgl, ccustomdate1, ccustomdate2, ccustomdate3';

// Parameter for post data
param.validatorPost = {
           'ckode'   : 'required',
           'cnama'   : 'required',
           'caktif'   : 'required|numeric|min:-127|max:127',
           'cinputuser'   : 'required|numeric|min:-9223372036854775808|max:9223372036854775808',
           'cinputtgl'   : 'required|date',
           'ccustomint1'   : 'required|numeric|min:-2147483647|max:2147483647',
           'ccustomint2'   : 'required|numeric|min:-2147483647|max:2147483647',
           'ccustomint3'   : 'required|numeric|min:-2147483647|max:2147483647',
           'ccustomdbl1'   : 'required|numeric',
           'ccustomdbl2'   : 'required|numeric',
           'ccustomdbl3'   : 'required|numeric',
           'ccustomdate1'   : 'required|date',
           'ccustomdate2'   : 'required|date',
           'ccustomdate3'   : 'required|date',
           'cindexbarcode'   : 'required'};
param.dataPost = 'ckode, cnama, ccatatan, caktif, cinputuser, cinputtgl, ccustomtext1, ccustomtext2, ccustomtext3, ccustomtext4, ccustomtext5, ccustomint1, ccustomint2, ccustomint3, ccustomdbl1, ccustomdbl2, ccustomdbl3, ccustomdate1, ccustomdate2, ccustomdate3, cindexbarcode';

// Parameter for update data
param.validatorUpdate = {
           'cnama'   : 'required',
           'caktif'   : 'required|numeric|min:-127|max:127',
           'cmodifikasiuser'   : 'required|numeric|min:-9223372036854775808|max:9223372036854775808',
           'cmodifikasitgl'   : 'required|date',
           'ccustomint1'   : 'required|numeric|min:-2147483647|max:2147483647',
           'ccustomint2'   : 'required|numeric|min:-2147483647|max:2147483647',
           'ccustomint3'   : 'required|numeric|min:-2147483647|max:2147483647',
           'ccustomdbl1'   : 'required|numeric',
           'ccustomdbl2'   : 'required|numeric',
           'ccustomdbl3'   : 'required|numeric',
           'ccustomdate1'   : 'required|date',
           'ccustomdate2'   : 'required|date',
           'ccustomdate3'   : 'required|date',
           'cindexbarcode'   : 'required'};
param.dataUpdate = 'cnama, ccatatan, caktif, cmodifikasiuser, cmodifikasitgl, ccustomtext1, ccustomtext2, ccustomtext3, ccustomtext4, ccustomtext5, ccustomint1, ccustomint2, ccustomint3, ccustomdbl1, ccustomdbl2, ccustomdbl3, ccustomdate1, ccustomdate2, ccustomdate3, cindexbarcode';
module.exports = {
    app: app => {
        app.get('/f1/class', async(req, result) => help.tc(master.show, req, result, __line, __filename, param));
        app.get('/f1/class/:id', async(req, result) => help.tc(master.showById, req, result, __line, __filename, param));
        app.post('/f1/class', async(req, result) => help.tc(master.insert, req, result, __line, __filename, param));
        app.put('/f1/class/:id', async(req, result) => help.tc(master.update, req, result, __line, __filename, param));
        app.delete('/f1/class/:id', async(req, result) => help.tc(master.delete, req, result, __line, __filename, param));
    }    
};