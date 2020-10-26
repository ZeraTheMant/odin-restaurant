import generateHomeContent from './modules/initial-page-load';
import generateMenuContent from './modules/menu';
import generateContactContent from './modules/contact';

var contentDiv = document.querySelector('#content');

const navbarItemsHolder = document.querySelector('nav ul');
navbarItemsHolder.addEventListener('click', function(e) {
    if(e.target && e.target.nodeName == "LI") {
        contentDiv.innerHTML = '';
        
        if (e.target.id == 'home') {
            contentDiv.appendChild(generateHomeContent());
        } else if (e.target.id == 'menu') {
            contentDiv.appendChild(generateMenuContent());
        } else {
            contentDiv.appendChild(generateContactContent());
        }
    }
});

contentDiv.appendChild(generateHomeContent());