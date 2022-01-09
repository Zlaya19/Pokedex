const userObject = [
    {
        id: 1,
        name: 'Pikachu',
        type: 'electric',
        strength: 'agility',
        attack: 50,
        weakness: 'rubber',
        images: "1"
    },
    {
        id: 2,
        name: 'Charmander',
        type: 'fire',
        strength: 'passion',
        attack: 60,
        weakness: 'Water',
        images: "2"
    },
    {
        id: 3,
        name: 'Squirtle',
        type: 'water',
        strength: 'firmness',
        attack: 40,
        weakness: 'sluggishness',
        images: "3"
    },
    {
        id: 4,
        name: 'Bulbasaur',
        type: 'Flora',
        strength: 'agility',
        attack: 35,
        weakness: 'fire',
        images: "4"
    },
];

const image = ['1','2','3','4'];

const avatar = document.getElementById('avatar');
const btnForward = document.getElementById('btnForward');
const btnBack = document.getElementById('btnBack');

const headline = document.getElementById('headline');
const aboutLine = document.getElementById('aboutLine');
const content = document.getElementById('content');


let ajaxIndex = 0;

window.addEventListener('load', loadID(image[ajaxIndex]));


function loadID(image){
    avatar.style.backgroundImage = `url('images/${image}.png')`;
    avatar.style.transition = '1s';
    avatar.style.opacity = 0.8;

    avatarRight.innerHTML = `<h2>`  /* '<span>name: </span><br>' */ + userObject[ajaxIndex].name  + `</h2>`;
    avatarRight.innerHTML += `<h3>` + `<h3>` + '<span>type: </span><br>' + userObject[ajaxIndex].type  + `</h3>`;

    avatarRight.innerHTML += `<h3>`+ '<span>strenght: </span><br>' + userObject[ajaxIndex].strength + `</h3>`;
    avatarRight.innerHTML += `<h3>` + '<span>attack: </span><br>' + userObject[ajaxIndex].attack + `</h3>`;
    avatarRight.innerHTML += `<h3>`+ '<span>weakness: </span><br>' + userObject[ajaxIndex].weakness + `</h3>`;
}


btnForward.addEventListener('click', prevID);
btnBack.addEventListener('click', nextID);

// Previous id
function prevID() {
    ajaxIndex--;
  
    if (ajaxIndex < 0) {
      ajaxIndex = userObject.length - 1;
    }
   
    loadID(image[ajaxIndex]);
  }
  
  // Next id
  function nextID() {
    ajaxIndex++;
  
    if (ajaxIndex > userObject.length - 1) {
      ajaxIndex = 0;
    }
  
    loadID(image[ajaxIndex]);
  }

  console.log(ajaxIndex);