const param = {}
// table identity
param.tableName = 'f1_coa';
param.primaryKey = 'cid';

// parameter for select data
param.select = '';
param.selectFormatDate = 'cinputtgl, cmodifikasitgl, ccustomdate1, ccustomdate2, ccustomdate3, ccustomdate4, ccustomdate5, ccustomdate6, ccustomdate7, ccustomdate8, ccustomdate9, ccustomdate10';

// Parameter for post data
param.validatorPost = {
           'cid'   : 'required|numeric|min:-9223372036854775808|max:9223372036854775808',
           'cnomor'   : 'required',
           'ctipe'   : 'required|numeric|min:0|max:4294967295',
           'ckategori'   : 'required|numeric|min:-2147483647|max:2147483647',
           'cdc'   : 'required',
           'curutan'   : 'required|numeric|min:0|max:4294967295',
           'caktif'   : 'required|numeric|min:-127|max:127',
           'cnama'   : 'required',
           'cgd'   : 'required',
           'clevel'   : 'required|numeric|min:0|max:4294967295',
           'csubdari'   : 'required|numeric|min:-127|max:127',
           'cbukupembantu'   : 'required|numeric|min:-127|max:127',
           'cmatauang'   : 'required',
           'csaldoawal'   : 'numeric',
           'csaldoberjalan'   : 'numeric',
           'cinputuser'   : 'required|numeric|min:0|max:18446744073709551615',
           'cinputtgl'   : 'required|date',
           'ccostcenter'   : 'required|numeric|min:-127|max:127',
           'ccustomint1'   : 'required|numeric|min:-2147483647|max:2147483647',
           'ccustomint2'   : 'required|numeric|min:-2147483647|max:2147483647',
           'ccustomint3'   : 'required|numeric|min:-2147483647|max:2147483647',
           'ccustomint4'   : 'required|numeric|min:-2147483647|max:2147483647',
           'ccustomint5'   : 'required|numeric|min:-2147483647|max:2147483647',
           'ccustomint6'   : 'required|numeric|min:-2147483647|max:2147483647',
           'ccustomint7'   : 'required|numeric|min:-2147483647|max:2147483647',
           'ccustomint8'   : 'required|numeric|min:-2147483647|max:2147483647',
           'ccustomint9'   : 'required|numeric|min:-2147483647|max:2147483647',
           'ccustomint10'   : 'required|numeric|min:-2147483647|max:2147483647',
           'ccustomdbl1'   : 'required|numeric',
           'ccustomdbl2'   : 'required|numeric',
           'ccustomdbl3'   : 'required|numeric',
           'ccustomdbl4'   : 'required|numeric',
           'ccustomdbl5'   : 'required|numeric',
           'ccustomdbl6'   : 'required|numeric',
           'ccustomdbl7'   : 'required|numeric',
           'ccustomdbl8'   : 'required|numeric',
           'ccustomdbl9'   : 'required|numeric',
           'ccustomdbl10'   : 'required|numeric',
           'ccustomdate1'   : 'required|date',
           'ccustomdate2'   : 'required|date',
           'ccustomdate3'   : 'required|date',
           'ccustomdate4'   : 'required|date',
           'ccustomdate5'   : 'required|date',
           'ccustomdate6'   : 'required|date',
           'ccustomdate7'   : 'required|date',
           'ccustomdate8'   : 'required|date',
           'ccustomdate9'   : 'required|date',
           'ccustomdate10'   : 'required|date'};
param.dataPost = 'cid, cnomor, ctipe, ckategori, cdc, curutan, caktif, cnama, cnamaalias1, cnamaalias2, cnamaalias3, cgd, clevel, csubdari, cparent, clevel1, clevel2, clevel3, clevel4, clevel5, cjenisaruskas, cbukupembantu, ccabang, clokasi, cdivisi, cmatauang, ckodebank, cnorekbank, cjenis, csaldoawal, csaldoberjalan, ccatatan, cinputuser, cinputtgl, ccostcenter, ccustomtext1, ccustomtext2, ccustomtext3, ccustomtext4, ccustomtext5, ccustomtext6, ccustomtext7, ccustomtext8, ccustomtext9, ccustomtext10, ccustomint1, ccustomint2, ccustomint3, ccustomint4, ccustomint5, ccustomint6, ccustomint7, ccustomint8, ccustomint9, ccustomint10, ccustomdbl1, ccustomdbl2, ccustomdbl3, ccustomdbl4, ccustomdbl5, ccustomdbl6, ccustomdbl7, ccustomdbl8, ccustomdbl9, ccustomdbl10, ccustomdate1, ccustomdate2, ccustomdate3, ccustomdate4, ccustomdate5, ccustomdate6, ccustomdate7, ccustomdate8, ccustomdate9, ccustomdate10';

// Parameter for update data
param.validatorUpdate = {
           'cnomor'   : 'required',
           'ctipe'   : 'required|numeric|min:0|max:4294967295',
           'ckategori'   : 'required|numeric|min:-2147483647|max:2147483647',
           'cdc'   : 'required',
           'curutan'   : 'required|numeric|min:0|max:4294967295',
           'caktif'   : 'required|numeric|min:-127|max:127',
           'cnama'   : 'required',
           'cgd'   : 'required',
           'clevel'   : 'required|numeric|min:0|max:4294967295',
           'csubdari'   : 'required|numeric|min:-127|max:127',
           'cbukupembantu'   : 'required|numeric|min:-127|max:127',
           'cmatauang'   : 'required',
           'csaldoawal'   : 'numeric',
           'csaldoberjalan'   : 'numeric',
           'cmodifikasiuser'   : 'required|numeric|min:0|max:18446744073709551615',
           'cmodifikasitgl'   : 'required|date',
           'ccostcenter'   : 'required|numeric|min:-127|max:127',
           'ccustomint1'   : 'required|numeric|min:-2147483647|max:2147483647',
           'ccustomint2'   : 'required|numeric|min:-2147483647|max:2147483647',
           'ccustomint3'   : 'required|numeric|min:-2147483647|max:2147483647',
           'ccustomint4'   : 'required|numeric|min:-2147483647|max:2147483647',
           'ccustomint5'   : 'required|numeric|min:-2147483647|max:2147483647',
           'ccustomint6'   : 'required|numeric|min:-2147483647|max:2147483647',
           'ccustomint7'   : 'required|numeric|min:-2147483647|max:2147483647',
           'ccustomint8'   : 'required|numeric|min:-2147483647|max:2147483647',
           'ccustomint9'   : 'required|numeric|min:-2147483647|max:2147483647',
           'ccustomint10'   : 'required|numeric|min:-2147483647|max:2147483647',
           'ccustomdbl1'   : 'required|numeric',
           'ccustomdbl2'   : 'required|numeric',
           'ccustomdbl3'   : 'required|numeric',
           'ccustomdbl4'   : 'required|numeric',
           'ccustomdbl5'   : 'required|numeric',
           'ccustomdbl6'   : 'required|numeric',
           'ccustomdbl7'   : 'required|numeric',
           'ccustomdbl8'   : 'required|numeric',
           'ccustomdbl9'   : 'required|numeric',
           'ccustomdbl10'   : 'required|numeric',
           'ccustomdate1'   : 'required|date',
           'ccustomdate2'   : 'required|date',
           'ccustomdate3'   : 'required|date',
           'ccustomdate4'   : 'required|date',
           'ccustomdate5'   : 'required|date',
           'ccustomdate6'   : 'required|date',
           'ccustomdate7'   : 'required|date',
           'ccustomdate8'   : 'required|date',
           'ccustomdate9'   : 'required|date',
           'ccustomdate10'   : 'required|date'};
param.dataUpdate = 'cnomor, ctipe, ckategori, cdc, curutan, caktif, cnama, cnamaalias1, cnamaalias2, cnamaalias3, cgd, clevel, csubdari, cparent, clevel1, clevel2, clevel3, clevel4, clevel5, cjenisaruskas, cbukupembantu, ccabang, clokasi, cdivisi, cmatauang, ckodebank, cnorekbank, cjenis, csaldoawal, csaldoberjalan, ccatatan, cmodifikasiuser, cmodifikasitgl, ccostcenter, ccustomtext1, ccustomtext2, ccustomtext3, ccustomtext4, ccustomtext5, ccustomtext6, ccustomtext7, ccustomtext8, ccustomtext9, ccustomtext10, ccustomint1, ccustomint2, ccustomint3, ccustomint4, ccustomint5, ccustomint6, ccustomint7, ccustomint8, ccustomint9, ccustomint10, ccustomdbl1, ccustomdbl2, ccustomdbl3, ccustomdbl4, ccustomdbl5, ccustomdbl6, ccustomdbl7, ccustomdbl8, ccustomdbl9, ccustomdbl10, ccustomdate1, ccustomdate2, ccustomdate3, ccustomdate4, ccustomdate5, ccustomdate6, ccustomdate7, ccustomdate8, ccustomdate9, ccustomdate10';
module.exports = {
    app: app => {
        app.get('/f1/coa', async(req, result) => help.tc(master.show, req, result, __line, __filename, param));
        app.get('/f1/coa/:id', async(req, result) => help.tc(master.showById, req, result, __line, __filename, param));
        app.post('/f1/coa', async(req, result) => help.tc(master.insert, req, result, __line, __filename, param));
        app.put('/f1/coa/:id', async(req, result) => help.tc(master.update, req, result, __line, __filename, param));
        app.delete('/f1/coa/:id', async(req, result) => help.tc(master.delete, req, result, __line, __filename, param));
    }    
};