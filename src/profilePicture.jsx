import { useEffect, useState } from "react"

function ProfilePicture()
{
    const [picture, setPicture] = useState([])

    const [pictureURLs, setPictureURLs] = useState([])

    useEffect(() =>
    {
        if(picture.length < 1) return;
        const newPictureURLs = [];
        picture.forEach((picture) =>
        {
            newPictureURLs.push(URL.createObjectURL(picture))
            setPictureURLs(newPictureURLs)
        })
    }, [picture])

    let profilePictureDisplay = document.getElementById('profilePictureDisplay')

    profilePictureDisplay.innerHTML = `<img id = "profileImage" src = ${pictureURLs} />`

    function onPictureChange(e)
    {
        setPicture([...e.target.files])
    }

    return(
        <>
            <label htmlFor = "pictureInput" className = "btn">Upload Profile Picture</label>
            <input style={{display: 'none'}} id = "pictureInput" type="file" multiple accept="image/*" onChange={onPictureChange}/>
            
        </>
        
    )
}

export {ProfilePicture}