function helpF() {
    console.log("help implmented");
    console.log('list of all commands');
    console.log(`node main.js  tree directory_path
    node main.js organize directory_path
    node main.js help`);
}

module.exports = {
    helpKey: helpF
}