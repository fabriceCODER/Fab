//Add functionalities to the photos
const photo = document.querySelector("#img");

// Add a mouseover event listener to the photo
photo.addEventListener('mouseover', () => {
  photo.classList.add('animate__animated', 'animate__pulse');
});

// Add a mouseout event listener to the photo
photo.addEventListener('mouseout', () => {
  photo.classList.remove('animate__animated', 'animate__pulse');
});


//Downladable CV
const downloadBtn = document.querySelector('#download-btn');

// Add a click event listener to the button
downloadBtn.addEventListener('click', () => {
  const cvUrl = 'path/to/your/cv.pdf';
  const link = document.createElement('a');
  link.href = cvUrl;
  link.setAttribute('download', 'My CV');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

//percentage profeciency of skills
// Get all the skill li elements
const skillItems = document.querySelectorAll('#skills li');

// Loop through each li element
skillItems.forEach(item => {
  // Get the text content of the li element
  const skill = item.textContent.trim();
  // Get the corresponding bar element
  const bar = document.createElement('div');
  bar.classList.add('bar');
  // Get the proficiency percentage for the skill
  let percent = 0;
  switch(skill) {
    case 'HTML5':
      percent = 100;
      break;
    case 'CSS3':
      percent = 85;
      break;
    case 'JavaScript':
      percent = 80;
      break;
    case 'Node js':
      percent = 75;
      break;
    case 'Python':
      percent = 50;
      break;
    case 'React js':
      percent = 40;
      break;
    case 'Tailwind css':
      percent = 30;
      break;
    default:
      break;
  }
  // Set the data-percent attribute of the li element
  item.setAttribute('data-percent', percent);
  // Append the bar element to the li element
  item.appendChild(bar);
});


//submitting form 

let username;
let userEmail;
let userMessage; 

document.getElementById("button").onclick = function(){
 username = document.getElementById("name").value;
 window.alert(username);
}
document.getElementById("button").onclick = function(){
  userEmail = document.getElementById("email").value;
  window.alert(userEmail);
 }

 document.getElementById("button").onclick = function(){
  userMessage = document.getElementById("message").value;
 window.alert(userMessage);
  window.alert("Thank you for messaging me");
 }
// animations about section

const animatedTexts = document.querySelectorAll('.animated-text');

let delay = 0;

animatedTexts.forEach((text) => {
  setTimeout(() => {
    text.classList.add('fade-in-out');
  }, delay);
  
  delay += 500;
});

/*<script>
          const menuToggle = document.querySelector('#menu taggle');
          const projectsMenu = document.querySelector('#Projects menu');
          menuToggle.addEventListener('click', () => {
              const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
              menuToggle.setAttribute('aria-expanded', !expanded);
              projectsMenu.hidden = expanded;
          });
      </script>*/