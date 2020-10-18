// master
const master = new help.F1_Master();
module.exports = {
    coa: async(req) => {
        res = new help.Helpfix('showSearch coa');
        const table      = 'f1_coa';
        const select     = '*';
        const selectDate = 'cinputtgl, cmodifikasitgl';
        const title      = 'COA';
        const header     = 
            [
                ['cnomor', 'Nomor', 120],
                ['cnama', 'Nama', 200],
                ['cnamaalias1', 'Nama', 230],
                ['cmatauang', 'Mata Uang', -1],
            ];
        res.data = await master.showSearch(req, table, select, selectDate, title, header); 
        
        return res.success();
    },
    
};