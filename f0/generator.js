const ui = async(req) => {
    let desc = await knex.schema.raw(`describe ${req.query.table}`)
    let descDetail = await knex.schema.raw(`describe ${req.query.table}_detail`)
    CONTROLLER_NAME = req.query.table.replace('f' + req.query.noFix + '_', "").toLowerCase()
    SUMBER = req.query.table.split("_")[1]
    PRIMARY_KEY_UTAMA = ''
    PRIMARY_KEY_DETAIL = ''
    SELECT_DATA = ''
    SELECT_DATA_FORMAT_DATE = ''
    VALIDATOR_UTAMA = ''
    VALIDATOR_DETAIL = ''
    DATA_POST = ''
    VALIDATOR_UPDATE = ''
    DATA_UPDATE = ''

    for(const idx in desc)
    {
        let field = desc[idx]

        if(field.Key == 'PRI')
        {
               PRIMARY_KEY_UTAMA = field.Field
        } 
        
        if(!isCustom(field.Field))
            SELECT_DATA += field.Field + ", "

        if(field.Type == 'timestamp' || field.Type == 'date')
        {
            SELECT_DATA_FORMAT_DATE += field.Field + ", "
        } 
        
        let validator = setValidator(field.Type, field.Null, (!help.isContain(field.Type, 'unsigned')) ? true : false)
        
        if(validator != '')
            VALIDATOR_UTAMA += "           'field->Field'   => '" + validator + "',\n"

        if(!help.isContain(field.Field, 'modifikasiuser') && !help.isContain(field.Field, 'modifikasitgl'))
        {
            DATA_POST += "field->Field, "
        }
        
        if(!help.isContain(field.Field, 'inputuser') && !help.isContain(field.Field, 'inputtgl') && (field.Key != 'PRI'))
        {
            if(validator != '')
                VALIDATOR_UPDATE += "           'field->Field'   => '" + validator + "',\n"

            DATA_UPDATE += "field->Field, "
        }
    }
    
    for(const idx in descDetail)
    {
        let field = descDetail[idx];
        if(field.Key == 'PRI')
        {
            PRIMARY_KEY_DETAIL = field.Field
        } 

        validator = setValidator(field.Type, field.Null, (!help.isContain(field.Type, 'unsigned')) ? true : false)
        
        if(validator != '')
            VALIDATOR_DETAIL += "              'field->Field'   => '" + validator + "',\n"
    }

    SELECT_DATA = SELECT_DATA.slice(0, SELECT_DATA.length-2)

    if(SELECT_DATA_FORMAT_DATE.length > 0)
        SELECT_DATA_FORMAT_DATE = SELECT_DATA_FORMAT_DATE(0, SELECT_DATA_FORMAT_DATE.length-2)

    VALIDATOR_UTAMA = VALIDATOR_UTAMA.slice(0, VALIDATOR_UTAMA.length-2)
    VALIDATOR_DETAIL = VALIDATOR_DETAIL.slice(0, VALIDATOR_DETAIL.length-2)

    DATA_POST = DATA_POST.slice(0, DATA_POST.length-2)

    VALIDATOR_UPDATE = VALIDATOR_UPDATE.slice(0, VALIDATOR_UPDATE.length-2)

    DATA_UPDATE = DATA_UPDATE.slice(0, DATA_UPDATE.length-2)

    code = ThmeAPI
    code = code.replace('@', '')
    code = code.replace('#0CONTROLLER_NAME', CONTROLLER_NAME)
    code = code.replace('#1TABLE_NAME', req.query.table)
    code = code.replace('#2PRIMARY_KEY_UTAMA', PRIMARY_KEY_UTAMA)
    code = code.replace('#2PRIMARY_KEY_DETAIL', PRIMARY_KEY_DETAIL)
    code = code.replace('#3SELECT_DATA', SELECT_DATA)
    code = code.replace('#4SELECT_DATA_FORMAT_DATE', SELECT_DATA_FORMAT_DATE)
    code = code.replace('#5VALIDATOR_UTAMA', VALIDATOR_UTAMA)
    code = code.replace('#5VALIDATOR_DETAIL', VALIDATOR_DETAIL)
    code = code.replace('#6DATA_POST', DATA_POST)
    code = code.replace('#7VALIDATOR_UPDATE', VALIDATOR_UPDATE)
    code = code.replace('#8DATA_UPDATE', DATA_UPDATE)
    code = code.replace('#9SUMBER', SUMBER)

    return code
};

// GENERATOR API CRUD
const api = async(req) => {
    db = knex.schema.raw(`describe ${req.query.table}`)
    desc = await db.catch(function(err) {
        return {success: false, message: err.stack.split('\n')[0], messageDev: err.stack.split('\n')};
    })
    CONTROLLER_NAME = req.query.table.replace('f'+req.query.noFix+'_', "").toLowerCase()
    PRIMARY_KEY = '';
    SELECT_DATA = '';
    SELECT_DATA_FORMAT_DATE = '';
    VALIDATOR_POST = '';
    DATA_POST = '';
    VALIDATOR_UPDATE = '';
    DATA_UPDATE = '';

    for(const idx in desc[0])
    {
        const field = desc[0][idx]
        if(field.Key == 'PRI')
        {
            PRIMARY_KEY = field.Field;
        } 
        
        if(!isCustom(field.Field))
            SELECT_DATA += field.Field + ", ";

        
        if(field.Type == 'timestamp' || field.Type == 'date')
        {
            SELECT_DATA_FORMAT_DATE += field.Field + ", ";
        } 
        
        
        let validator = setValidator(field.Type, field.Null, (!help.isContain(field.Type, 'unsigned')) ? true : false);
        
        if(!help.isContain(field.Field, 'modifikasiuser') && !help.isContain(field.Field, 'modifikasitgl'))
        {
            if(validator != '')
                VALIDATOR_POST += `           '${field.Field}'   : '${validator}',\n`;

            DATA_POST += `${field.Field}, `;
        }
        
        if(!help.isContain(field.Field, 'inputuser') && !help.isContain(field.Field, 'inputtgl') && (field.Key != 'PRI'))
        {
            if(validator != '')
                VALIDATOR_UPDATE += `           '${field.Field}'   : '${validator}',\n`;

            DATA_UPDATE += `${field.Field}, `;
        }

    }

    SELECT_DATA = SELECT_DATA.slice(0, SELECT_DATA.length-2);

    if(SELECT_DATA_FORMAT_DATE.length > 0)
        SELECT_DATA_FORMAT_DATE = SELECT_DATA_FORMAT_DATE.slice(0, SELECT_DATA_FORMAT_DATE.length-2);

    VALIDATOR_POST = VALIDATOR_POST.slice(0, VALIDATOR_POST.length-2);

    DATA_POST = DATA_POST.slice(0, DATA_POST.length-2);

    VALIDATOR_UPDATE = VALIDATOR_UPDATE.slice(0, VALIDATOR_UPDATE.length-2);

    DATA_UPDATE = DATA_UPDATE.slice(0, DATA_UPDATE.length-2);

    code = source;
    code = help.replaceAll(code, '@', '')
    code = help.replaceAll(code, '#0CONTROLLER_NAME', CONTROLLER_NAME)
    code = help.replaceAll(code, '#1TABLE_NAME', req.query.table)
    code = help.replaceAll(code, '#2PRIMARY_KEY', PRIMARY_KEY)
    code = help.replaceAll(code, '#3SELECT_DATA', SELECT_DATA)
    code = help.replaceAll(code, '#4SELECT_DATA_FORMAT_DATE', SELECT_DATA_FORMAT_DATE)
    code = help.replaceAll(code, '#5VALIDATOR_POST', VALIDATOR_POST)
    code = help.replaceAll(code, '#6DATA_POST', DATA_POST)
    code = help.replaceAll(code, '#7VALIDATOR_UPDATE', VALIDATOR_UPDATE)
    code = help.replaceAll(code, '#8DATA_UPDATE', DATA_UPDATE)

    return code;
}

// GENERATOR POSTMAN
const postman = async(r) => {
    const req = r.query
    content = await fs.readFileSync('./files/nodejs.postman_collection.json','utf8')
    data = JSON.parse(content)

    // Reset modul
    data.item[2].item = [];
    
    let source = req.table.split(",")    
    for(const i in source) 
    {
        let value = source[i]
        fieldPrimaryKey = '';
        code = help.replaceAll(value, 'f' + req.noFix + '_', ""); 
        let set = JSON.parse(content).item[2].item[3];
        set.name = code.slice(0, 1).toUpperCase() + code.slice(1, code.length)
        db = knex.schema.raw(`describe ${value}`)
        desc = await db.catch(function(err) {
            return {success: false, message: err.stack.split('\n')[0], messageDev: err.stack.split('\n')};
         })
        
        let varInsert = '';
        let varUpdate = ''
        for(let idx in desc[0])
        {
            let field = desc[0][idx]
            let value = ""
            
            // 1. Insert form data
            if(field.Key == 'PRI')
            {
                fieldPrimaryKey = field.Field;
                value = field.Field + "123";
            }
            else if(field.Type == 'timestamp' || field.Type == 'date')
                value = "{{timestamp}}";
            else if(help.isContain(field.Type, 'int') || help.isContain(field.Type, 'double') || help.isContain(field.Type, 'bigint') || help.isContain(field.Type, 'tinyint'))
                value = "0";
            else
                value = `${field.Field} 123`;


            // 2. Insert form data
            if(!help.isContain(field.Field, 'modifikasiuser') && !help.isContain(field.Field, 'modifikasitgl'))
                varInsert +=  '"'+ field.Field +'":"'+ value +'",';
                
            // 1. Update form data
            if(!help.isContain(field.Field, 'inputuser') && !help.isContain(field.Field, 'inputtgl') && (field.Key != 'PRI'))
                if(field.Type == 'timestamp' || field.Type == 'date')
                    varUpdate +=  '"'+ field.Field +'":"{{timestamp}}",';
                else if(help.isContain(field.Type, 'int') || help.isContain(field.Type, 'double') || help.isContain(field.Type, 'bigint') || help.isContain(field.Type, 'tinyint'))
                    varUpdate += '"'+ field.Field +'":"0",';
                else
                    varUpdate += '"'+ field.Field +'":"'+ field.Field +' 456",';
                
        }
        // 3. Insert form data
        varInsert = '{'+ varInsert.slice(0, varInsert.length-1) + '}';
        set.item[0].request.body.mode = 'raw';
        set.item[0].request.body.raw = varInsert;
        set.item[0].request.header[0].value = 'application/json;charset=UTF-8';
        delete set.item[0].request.body.formdata

        // 2. Update form data
        varUpdate = '{'+ varUpdate.slice(0, varUpdate.length-1) + '}';
        set.item[1].request.body.mode = 'raw';
        set.item[1].request.body.raw = varUpdate;
        set.item[0].request.header.value = 'application/json;charset=UTF-8';
        delete set.item[1].request.body.formdata

        // Insert set url
        set.item[0].request.url.raw = "{{url}}/f"+req.noFix+"/"+ code +"?param={\"target\":\"insertData\"}";
        set.item[0].request.url.path = [];
        set.item[0].request.url.path[0] = 'f'+req.noFix;
        set.item[0].request.url.path[1] = code;
        set.item[0].request.method = "POST";
        
        // Update set url
        set.item[1].request.url.raw = "{{url}}/f"+req.noFix+"/"+ code +"/"+fieldPrimaryKey +"123?param={\"target\":\"updateData\"}";
        set.item[1].request.url.path = [];
        set.item[1].request.url.path[0] = 'f'+req.noFix;
        set.item[1].request.url.path[1] = code;
        set.item[1].request.url.path[2] = fieldPrimaryKey +"123";
        set.item[1].request.url.query[0].value = "{\"target\":\"updateData\"}";
        set.item[1].request.method = "PUT";

        // Show set url
        set.item[2].request.url.raw = "{{url}}/f"+req.noFix+"/"+ code +"?param={\"target\":\"show\",\"pageNumber\":1,\"pageLimit\":3,\"filter\":\"\",\"orderBy\":\"\",\"groupBy\": \"\"}";
        set.item[2].request.url.path = [];
        set.item[2].request.url.path[0] = 'f'+req.noFix;
        set.item[2].request.url.path[1] = code;
        set.item[2].request.method = "GET";

        // ShowById set url
        set.item[3].request.url.raw = "{{url}}/f"+req.noFix+"/"+ code +"/"+fieldPrimaryKey +"123?param={\"target\":\"showById\"}";
        set.item[3].request.url.path = [];
        set.item[3].request.url.path[0] = 'f'+req.noFix;
        set.item[3].request.url.path[1] = code;
        set.item[3].request.url.path[2] = fieldPrimaryKey +"123";
        set.item[3].request.method = "GET";

        // Delete set url
        set.item[4].request.url.raw = "{{url}}/f"+req.noFix+"/"+ code +"/"+fieldPrimaryKey +"123?param={\"target\":\"delete\"}";
        set.item[4].request.url.path = [];
        set.item[4].request.url.path[0] = 'f'+req.noFix;
        set.item[4].request.url.path[1] = code;
        set.item[4].request.url.path[2] = fieldPrimaryKey +"123";
        set.item[4].request.method = "DELETE";

        data.item[2].item.push(set);
    }

    content = await fs.writeFileSync('./files/result.postman_collection.json', JSON.stringify(data))

    return true;
}
    
    
module.exports = {
    app: app => {
        app.get('/f0/generator/postman', async(req, result) => {
            let respond
            try {
                res.data = await postman(req);
                respond = res.string();
            }
            catch (err) {
                respond = res.fail(err.stack.split('\n')[0], 409, err.stack.split('\n'), __line, __filename)
            }
            result.status(respond.status).send(respond.send);
        });
        app.get('/f0/generator', async(req, result) => {
            let respond
            try {
                res.data = await api(req);
                respond = res.string();
            }
            catch (err) {
                respond = res.fail(err.stack.split('\n')[0], 409, err.stack.split('\n'), __line, __filename)
            }
            result.status(respond.status).send(respond.send);
        });
        app.get('/f0/ui', async(req, result) => {
            let respond
            try {
                res.data = await show(req);
                respond = res.string();
            }
            catch (err) {
                respond = res.fail(err.stack.split('\n')[0], 409, err.stack.split('\n'), __line, __filename)
            }
            result.status(respond.status).send(respond.send);
        });
    }    
};

function isCustom(data = '')
{
    if(data.lastIndexOf("customtext"))
        return true;

    if(data.lastIndexOf("customint"))
        return true;

    if(data.lastIndexOf("customdate"))
        return true;

    if(data.lastIndexOf("customdbl"))
        return true;

    return false;
}

const validator = '';

const setValidator = (type = '', nullVar = '', signed = true) =>
{
    this.validator = '';
    
    if(nullVar == 'NO')
        setVar('required');

    if(help.isContain(type, 'integer') || help.isContain(type, 'int') || help.isContain(type, 'double') || help.isContain(type, 'bigint') || help.isContain(type, 'tinyint'))
    {
        setVar('numeric');
    }
    else if(help.isContain(type, 'date') || help.isContain(type, 'timestamp'))
    {
        setVar('date');
    }
        
    if(help.isContain(type, 'varchar'))
    {
        val = type.replace('varchar(', '');
        val = val.replace(')', '');
        setVar('max:' . val);
    }
    else if(help.isContain(type, 'char'))
    {
        val = type.replace('char(', '');
        val = val.replace(')', '');
        setVar('max:' . val);
    }
    else if(help.isContain(type, 'tinyint')) // 127
    {
        if(signed)
        {
            setVar('min:-127');
            setVar('max:127');
        }
        else
        {
            setVar('min:0');
            setVar('max:255');
        }
    }
    else if(help.isContain(type, 'smallint')) 
    {
        if(signed)
        {
            setVar('min:-32767'); 
            setVar('max:32767'); // 32.767
        }
        else
        {
            setVar('min:0');
            setVar('max:65535'); // 65.535
        }
    }
    else if(help.isContain(type, 'mediumint')) // 8.388.608
    {
        if(signed)
        {
            setVar('min:-8388608'); 
            setVar('max:8388608'); // 8.388.608
        }
        else
        {
            setVar('min:0');
            setVar('max:16777215'); // 16,777,215
        }
    }
    else if(help.isContain(type, 'bigint')) // 9.223.372.036.854.775.808
    {
        if(signed)
        {
            setVar('min:-9223372036854775808'); 
            setVar('max:9223372036854775808'); // 9.223.372.036.854.775.808
        }
        else
        {
            setVar('min:0');
            setVar('max:18446744073709551615'); // 18,446,744,073,709,551,615
        }
    }
    else if(help.isContain(type, 'int') || help.isContain(type, 'integer')) 
    {
        if(signed)
        {
            setVar('min:-2147483647'); 
            setVar('max:2147483647'); // 2.147.483.647
        }
        else
        {
            setVar('min:0');
            setVar('max:4294967295'); //  4,294,967,295
        }
    }

    return this.validator;
}

const setVar = (data = '') =>
{
    if(data != '')
    {
        if(this.validator != '')
            this.validator += '|';

        this.validator += data;
    }
}

const ThemeUI = `import React from 'react';
import CRUD from './data/CRUD';
import { defaultDate } from '../../service';

class CRUD_Master extends React.Component 
{
  render() 
  {
    const params = {
      source: '#1_SOURCE',
      primaryKey: '#2_PRIMARY_KEY',
    
      dataColumn: [
        #3_DATA_COLUMN
      ],

      dataFormatDate: [#4_DATA_FORMAT_DATE],
    
      inputForm: [
        #5_INPUT_FORM
      ],
    
      inputFilter: [
        #6_INPUT_FILTER
      ],
    
      // Pagging
      paramFilterGlobal: (val) => "#7_PARAM_FILTER_GLOBAL",
      sort: "#8_SORT",
      limit: 4,
    }

    return (<CRUD params={params} />);
  }
}

export default CRUD_Master;
`;

const ThmeAPI = `// table identity
master.tableName = '#1TABLE_NAME';
master.primaryKey = '#2PRIMARY_KEY_UTAMA';

// parameter for select data
master.select = '#3SELECT_DATA';
master.selectFormatDate = '#4SELECT_DATA_FORMAT_DATE';

// Parameter for post data
master.validatorPost = {
#5VALIDATOR_POST};
master.dataPost = '#6DATA_POST';

// Parameter for update data
master.validatorUpdate = {
#7VALIDATOR_UPDATE};
master.dataUpdate = '#8DATA_UPDATE';
module.exports = {
    app: app => {
        app.get('/f1/area', async(req, result) => help.tc(master.show, req, result, __line, __filename));
        app.get('/f1/area/:id', async(req, result) => help.tc(master.showById, req, result, __line, __filename));
        app.post('/f1/area', async(req, result) => help.tc(master.insert, req, result, __line, __filename));
        app.put('/f1/area/:id', async(req, result) => help.tc(master.update, req, result, __line, __filename));
        app.delete('/f1/area/:id', async(req, result) => help.tc(master.delete, req, result, __line, __filename));
    }    
};
`;

const source = `<? const param = {}
// table identity
param.tableName = '#1TABLE_NAME';
param.primaryKey = '#2PRIMARY_KEY';

// parameter for select data
param.select = '#3SELECT_DATA';
param.selectFormatDate = '#4SELECT_DATA_FORMAT_DATE';

// Parameter for post data
param.validatorPost = {
#5VALIDATOR_POST};
param.dataPost = '#6DATA_POST';

// Parameter for update data
param.validatorUpdate = {
#7VALIDATOR_UPDATE};
param.dataUpdate = '#8DATA_UPDATE';
module.exports = {
    app: app => {
        app.get('/f1/#0CONTROLLER_NAME', async(req, result) => help.tc(master.show, req, result, __line, __filename, param));
        app.get('/f1/#0CONTROLLER_NAME/:id', async(req, result) => help.tc(master.showById, req, result, __line, __filename, param));
        app.post('/f1/#0CONTROLLER_NAME', async(req, result) => help.tc(master.insert, req, result, __line, __filename, param));
        app.put('/f1/#0CONTROLLER_NAME/:id', async(req, result) => help.tc(master.update, req, result, __line, __filename, param));
        app.delete('/f1/#0CONTROLLER_NAME/:id', async(req, result) => help.tc(master.delete, req, result, __line, __filename, param));
    }    
};`; 