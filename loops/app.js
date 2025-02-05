

// for(let i= 0; i<100; i++){
//     console.log(`${i} - Hi`)
// }

// num = 100

// for(let i=1;i<=10;i++){
//     console.log(`${num} * ${i} = ${num * i}`)
// }



// How to iterate a array
// How to iterate a array of object


// Array : Collection of items, which can be of same DT or Diff DT, stored in a single variable.


// const user = ["VamseeKrishna", 26, "SeniorDev", "Paritech", true];


const usersInfo = ["VamseeKrishna", "Teja", "Divya", "Lohith", "Uday", "AjayKumar"];




// for(let i=0;i<user.length; i++){
//     console.log(user[i])
// }


// Object : Collection of key value pairs, which can be of same DT or Diff DT, stored in a single variable.


// const user = {
//     name: "VamseeKrishna",
//     age: 26,
//     designation: "SeniorDev",
//     company: "Paritech",
//     isMarried: true
// }

// console.log(usersInfo[0])
// console.log(user.name)

// Array of an objects : collection of objects into one array.

const users = [
    {
        name: "VamseeKrishna",
        age: 26,
        designation: "SeniorDev",
        company: "Paritech",
        isMarried: true   
    }, 
    {
        name : "Krishna",
        age : 36,
        designation : "Dev",
        company : "Paritech",
        isMarried : true
    }, 
    {
        name : "teja",
        age : 23,
        designation : "Jr Dev",
        company : "Paritech",
        isMarried : false
    }]


    // for(let i=0; i< users.length;i++){

    //     // console.log("Username" + users[i].name)
    //     // console.log("Age" + users[i].age)
    //     console.log(`
    //             UserName : ${users[i].name}
    //             Designation : ${users[i].designation}
    //         `)
    // }

    // let  i =0;

    // while( i< users.length){
    //     console.log(`
    //                    UserName : ${users[i].name}
    //                    Designation : ${users[i].designation}
    //                `)
    //     i ++;
    // }