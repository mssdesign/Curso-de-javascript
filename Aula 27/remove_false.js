function bouncer(arr) {
for (var i = 0, array = []; i < arr.length; i++) {
    if (Boolean(arr[i]) == true) {
        array.push(arr[i])
    }
}
return array
}
  
console.log(bouncer([7, "ate", "", false, 9]));