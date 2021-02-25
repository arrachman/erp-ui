const MasterPath = 'http://localhost:3000';
const FinancePath = 'http://localhost:15021';

export const urlPath = (module) => {
    let rootPath = ''
    switch(module){
        case 'f1':
            rootPath = MasterPath + '/f1';
            break;
        case 'f2':
            rootPath = FinancePath + '/f2';
            break;
    }
    return rootPath
}