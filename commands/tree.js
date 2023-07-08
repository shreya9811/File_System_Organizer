let fs = require('fs');
let path = require('path');

function treeF(dirPath) {
    if(dirPath == undefined){
        treeHelper(process.cwd(), "");
        return;
    } else {
        let isExist = fs.existsSync(dirPath); //check valid path
        if(isExist){
           treeHelper(dirPath, "");
        } else{
            console.log('Kindly enter the correct path');
            return;
        }
    }
}

function treeHelper(dirPath, indent){
    //check if file print if folder go inside there 
    let isFile = fs.lstatSync(dirPath).isFile();
    if(isFile == true){
        let filename = path.basename(dirPath);
        console.log(indent+"-->"+filename);
    }else{
        let dirname = path.basename(dirPath) //if folder inside folder
console.log(indent + "|->" + dirname);
let childrens = fs.readdirSync(dirPath);
for(let i = 0; i< childrens.length; i++){
    let childPath = path.join(dirPath, childrens[i]);
    treeHelper(childPath, indent + "\t");
    }
}
}

module.exports = {
    treeKey: treeF
}