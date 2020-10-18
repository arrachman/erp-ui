const param = {}
// table identity
param.tableName = 'f1_bank';
param.primaryKey = 'bkode';

// parameter for select data
param.select = 'bkode, bnama, balamat, bkota, bnotelp, bnofax, bcatatan, baktif, binputuser, binputtgl, bmodifikasiuser, bmodifikasitgl';
param.selectFormatDate = 'binputtgl, bmodifikasitgl, bcustomdate1, bcustomdate2, bcustomdate3';

// Parameter for post data
param.validatorPost = {
       'bkode'   : 'required|max:25',
       'bnama'   : 'required|max:100',
       'balamat'   : 'max:250',
       'bkota'   : 'max:25',
       'bnotelp'   : 'max:50',
       'bnofax'   : 'max:50',
       'bcatatan'   : 'max:250',
       'baktif'   : 'required|numeric|max:2',
       'binputuser'   : 'required|numeric|max:20',
       'binputtgl'   : 'required|date',
       'bcustomtext1'   : 'max:250',
       'bcustomtext2'   : 'max:250',
       'bcustomtext3'   : 'max:250',
       'bcustomtext4'   : 'max:250',
       'bcustomtext5'   : 'max:250',
       'bcustomint1'   : 'numeric|max:11',
       'bcustomint2'   : 'numeric|max:11',
       'bcustomint3'   : 'numeric|max:11',
       'bcustomdbl1'   : 'numeric',
       'bcustomdbl2'   : 'numeric',
       'bcustomdbl3'   : 'numeric',
       'bcustomdate1'   : 'date',
       'bcustomdate2'   : 'date',
       'bcustomdate3'   : 'date'};
param.dataPost = 'bkode, bnama, balamat, bkota, bnotelp, bnofax, bcatatan, baktif, binputuser, binputtgl, bcustomtext1, bcustomtext2, bcustomtext3, bcustomtext4, bcustomtext5, bcustomint1, bcustomint2, bcustomint3, bcustomdbl1, bcustomdbl2, bcustomdbl3, bcustomdate1, bcustomdate2, bcustomdate3';

// Parameter for update data
param.validatorUpdate = {
       'bnama'   : 'required|max:100',
       'balamat'   : 'max:250',
       'bkota'   : 'max:25',
       'bnotelp'   : 'max:50',
       'bnofax'   : 'max:50',
       'bcatatan'   : 'max:250',
       'baktif'   : 'required|numeric|max:2',
       'bmodifikasiuser'   : 'required|numeric|max:20',
       'bmodifikasitgl'   : 'required|date',
       'bcustomtext1'   : 'max:250',
       'bcustomtext2'   : 'max:250',
       'bcustomtext3'   : 'max:250',
       'bcustomtext4'   : 'max:250',
       'bcustomtext5'   : 'max:250',
       'bcustomint1'   : 'required|numeric|max:11',
       'bcustomint2'   : 'required|numeric|max:11',
       'bcustomint3'   : 'required|numeric|max:11',
       'bcustomdbl1'   : 'required|numeric',
       'bcustomdbl2'   : 'required|numeric',
       'bcustomdbl3'   : 'required|numeric',
       'bcustomdate1'   : 'required|date',
       'bcustomdate2'   : 'required|date',
       'bcustomdate3'   : 'required|date'};
    param.dataUpdate = 'bnama, balamat, bkota, bnotelp, bnofax, bcatatan, baktif, bmodifikasiuser, bmodifikasitgl, bcustomtext1, bcustomtext2, bcustomtext3, bcustomtext4, bcustomtext5, bcustomint1, bcustomint2, bcustomint3, bcustomdbl1, bcustomdbl2, bcustomdbl3, bcustomdate1, bcustomdate2, bcustomdate3';

module.exports = {
    app: app => {
        app.get('/f1/bank', async(req, result) => help.tc(master.show, req, result, __line, __filename, param));
        app.get('/f1/bank/:id', async(req, result) => help.tc(master.showById, req, result, __line, __filename, param));
        app.post('/f1/bank', async(req, result) => help.tc(master.insert, req, result, __line, __filename, param));
        app.put('/f1/bank/:id', async(req, result) => help.tc(master.update, req, result, __line, __filename, param));
        app.delete('/f1/bank/:id', async(req, result) => help.tc(master.delete, req, result, __line, __filenam, parame));
    }    
};