

function ownRegister(){
    const user = document.getElementById("nameUser").value;
    const email = document.getElementById("email_user").value;
    const pass = document.getElementById("userPass").value;

    registerInsert(user, email, pass)
    console.log(user, email, pass)
}

async function registerInsert (user, email_user, usinPass) {
    let url = "http://localhost:9093/register";
    const jsonData = {

        'user': `${user}`,
        'mail_user': `${email_user}`,
        'pass': `${usinPass}`
    };
    console.log(JSON.stringify(jsonData))
    try{

        const rq = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(jsonData)
        })
        if (rq.ok){
            rq.json().then(response => {
                console.log(response)

            });
        }
    }catch(error){
        console.log(error)
    }
}