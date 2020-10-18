const param = {}
// table identity
param.tableName = 'f1_mailing';
param.primaryKey = 'id';

// parameter for select data
param.select = '';
param.selectFormatDate = 'date';

// Parameter for post data
param.validatorPost = {
           'id'   : 'required|numeric|min:-2147483647|max:2147483647',
           'date'   : 'date'};
param.dataPost = 'id, name, date, list';

// Parameter for update data
param.validatorUpdate = {
           'date'   : 'date'};
param.dataUpdate = 'name, date, list';
module.exports = {
    app: app => {
        app.get('/f1/mailing', async(req, result) => help.tc(master.show, req, result, __line, __filename, param));
        app.get('/f1/mailing/:id', async(req, result) => help.tc(master.showById, req, result, __line, __filename, param));
        app.post('/f1/mailing', async(req, result) => help.tc(master.insert, req, result, __line, __filename, param));
        app.put('/f1/mailing/:id', async(req, result) => help.tc(master.update, req, result, __line, __filename, param));
        app.delete('/f1/mailing/:id', async(req, result) => help.tc(master.delete, req, result, __line, __filename, param));
    }    
};