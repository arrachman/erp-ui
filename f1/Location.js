const param = {}
// table identity
param.tableName = 'f1_location';
param.primaryKey = 'lkode';

// parameter for select data
param.select = '';
param.selectFormatDate = 'linputtgl, lmodifikasitanggal';

// Parameter for post data
param.validatorPost = {
           'lkode'   : 'required',
           'lnama'   : 'required',
           'lkodetransaksi'   : 'required',
           'lcabang'   : 'required',
           'laktif'   : 'required|numeric|min:0|max:255',
           'lluas'   : 'required|numeric',
           'linputuser'   : 'required|numeric|min:0|max:18446744073709551615',
           'linputtgl'   : 'required|date',
           'lmodifikasitanggal'   : 'required|date'};
param.dataPost = 'lkode, lnama, lkodetransaksi, lcabang, lkategoripos, laktif, lalamat1, lalamat2, lkota, lkodepos, lnotelp, lnofax, lluas, lcatatan, linputuser, linputtgl, lmodifikasitanggal';

// Parameter for update data
param.validatorUpdate = {
           'lnama'   : 'required',
           'lkodetransaksi'   : 'required',
           'lcabang'   : 'required',
           'laktif'   : 'required|numeric|min:0|max:255',
           'lluas'   : 'required|numeric',
           'lmodifikasiuser'   : 'required|numeric|min:0|max:18446744073709551615',
           'lmodifikasitanggal'   : 'required|date'};
param.dataUpdate = 'lnama, lkodetransaksi, lcabang, lkategoripos, laktif, lalamat1, lalamat2, lkota, lkodepos, lnotelp, lnofax, lluas, lcatatan, lmodifikasiuser, lmodifikasitanggal';
module.exports = {
    app: app => {
        app.get('/f1/location', async(req, result) => help.tc(master.show, req, result, __line, __filename, param));
        app.get('/f1/location/:id', async(req, result) => help.tc(master.showById, req, result, __line, __filename, param));
        app.post('/f1/location', async(req, result) => help.tc(master.insert, req, result, __line, __filename, param));
        app.put('/f1/location/:id', async(req, result) => help.tc(master.update, req, result, __line, __filename, param));
        app.delete('/f1/location/:id', async(req, result) => help.tc(master.delete, req, result, __line, __filename, param));
    }    
};