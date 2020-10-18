const param = {}
// table identity
param.tableName = 'f1_area';
param.primaryKey = 'akode';

// parameter for select data
param.select = 'akode, anama, acatatan, aaktif, ainputuser, ainputtgl, amodifikasiuser, amodifikasitgl';
param.selectFormatDate = 'ainputtgl, amodifikasitgl';

// Parameter for post data
param.validatorPost = {
    'akode'         : 'required|max:25',
    'anama'         : 'required|max:100',
    'acatatan'      : 'max:250',
    'aaktif'        : 'required|numeric|max:2',
    'ainputuser'    : 'required|numeric|max:20',
    'ainputtgl'     : 'required|date'};
param.dataPost = 'akode, anama, acatatan, aaktif, ainputuser, ainputtgl';

// Parameter for update data
param.validatorUpdate = {
    'anama'              : 'required|max:100',
    'acatatan'           : 'max:250',
    'aaktif'             : 'required|numeric|max:2',
    'amodifikasiuser'    : 'required|numeric|max:20',
    'amodifikasitgl'     : 'required|date'};
param.dataUpdate = 'anama, acatatan, aaktif, amodifikasiuser, amodifikasitgl';
module.exports = {
    app: app => {
        app.get('/f1/area', async(req, result) => help.tc(master.show, req, result, __line, __filename, param));
        app.get('/f1/area/:id', async(req, result) => help.tc(master.showById, req, result, __line, __filename, param));
        app.post('/f1/area', async(req, result) => help.tc(master.insert, req, result, __line, __filename, param));
        app.put('/f1/area/:id', async(req, result) => help.tc(master.update, req, result, __line, __filename, param));
        app.delete('/f1/area/:id', async(req, result) => help.tc(master.delete, req, result, __line, __filename, param));
    }    
};