const signupUrl= "http://localhost:5000/register";


export  async function saveSignUpDetails(userSignup){
    console.log("================> Acion creator",)
    const output = await fetch(signupUrl, {method: 'POST',headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({...userSignup})})
    .then((data) => {
        
        // console.log("========data",data)
        data.json()
    })
    return {
        type: 'SAVE_SIGNUP_DETAILS',
        payload: {...userSignup},
    }
    
}