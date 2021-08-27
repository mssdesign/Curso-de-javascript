function pairElement(str) {

    let arr = str.split('');
    let res = [];

    arr.map(DNA => {
        if(DNA === 'G'||DNA === 'C') {
            
            if (DNA === 'G') {
                return res.push(['G','C'])
            } else if (DNA === 'C') {
                return res.push(['C', 'G'])
            }

        } else if (DNA === 'T'|| DNA === 'A') {
            
            if (DNA === 'T') {
                return res.push(['T', 'A'])
            } else if (DNA === 'A') {
                return res.push(['A', 'T'])
            }

        }      
    })

    return res;
}

console.log(pairElement("ATCGA"));