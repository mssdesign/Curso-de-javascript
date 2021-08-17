let object = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    },
    eu: {
      online: true
    }
  };

  

  function countOnline(usersObj) {    
    // Only change code below this line
    for (let user in usersObj) {
        if (usersObj[user]['online'] == true) {
            todos.push(user)
        }
    }
    return todos.length
    // Only change code above this line
  }

  console.log(countOnline(object))