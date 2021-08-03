const sum = (...a) => {
    const args = [...a];
    return args.reduce((a, b) => a+b,0); //ou: args.reduce((a, b) => {return a+b});    
}

  console.log(sum());