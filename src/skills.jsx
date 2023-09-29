import ReactDOM from 'react-dom/client'
import remove from './img/remove.png'

let skillsButtonTurn = 0;

function Skills()
{
    return(
        <>
            <button id = "skillsButton" onClick={handleButtonSkills}>Skills</button>
             <div id = "skillsListSidebar"></div>
             <div id = "skillsForm"></div>
           
        </>
    ) 
}

function SkillsForm()
{
    return(
        <form>
            <input id = "skillName" type='text' placeholder='skill'></input>
            <button className='addButton' onClick={handleSkillsForm}>Add</button>
        </form>
    )
}


function handleButtonSkills()
{
    console.log(skillsButtonTurn % 2)
    let skillsForm = document.getElementById('skillsForm')
    if(skillsButtonTurn % 2 === 0)
    {
        ReactDOM.createRoot(skillsForm).render(

            <SkillsForm />
        )
    }
    else
    {
        skillsForm.innerHTML = ''

    }
    
    skillsButtonTurn++;
    
}

function handleSkillsForm(e)
{
    e.preventDefault()
    let skillName = document.getElementById('skillName')
    if(!skillName.value) return 0;
    addSkills(skillName.value)
    let skillsDisplay = document.getElementById('skillsDisplay')
    let skillsForm = document.getElementById('skillsForm')
    skillsForm.innerHTML = '';
    skillsButtonTurn++;
    let div = document.createElement('div')
    div.id = skillName.value
    div.classList.add('skillsDiv')
    div.innerText = skillName.value
    skillsDisplay.append(div)
    skillName.value = '';
    deleteSkills()
}

function addSkills(skill)
{
    let skillsListSidebar = document.getElementById('skillsListSidebar')

    skillsListSidebar.innerHTML += `<div class = 'skillsSidebar'><p>${skill}</p><button class = "removeSkills hidden"><img class = "removeIcon" src = ${remove}></button></div>` 

    sidebarHover()

}



function sidebarHover()
{
    let skillsSidebar = document.querySelectorAll('.skillsSidebar')
    let removeskills = document.querySelectorAll('.removeSkills')
    skillsSidebar.forEach((skills) => {
        skills.addEventListener('mouseover', () => {
          removeskills.forEach((button) => {
            if (skills.contains(button)) {
              button.classList.remove('hidden');
            } else button.classList.add('hidden');
          });
        });
        skills.addEventListener('mouseleave', () => {
          removeskills.forEach((button) => {
            if (skills.contains(button)) {
              button.classList.add('hidden');
            }
          });
        });
      });
}


function deleteSkills()
{
    let removeButtons = document.querySelectorAll('.removeSkills')
    let skillsDivs = document.querySelectorAll('.skillsDiv')
    removeButtons.forEach((button) =>
    {
        button.addEventListener('click', () =>
        {
            console.log(button.parentElement.parentElement)
            skillsDivs.forEach((div) =>
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




export {Skills}