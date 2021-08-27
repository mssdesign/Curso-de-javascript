function spinalCase(str) {
    function upperToHyphenLower(match, offset) {
        return (offset ? ',' : '') + match.toLowerCase();
    }

    let res = str.replace(/[A-Z]/g, upperToHyphenLower).split(/[_,\s]/g).join('-').toLowerCase();

    return res.replace(/-+/g, '-');
}

console.log(spinalCase("The_Andy_Griffith_Show"));