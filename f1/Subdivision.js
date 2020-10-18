const param = {}
// table identity
param.tableName = 'f1_subdivision';
param.primaryKey = 'sdkode';

// parameter for select data
param.select = '';
param.selectFormatDate = 'sdinputtgl, sdmodifikasitgl, sdcustomdate1, sdcustomdate2, sdcustomdate3';

// Parameter for post data
param.validatorPost = {
           'sdkode'   : 'required',
           'sddivisi'   : 'required',
           'sdnama'   : 'required',
           'sdaktif'   : 'required|numeric|min:0|max:255',
           'sdinputuser'   : 'required|numeric|min:0|max:18446744073709551615',
           'sdinputtgl'   : 'required|date',
           'sdcustomint1'   : 'required|numeric|min:-2147483647|max:2147483647',
           'sdcustomint2'   : 'required|numeric|min:-2147483647|max:2147483647',
           'sdcustomint3'   : 'required|numeric|min:-2147483647|max:2147483647',
           'sdcustomdbl1'   : 'required|numeric',
           'sdcustomdbl2'   : 'required|numeric',
           'sdcustomdbl3'   : 'required|numeric',
           'sdcustomdate1'   : 'required|date',
           'sdcustomdate2'   : 'required|date',
           'sdcustomdate3'   : 'required|date'};
param.dataPost = 'sdkode, sddivisi, sdnama, sdcatatan, sdaktif, sdinputuser, sdinputtgl, sdcustomtext1, sdcustomtext2, sdcustomtext3, sdcustomtext4, sdcustomtext5, sdcustomint1, sdcustomint2, sdcustomint3, sdcustomdbl1, sdcustomdbl2, sdcustomdbl3, sdcustomdate1, sdcustomdate2, sdcustomdate3, sdindexbarcode';

// Parameter for update data
param.validatorUpdate = {
           'sddivisi'   : 'required',
           'sdnama'   : 'required',
           'sdaktif'   : 'required|numeric|min:0|max:255',
           'sdmodifikasiuser'   : 'required|numeric|min:0|max:18446744073709551615',
           'sdmodifikasitgl'   : 'required|date',
           'sdcustomint1'   : 'required|numeric|min:-2147483647|max:2147483647',
           'sdcustomint2'   : 'required|numeric|min:-2147483647|max:2147483647',
           'sdcustomint3'   : 'required|numeric|min:-2147483647|max:2147483647',
           'sdcustomdbl1'   : 'required|numeric',
           'sdcustomdbl2'   : 'required|numeric',
           'sdcustomdbl3'   : 'required|numeric',
           'sdcustomdate1'   : 'required|date',
           'sdcustomdate2'   : 'required|date',
           'sdcustomdate3'   : 'required|date'};
param.dataUpdate = 'sddivisi, sdnama, sdcatatan, sdaktif, sdmodifikasiuser, sdmodifikasitgl, sdcustomtext1, sdcustomtext2, sdcustomtext3, sdcustomtext4, sdcustomtext5, sdcustomint1, sdcustomint2, sdcustomint3, sdcustomdbl1, sdcustomdbl2, sdcustomdbl3, sdcustomdate1, sdcustomdate2, sdcustomdate3, sdindexbarcode';
module.exports = {
    app: app => {
        app.get('/f1/subdivision', async(req, result) => help.tc(master.show, req, result, __line, __filename, param));
        app.get('/f1/subdivision/:id', async(req, result) => help.tc(master.showById, req, result, __line, __filename, param));
        app.post('/f1/subdivision', async(req, result) => help.tc(master.insert, req, result, __line, __filename, param));
        app.put('/f1/subdivision/:id', async(req, result) => help.tc(master.update, req, result, __line, __filename, param));
        app.delete('/f1/subdivision/:id', async(req, result) => help.tc(master.delete, req, result, __line, __filename, param));
    }    
};