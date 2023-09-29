import ReactDOM from 'react-dom/client'
import remove from './img/remove.png'

let profesionalButtonTurn = 0;

function Profesional()
{
    return(
        <>
            <button onClick={handleButtonProfesional} >Professional Experience</button>
             <div id = "profesionalListSidebar"></div>
             <div id = "profesionalForm"></div>
           
        </>
    ) 
}

function ProfesionalForm()
{
    return(
        <form>
            <input id = "jobTitle" placeholder="Job Title" type="text" required></input>
            <input id="company" placeholder="Company" type="text"></input>
            <label>Started</label>
            <input id="startingJob" type="date"></input>
            <label>Ended</label>
            <input id="endJob" type="date"></input>
            <button className='addButton' onClick={handleProfesionalForm}>Add</button>
        </form>
    )
}


function handleButtonProfesional()
{
    let profesionalForm = document.getElementById('profesionalForm')

    if(profesionalButtonTurn % 2 === 0)
    {
        ReactDOM.createRoot(profesionalForm).render(

        <ProfesionalForm />
    )
    }
    else
    {
        profesionalForm.innerHTML = '';
    }

    profesionalButtonTurn++;
}

function handleProfesionalForm(e)
{
    e.preventDefault()
    
    let jobTitle = document.getElementById('jobTitle')
    let company = document.getElementById('company')
    let startingJob= document.getElementById('startingJob')
    let endJob = document.getElementById('endJob')
    if(!jobTitle.value || !company.value || !startingJob.value) return 0;
    addProfesional(jobTitle.value, company.value)
    let profesionalDisplay = document.getElementById('profesionalDisplay')
    let profesionalForm = document.getElementById('profesionalForm')
    profesionalForm.innerHTML = '';
    profesionalButtonTurn++;

    let jobTitleDiv = document.createElement('div')
    jobTitleDiv.innerText = jobTitle.value + ', ' + company.value
    let dateDiv = document.createElement('div')
    dateDiv.innerText = formatDate(startingJob.value) + " - " +  formatDate(endJob.value)
    let div = document.createElement('div')
    div.id = jobTitle.value;
    div.classList.add('profesionalDiv')
    div.append(jobTitleDiv)
    div.append(dateDiv)
    profesionalDisplay.append(div)
    jobTitle.value = '';
    company.value = '';
    deleteProfesional()
}

function addProfesional(jobTitle, company)
{
    let profesionalListSidebar = document.getElementById('profesionalListSidebar')

    profesionalListSidebar.innerHTML += `<div class = 'profesionalSidebar'><p>${jobTitle}</p><p>${company}</p><button class = "removeProfesional hidden"><img class = "removeIcon" src = ${remove}></button></div>` 

    sidebarHover()

}



function sidebarHover()
{
    let profesionalSidebar = document.querySelectorAll('.profesionalSidebar')
    let removeProfesional = document.querySelectorAll('.removeProfesional')
    profesionalSidebar.forEach((profesional) => {
        profesional.addEventListener('mouseover', () => {
          removeProfesional.forEach((button) => {
            if (profesional.contains(button)) {
              button.classList.remove('hidden');
            } else button.classList.add('hidden');
          });
        });
        profesional.addEventListener('mouseleave', () => {
          removeProfesional.forEach((button) => {
            if (profesional.contains(button)) {
              button.classList.add('hidden');
            }
          });
        });
      });
}


function deleteProfesional()
{
    let removeButtons = document.querySelectorAll('.removeProfesional')
    let profesionalDivs = document.querySelectorAll('.profesionalDiv')
    removeButtons.forEach((button) =>
    {
        button.addEventListener('click', () =>
        {
            console.log(button.parentElement.parentElement)
            profesionalDivs.forEach((div) =>
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



export {Profesional}