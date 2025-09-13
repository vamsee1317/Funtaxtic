// Email Registration using promises.

// Validate email
// check if the email is existing
// if not, create a new user (Register)



function validateEmail(email){
    return new Promise((resolve, reject)=>{
        console.log("Validating email......");

        setTimeout(()=>{
            if(email.includes("@") && email.includes(".")){
                resolve(email);
            }else{
                reject("Invalid email");
            }
        }, 1000)
    })
}



function checkEmailExists(email){
    return new Promise((resolve, reject)=>{
        console.log("Checking if email exists......");
        setTimeout(()=>{
            const emails = ["abc@gmail.com", "def@gmail.com", "ghi@gmail.com"];
            if(emails.includes(email)){
                reject("Already Exiting Account");
            }else{
                resolve(email);
                emails.push(email);
            }
        }, 2000)
    })
}

function resgisterUser(email){
    return new Promise((resolve, reject)=>{
        console.log("Registering user......");
        setTimeout(()=>{
            resolve(`User Registered Successfully for this id ${email}`);
        }, 3000);
    })
}



function register(email){
        validateEmail(email)
        .then(checkEmailExists)
        .then(resgisterUser)
        .then((message)=>{console.log(message)})
        .catch((error)=>{console.log(error)})

}


register("abcgmail.com");
