const stringLength = (str) => {
    if(str.length < 1 || str.length > 10){
        throw new Error('The string is < 1 or > 10!');
    }
    return str.length;
} 

module.exports = stringLength ;