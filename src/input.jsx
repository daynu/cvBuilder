import { useState } from "react";


function Name()
{
    const [name, setName] = useState('')

    let nameDisplay = document.getElementById('nameDisplay')

    nameDisplay.innerText = name

    return (
        <input placeholder="Full Name" id = "name" value={name} type="text" onChange={(event) => setName(event.target.value)} />
    )


}

function Birth()
{
    const [birth, setBirth] = useState('')

    let birthDisplay = document.getElementById('birthDisplay')

    birthDisplay.innerText = birth

    return(
        <>
            <label>Birth Date</label>
            <input type="date" id = "birth" value={birth} onChange={(event) => setBirth(event.target.value)} />
        </>
        
    )
}

function Email()
{
    const [email, setEmail] = useState('')

    let emailDisplay = document.getElementById('emailDisplay')

    emailDisplay.innerText =  email

    return (
        <input placeholder="E-mail" id = "email" value={email} type="text" onChange={(event) => setEmail(event.target.value)} />
    )


}

function Phone()
{
    const [phone, setPhone] = useState('')

    let phoneDisplay = document.getElementById('phoneDisplay')

    phoneDisplay.innerText = phone

    return (
        <input placeholder="Phone" id = "phone" value={phone} type="text" onChange={(event) => setPhone(event.target.value)} />
    )
}


function Adress()
{
    const [adress, setAdress] = useState('')

    let adressDisplay = document.getElementById('adressDisplay')

    adressDisplay.innerText = adress

    return (
        <input placeholder="Adress" id = "adress" value={adress} type="text" onChange={(event) => setAdress(event.target.value)} />
    )
}



export {Name, Email, Phone, Adress, Birth};