
import ReactDOM from 'react-dom/client'
import remove from './img/remove.png'

let educationButtonTurn = 0;

function Education()
{
    return(
        <>
            <button id = "educationButton" onClick={handleButtonEducation}><p>Education</p></button>
             <div id = "educationListSidebar"></div>
             <div id = "educationForm"></div>
           
        </>
    ) 
}

function EducationForm()
{
    return(
        <form>
            <input id = "institution" placeholder="Institution" type="text" required></input>
            <input id="degree" placeholder="Degree" type="text"></input>
            <label>Starting Date</label>
            <input id="startingDate" type="date"></input>
            <label>Graduation Date</label>
            <input id="graduationDate" type="date"></input>
            <button className='addButton' onClick={handleEducationForm}>Add</button>
        </form>
    )
}


function handleButtonEducation()
{
    console.log(educationButtonTurn % 2)
    let educationForm = document.getElementById('educationForm')
    if(educationButtonTurn % 2 === 0)
    {
        ReactDOM.createRoot(educationForm).render(

            <EducationForm />
        )
    }
    else
    {
        educationForm.innerHTML = ''

    }
    
    educationButtonTurn++;
    
}

function handleEducationForm(e)
{
    e.preventDefault()
    
    let institution = document.getElementById('institution')
    let degree = document.getElementById('degree')
    let startingDate = document.getElementById('startingDate')
    let graduationDate = document.getElementById('graduationDate')
    if(!institution.value || !startingDate.value || !graduationDate.value) return 0;
    addEducation(institution.value)
    let educationDisplay = document.getElementById('educationDisplay')
    let educationForm = document.getElementById('educationForm')
    educationForm.innerHTML = '';
    educationButtonTurn++;

    let institutionDiv = document.createElement('div')
    institutionDiv.innerText = institution.value + ', ' + degree.value
    let dateDiv = document.createElement('div')
    dateDiv.innerText = formatDate(startingDate.value) + " - " +  formatDate(graduationDate.value)
    let div = document.createElement('div')
    div.id = institution.value;
    div.classList.add('educationDiv')
    div.append(institutionDiv)
    div.append(dateDiv)
    educationDisplay.append(div)
    institution.value = '';
    degree.value = '';
    deleteEducation()
}

function addEducation(institution)
{
    let educationListSidebar = document.getElementById('educationListSidebar')


    educationListSidebar.innerHTML += `<div class = 'educationSidebar'><p>${institution}</p><button class = "removeEducation hidden"><img class = "removeIcon" src = ${remove}></button></div>` 

    sidebarHover()

}



function sidebarHover()
{
    let educationSidebar = document.querySelectorAll('.educationSidebar')
    let removeEducation = document.querySelectorAll('.removeEducation')
    educationSidebar.forEach((education) => {
        education.addEventListener('mouseover', () => {
          removeEducation.forEach((button) => {
            if (education.contains(button)) {
              button.classList.remove('hidden');
            } else button.classList.add('hidden');
          });
        });
        education.addEventListener('mouseleave', () => {
          removeEducation.forEach((button) => {
            if (education.contains(button)) {
              button.classList.add('hidden');
            }
          });
        });
      });
}


function deleteEducation()
{
    let removeButtons = document.querySelectorAll('.removeEducation')
    let educationDivs = document.querySelectorAll('.educationDiv')
    removeButtons.forEach((button) =>
    {
        button.addEventListener('click', () =>
        {
            console.log(button.parentElement.parentElement)
            educationDivs.forEach((div) =>
            {
                console.log(div)
                if(button.parentElement.querySelector('p').innerText === div.id)
                {
                    console.log(div.id)
                    div.remove()
                    button.parentElement.remove()
                }
            })
        })
        
    })
}


function formatDate(date)
{
    let newDate = new Date(date)
    let dateString
    let month = newDate.toLocaleString('en-US', { month: 'short' });
    let year = newDate.getFullYear();
    dateString = month + ', ' + year;

    return dateString

}



export {Education}