function orbitalPeriod(arr) {

    arr.map(element => {
        var GM = 398600.4418;
        var earthRadius = 6367.4447;
        var altitude = element["avgAlt"];
        var a = Math.pow(altitude + earthRadius, 3);
        var root = Math.sqrt(a/GM);
        var res = Math.round(2*Math.PI*root);

        element["orbitalPeriod"] = res;
        delete element["avgAlt"];
        return element;
    })

    return arr;
}

console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));