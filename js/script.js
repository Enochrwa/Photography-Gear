const mobileLinks = document.querySelectorAll('.mobile-links li');
const hamburger = document.querySelector('.hamb');
const itemsAdded = document.querySelector('.cart .added');
const responsiveNavs = document.querySelector('.nav-res');
const cameraGrid = document.querySelectorAll('.camera-grid .camera-button');
const lensGrid = document.querySelectorAll('.lenses-grid .lens-button');
const tripodGrid = document.querySelectorAll('.tripods-grid .tripod-button');
const lightsGrid = document.querySelectorAll('.lights-grid .lights-button');

const grids = [cameraGrid, lensGrid, tripodGrid, lightsGrid];

let items = 0;
itemsAdded.textContent = items;

grids.forEach((grid) => grid.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.disabled = true;
        btn.textContent = 'Added';
        items += 1;
        btn.style.backgroundColor = "gray";
        itemsAdded.textContent = items;
    })
}));

hamburger.addEventListener('click', () => {
    responsiveNavs.classList.toggle('mobile');
    
})
mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
        responsiveNavs.classList.remove('mobile');
        
    })
})