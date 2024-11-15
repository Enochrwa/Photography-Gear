const mobileLinks = document.querySelectorAll('.mobile-links li');
const hamburger = document.querySelector('.hamb');
const itemsAdded = document.querySelector('.cart .added');
const responsiveNavs = document.querySelector('.nav-res');
const cameraGrid = document.querySelectorAll('.camera-grid .camera-button');
const lensGrid = document.querySelectorAll('.lenses-grid .lens-button');
const tripodGrid = document.querySelectorAll('.tripods-grid .tripod-button');
const lightsGrid = document.querySelectorAll('.lights-grid .lights-button');
const hero = document.querySelector('.hero');
const grids = [cameraGrid, lensGrid, tripodGrid, lightsGrid];

let items = 0;
itemsAdded.textContent = items;

hero.style.backgroundImage = "url('https://images.pexels.com/photos/908430/pexels-photo-908430.jpeg?auto=compress&cs=tinysrgb&w=400')";

// Additional styles for better appearance
hero.style.backgroundSize = "cover";
hero.style.backgroundPosition = "center";
hero.style.padding = "100px 20px";
hero.style.color = "white";
hero.style.textAlign = "center";

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