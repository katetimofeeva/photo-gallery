'use strict'

const slides = document.querySelectorAll('.slide'),
film = document.querySelectorAll('.slide'),
names = document.querySelectorAll('h3'),
a= document.querySelectorAll('.container ');


    

for (const slide of slides){
    slide.addEventListener('click', ()=> { 
        removeActiveClasses();

        slide.classList.add('active');
    });
          }
    
function removeActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
});
} 

film[0].style.backgroundImage = `url('https://images.unsplash.com/photo-1607872520826-96b3242a01b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80')`;
film[1].style.backgroundImage = `url('https://images.unsplash.com/photo-1573546549963-06d9169fccc7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')`;
film[2].style.backgroundImage = `url('https://images.unsplash.com/photo-1609741670580-8c1defbcfb91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')`;
film[3].style.backgroundImage = `url('https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMjI2NTcwNXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60')`;
film[4].style.backgroundImage = `url('https://images.unsplash.com/photo-1430933964450-0aefb85717c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')`;

names[0].textContent = 'photo1';
names[1].textContent = 'photo2';
names[2].textContent = 'photo3';
names[3].textContent = 'photo4';
names[4].textContent = 'photo5';

