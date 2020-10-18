const param = {}
// table identity
param.tableName = 'f1_project';
param.primaryKey = 'pkode';

// parameter for select data
param.select = '';
param.selectFormatDate = 'ptglorder, ptglmulairencana, ptglmulairealisasi, ptglselesairencana, ptglselesairealisasi, ptglkontrak, pinputtgl, pmodifikasitgl';

// Parameter for post data
param.validatorPost = {
           'pkode'   : 'required',
           'pnama'   : 'required',
           'paktif'   : 'required|numeric|min:-127|max:127',
           'ptglorder'   : 'date',
           'ptglmulairencana'   : 'date',
           'ptglmulairealisasi'   : 'date',
           'ptglselesairencana'   : 'date',
           'ptglselesairealisasi'   : 'date',
           'pselesai'   : 'numeric',
           'pkontak'   : 'numeric|min:-9223372036854775808|max:9223372036854775808',
           'ppimpinanproyek'   : 'numeric|min:-9223372036854775808|max:9223372036854775808',
           'ptglkontrak'   : 'date',
           'pnilaikontrak'   : 'numeric',
           'psubdari'   : 'numeric|min:-32767|max:32767',
           'plevel'   : 'numeric|min:-2147483647|max:2147483647',
           'pinputuser'   : 'required|numeric|min:-9223372036854775808|max:9223372036854775808',
           'pinputtgl'   : 'required|date'};
param.dataPost = 'pkode, pnama, pkategori, paktif, ptglorder, ptglmulairencana, ptglmulairealisasi, ptglselesairencana, ptglselesairealisasi, pprioritas, pselesai, pkontak, pkontakperson, ppimpinanproyek, pdivisi, pketerangan, ptglkontrak, pnokontrak, pnilaikontrak, psubdari, pparent, plevel, pcustom1, pcustom2, pcustom3, pcustom4, pcustom5, pinputuser, pinputtgl, pgd, pstatus';

// Parameter for update data
param.validatorUpdate = {
           'pnama'   : 'required',
           'paktif'   : 'required|numeric|min:-127|max:127',
           'ptglorder'   : 'date',
           'ptglmulairencana'   : 'date',
           'ptglmulairealisasi'   : 'date',
           'ptglselesairencana'   : 'date',
           'ptglselesairealisasi'   : 'date',
           'pselesai'   : 'numeric',
           'pkontak'   : 'numeric|min:-9223372036854775808|max:9223372036854775808',
           'ppimpinanproyek'   : 'numeric|min:-9223372036854775808|max:9223372036854775808',
           'ptglkontrak'   : 'date',
           'pnilaikontrak'   : 'numeric',
           'psubdari'   : 'numeric|min:-32767|max:32767',
           'plevel'   : 'numeric|min:-2147483647|max:2147483647',
           'pmodifikasiuser'   : 'required|numeric|min:-9223372036854775808|max:9223372036854775808',
           'pmodifikasitgl'   : 'required|date'};
param.dataUpdate = 'pnama, pkategori, paktif, ptglorder, ptglmulairencana, ptglmulairealisasi, ptglselesairencana, ptglselesairealisasi, pprioritas, pselesai, pkontak, pkontakperson, ppimpinanproyek, pdivisi, pketerangan, ptglkontrak, pnokontrak, pnilaikontrak, psubdari, pparent, plevel, pcustom1, pcustom2, pcustom3, pcustom4, pcustom5, pmodifikasiuser, pmodifikasitgl, pgd, pstatus';
module.exports = {
    app: app => {
        app.get('/f1/project', async(req, result) => help.tc(master.show, req, result, __line, __filename, param));
        app.get('/f1/project/:id', async(req, result) => help.tc(master.showById, req, result, __line, __filename, param));
        app.post('/f1/project', async(req, result) => help.tc(master.insert, req, result, __line, __filename, param));
        app.put('/f1/project/:id', async(req, result) => help.tc(master.update, req, result, __line, __filename, param));
        app.delete('/f1/project/:id', async(req, result) => help.tc(master.delete, req, result, __line, __filename, param));
    }    
};