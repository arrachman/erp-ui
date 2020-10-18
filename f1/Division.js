const param = {}
// table identity
param.tableName = 'f1_division';
param.primaryKey = 'dkode';

// parameter for select data
param.select = '';
param.selectFormatDate = 'dinputtgl, dmodifikasitgl, dcustomdate1, dcustomdate2, dcustomdate3';

// Parameter for post data
param.validatorPost = {
           'dkode'   : 'required',
           'dnama'   : 'required',
           'daktif'   : 'required|numeric|min:0|max:255',
           'dinputuser'   : 'required|numeric|min:0|max:18446744073709551615',
           'dinputtgl'   : 'required|date',
           'dcustomint1'   : 'required|numeric|min:-2147483647|max:2147483647',
           'dcustomint2'   : 'required|numeric|min:-2147483647|max:2147483647',
           'dcustomint3'   : 'required|numeric|min:-2147483647|max:2147483647',
           'dcustomdbl1'   : 'required|numeric',
           'dcustomdbl2'   : 'required|numeric',
           'dcustomdbl3'   : 'required|numeric',
           'dcustomdate1'   : 'required|date',
           'dcustomdate2'   : 'required|date',
           'dcustomdate3'   : 'required|date'};
param.dataPost = 'dkode, dnama, dcatatan, daktif, dinputuser, dinputtgl, dcustomtext1, dcustomtext2, dcustomtext3, dcustomtext4, dcustomtext5, dcustomint1, dcustomint2, dcustomint3, dcustomdbl1, dcustomdbl2, dcustomdbl3, dcustomdate1, dcustomdate2, dcustomdate3, dindexbarcode';

// Parameter for update data
param.validatorUpdate = {
           'dnama'   : 'required',
           'daktif'   : 'required|numeric|min:0|max:255',
           'dmodifikasiuser'   : 'required|numeric|min:0|max:18446744073709551615',
           'dmodifikasitgl'   : 'required|date',
           'dcustomint1'   : 'required|numeric|min:-2147483647|max:2147483647',
           'dcustomint2'   : 'required|numeric|min:-2147483647|max:2147483647',
           'dcustomint3'   : 'required|numeric|min:-2147483647|max:2147483647',
           'dcustomdbl1'   : 'required|numeric',
           'dcustomdbl2'   : 'required|numeric',
           'dcustomdbl3'   : 'required|numeric',
           'dcustomdate1'   : 'required|date',
           'dcustomdate2'   : 'required|date',
           'dcustomdate3'   : 'required|date'};
param.dataUpdate = 'dnama, dcatatan, daktif, dmodifikasiuser, dmodifikasitgl, dcustomtext1, dcustomtext2, dcustomtext3, dcustomtext4, dcustomtext5, dcustomint1, dcustomint2, dcustomint3, dcustomdbl1, dcustomdbl2, dcustomdbl3, dcustomdate1, dcustomdate2, dcustomdate3, dindexbarcode';
module.exports = {
    app: app => {
        app.get('/f1/division', async(req, result) => help.tc(master.show, req, result, __line, __filename, param));
        app.get('/f1/division/:id', async(req, result) => help.tc(master.showById, req, result, __line, __filename, param));
        app.post('/f1/division', async(req, result) => help.tc(master.insert, req, result, __line, __filename, param));
        app.put('/f1/division/:id', async(req, result) => help.tc(master.update, req, result, __line, __filename, param));
        app.delete('/f1/division/:id', async(req, result) => help.tc(master.delete, req, result, __line, __filename, param));
    }    
};