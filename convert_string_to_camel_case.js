function toCamelCase(str){
let words = str.split(/[-_]/);
    let camelCaseStr = words[0];
    for (let i = 1; i < words.length; i++) {
        camelCaseStr += words[i].charAt(0).toUpperCase() + words[i].slice(1); 
    }
    return camelCaseStr;
}