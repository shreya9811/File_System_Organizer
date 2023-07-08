let fs = require('fs');
let path = require('path');
let utilityObj = require('../utility')


function organizeF(dirPath) {
    //pseudocode
    //1 input - directory path
    let destPath;
    if(dirPath == undefined){
        console.log('Kindly enter the path');
        destPath = process.cwd(); //which directory i will run command
        return;
    } else {
        let isExist = fs.existsSync(dirPath); //check valid path
        if(isExist){
            console.log('yyyyyyyyyyy');
            destPath = path.join(dirPath, "fso"); //create dir
            if(fs.existsSync(destPath) == false){
                console.log('ola');
                 fs.mkdirSync(destPath);
            }
        } else{
            console.log('Kindly enter the correct path');
            return;
        }
    }
    //2. create organized files directory to organize and store files
    //3 check all files and identify the category they belong to in input directory
    organizeHelper(dirPath, destPath);
    //4. copy and cut files to the organized directory and particular folder
    //
}


function organizeHelper(src, dest){
    console.log('here');
    console.log(dest);

    let childnames = fs.readdirSync(src);
    for (let i =  0 ; i< childnames.length; i++){
        let childAddrs = path.join(src, childnames[i]);
        // console.log(childAddrs);
        let isFile = fs.lstatSync(childAddrs).isFile();
        if(isFile){
            let category = getCategory(childAddrs);
            // console.log(category);
            // console.log(typeof childAddrs);
            // console.log(typeof category);
            sendFiles(childAddrs,dest , category)
        }
    }
}
function getCategory(name){
    let ext = path.extname(name);
    // console.log(ext);
    ext = ext.slice(1);
    for(let type in utilityObj.types){
        let typeArr = utilityObj.types[type];
        for(let i = 0 ; i< typeArr.length; i++){
            if(ext == typeArr[i]){
                return type; 
            }
        }
    }
    return 'others';
}
function sendFiles(srcFile, destFolder, subCategory){
    let categoryPath = path.join(destFolder, subCategory);
    if(fs.existsSync(categoryPath)== false){
        fs.mkdirSync(categoryPath);
    }
    //copy file to same filename like ctrl c + ctrl v
    let filename = path.basename(srcFile);
    let destFilePath = path.join(categoryPath, filename);
    fs.copyFileSync(srcFile, destFilePath); //empty file banake content copy hogi
    //for cut past
    fs.unlinkSync(srcFile);
    console.log(filename, "copied to", subCategory);
}

module.exports = {
    organizeKey: organizeF
}