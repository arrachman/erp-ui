const param = {}
// table identity
param.tableName = 'f1_contact';
param.primaryKey = 'kid';

// parameter for select data
param.select = '';
param.selectFormatDate = 'kaktiftgl, ktglkontrak, ktgllahir, ktglnikah, kinputtgl, kmodifikasitgl, kcustomdate1, kcustomdate2, kcustomdate3';

// Parameter for post data
param.validatorPost = {
           'kid'   : 'required|numeric|min:-9223372036854775808|max:9223372036854775808',
           'kkode'   : 'required',
           'knama'   : 'required',
           'kkategori'   : 'required',
           'ksalesman'   : 'numeric|min:-9223372036854775808|max:9223372036854775808',
           'kterminglobal'   : 'numeric|min:-127|max:127',
           'kaktif'   : 'required|numeric|min:-127|max:127',
           'kaktiftgl'   : 'required|date',
           'kpkp'   : 'numeric|min:0|max:255',
           'kbatashutang'   : 'numeric',
           'kbagpembelian'   : 'numeric|min:-9223372036854775808|max:9223372036854775808',
           'kbataspiutang'   : 'numeric',
           'kbagpenjualan'   : 'numeric|min:0|max:18446744073709551615',
           'ktingkatjual'   : 'numeric|min:0|max:4294967295',
           'ktglkontrak'   : 'date',
           'kjeniskelamin'   : 'numeric|min:0|max:255',
           'ktgllahir'   : 'date',
           'ktglnikah'   : 'date',
           'kkomisipenjualan'   : 'numeric',
           'kinputuser'   : 'required|numeric|min:0|max:18446744073709551615',
           'kinputtgl'   : 'required|date',
           'kcustomint1'   : 'required|numeric|min:-2147483647|max:2147483647',
           'kcustomint2'   : 'required|numeric|min:-2147483647|max:2147483647',
           'kcustomint3'   : 'required|numeric|min:-2147483647|max:2147483647',
           'kcustomdbl1'   : 'required|numeric',
           'kcustomdbl2'   : 'required|numeric',
           'kcustomdbl3'   : 'required|numeric',
           'kcustomdate1'   : 'required|date',
           'kcustomdate2'   : 'required|date',
           'kcustomdate3'   : 'required|date',
           'ksinkron'   : 'required|numeric|min:-127|max:127',
           'kdownloaded'   : 'required|numeric|min:-2147483647|max:2147483647',
           'khargacustom'   : 'required|numeric|min:-2147483647|max:2147483647',
           'kpajakcustom'   : 'required|numeric|min:-2147483647|max:2147483647',
           'ktotalpiutang'   : 'required|numeric',
           'ktotalhutang'   : 'required|numeric'};
param.dataPost = 'kid, kkode, knama, kkategori, kkategorinama, kcabang, kcabangnama, klokasi, klokasinama, kgudang, kgudangnama, kkategorisalesman, kkategorisalesmannama, karea, kareanama, kkategoricustomer, kkategoricustomernama, kkategorisupplier, kkategorisuppliernama, kdivisi, kdivisinama, ksubdivisi, ksubdivisinama, ksalesman, ksalesmannama, kkontakperson, kterminglobal, kaktif, kaktiftgl, k1alamat1, k1alamat2, k1alamat3, k1alamat4, k1alamat5, k1kota, k1propinsi, k1kodepos, k1negara, k1kontakperson, k1kontaknohp, k1kontakemail, k1notelp1, k1notelp2, k1nofax, k1email, k1website, k2alamat1, k2alamat2, k2alamat3, k2alamat4, k2alamat5, k2propinsi, k2kota, k2kodepos, k2negara, k2kontakperson, k2kontaknohp, k2kontakemail, k2notelp1, k2notelp2, k2nofax, k2email, k2website, k3alamat1, k3alamat2, k3alamat3, k3alamat4, k3alamat5, k3kota, k3propinsi, k3kodepos, k3negara, k3kontakperson, k3kontaknohp, k3kontakemail, k3notelp1, k3notelp2, k3nofax, k3email, k3website, k4alamat1, k4alamat2, k4alamat3, k4alamat4, k4alamat5, k4kota, k4propinsi, k4kodepos, k4negara, k4kontakperson, k4kontaknohp, k4kontakemail, k4notelp1, k4notelp2, k4nofax, k4email, k4website, knpwp, kpkp, kbatashutang, kterminbeli, krekhutang, kbagpembelian, kfobbeli, kviabeli, kbataspiutang, kterminjual, krekpiutang, kbagpenjualan, ktingkatjual, kfobjual, kviajual, ktglkontrak, kbank, knorekening, kjeniskelamin, kmatauang, ktgllahir, ktglnikah, kkomisikode, kkomisipenjualan, kcatatan, kinputuser, kinputtgl, kcustomtext1, kcustomtext2, kcustomtext3, kcustomtext4, kcustomtext5, kcustomtext6, kcustomtext7, kcustomtext8, kcustomtext9, kcustomtext10, kcustomint1, kcustomint2, kcustomint3, kcustomdbl1, kcustomdbl2, kcustomdbl3, kcustomdate1, kcustomdate2, kcustomdate3, ksinkron, kdownloaded, khargacustom, kpajakcustom, ktotalpiutang, ktotalhutang';

// Parameter for update data
param.validatorUpdate = {
           'kkode'   : 'required',
           'knama'   : 'required',
           'kkategori'   : 'required',
           'ksalesman'   : 'numeric|min:-9223372036854775808|max:9223372036854775808',
           'kterminglobal'   : 'numeric|min:-127|max:127',
           'kaktif'   : 'required|numeric|min:-127|max:127',
           'kaktiftgl'   : 'required|date',
           'kpkp'   : 'numeric|min:0|max:255',
           'kbatashutang'   : 'numeric',
           'kbagpembelian'   : 'numeric|min:-9223372036854775808|max:9223372036854775808',
           'kbataspiutang'   : 'numeric',
           'kbagpenjualan'   : 'numeric|min:0|max:18446744073709551615',
           'ktingkatjual'   : 'numeric|min:0|max:4294967295',
           'ktglkontrak'   : 'date',
           'kjeniskelamin'   : 'numeric|min:0|max:255',
           'ktgllahir'   : 'date',
           'ktglnikah'   : 'date',
           'kkomisipenjualan'   : 'numeric',
           'kmodifikasiuser'   : 'required|numeric|min:0|max:18446744073709551615',
           'kmodifikasitgl'   : 'required|date',
           'kcustomint1'   : 'required|numeric|min:-2147483647|max:2147483647',
           'kcustomint2'   : 'required|numeric|min:-2147483647|max:2147483647',
           'kcustomint3'   : 'required|numeric|min:-2147483647|max:2147483647',
           'kcustomdbl1'   : 'required|numeric',
           'kcustomdbl2'   : 'required|numeric',
           'kcustomdbl3'   : 'required|numeric',
           'kcustomdate1'   : 'required|date',
           'kcustomdate2'   : 'required|date',
           'kcustomdate3'   : 'required|date',
           'ksinkron'   : 'required|numeric|min:-127|max:127',
           'kdownloaded'   : 'required|numeric|min:-2147483647|max:2147483647',
           'khargacustom'   : 'required|numeric|min:-2147483647|max:2147483647',
           'kpajakcustom'   : 'required|numeric|min:-2147483647|max:2147483647',
           'ktotalpiutang'   : 'required|numeric',
           'ktotalhutang'   : 'required|numeric'};
param.dataUpdate = 'kkode, knama, kkategori, kkategorinama, kcabang, kcabangnama, klokasi, klokasinama, kgudang, kgudangnama, kkategorisalesman, kkategorisalesmannama, karea, kareanama, kkategoricustomer, kkategoricustomernama, kkategorisupplier, kkategorisuppliernama, kdivisi, kdivisinama, ksubdivisi, ksubdivisinama, ksalesman, ksalesmannama, kkontakperson, kterminglobal, kaktif, kaktiftgl, k1alamat1, k1alamat2, k1alamat3, k1alamat4, k1alamat5, k1kota, k1propinsi, k1kodepos, k1negara, k1kontakperson, k1kontaknohp, k1kontakemail, k1notelp1, k1notelp2, k1nofax, k1email, k1website, k2alamat1, k2alamat2, k2alamat3, k2alamat4, k2alamat5, k2propinsi, k2kota, k2kodepos, k2negara, k2kontakperson, k2kontaknohp, k2kontakemail, k2notelp1, k2notelp2, k2nofax, k2email, k2website, k3alamat1, k3alamat2, k3alamat3, k3alamat4, k3alamat5, k3kota, k3propinsi, k3kodepos, k3negara, k3kontakperson, k3kontaknohp, k3kontakemail, k3notelp1, k3notelp2, k3nofax, k3email, k3website, k4alamat1, k4alamat2, k4alamat3, k4alamat4, k4alamat5, k4kota, k4propinsi, k4kodepos, k4negara, k4kontakperson, k4kontaknohp, k4kontakemail, k4notelp1, k4notelp2, k4nofax, k4email, k4website, knpwp, kpkp, kbatashutang, kterminbeli, krekhutang, kbagpembelian, kfobbeli, kviabeli, kbataspiutang, kterminjual, krekpiutang, kbagpenjualan, ktingkatjual, kfobjual, kviajual, ktglkontrak, kbank, knorekening, kjeniskelamin, kmatauang, ktgllahir, ktglnikah, kkomisikode, kkomisipenjualan, kcatatan, kmodifikasiuser, kmodifikasitgl, kcustomtext1, kcustomtext2, kcustomtext3, kcustomtext4, kcustomtext5, kcustomtext6, kcustomtext7, kcustomtext8, kcustomtext9, kcustomtext10, kcustomint1, kcustomint2, kcustomint3, kcustomdbl1, kcustomdbl2, kcustomdbl3, kcustomdate1, kcustomdate2, kcustomdate3, ksinkron, kdownloaded, khargacustom, kpajakcustom, ktotalpiutang, ktotalhutang';
module.exports = {
    app: app => {
        app.get('/f1/contact', async(req, result) => help.tc(master.show, req, result, __line, __filename, param));
        app.get('/f1/contact/:id', async(req, result) => help.tc(master.showById, req, result, __line, __filename, param));
        app.post('/f1/contact', async(req, result) => help.tc(master.insert, req, result, __line, __filename, param));
        app.put('/f1/contact/:id', async(req, result) => help.tc(master.update, req, result, __line, __filename, param));
        app.delete('/f1/contact/:id', async(req, result) => help.tc(master.delete, req, result, __line, __filename, param));
    }    
};