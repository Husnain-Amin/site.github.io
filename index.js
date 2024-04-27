

const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});



fetch('images.json')
    .then(response => response.json())
    .then(data => {
        const gallery = document.querySelector('.gallery');

        data.forEach(image => {
            const thumbnail = document.createElement('div');
            thumbnail.classList.add('thumbnail');

            const img = document.createElement('img');
            img.src = image.src;
            img.alt = image.description;
            img.classList.add('thumbnail-image');

            const description = document.createElement('p');
            description.textContent = image.description;
            description.classList.add('thumbnail-description');

            const link = document.createElement('a');
            link.href = image.src;
            link.target = "_blank";
            link.classList.add('thumbnail-link');
            link.appendChild(img);
            link.appendChild(description);

            thumbnail.appendChild(link);
            gallery.appendChild(thumbnail);
        });
    })
    .catch(error => console.error('Error fetching images:', error));




const menuButton = document.querySelector('.menu-icon');
const navItems = document.querySelector('.nav__items');

menuButton.addEventListener('click', () => {
  navItems.classList.toggle('active');
});


document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('.menu-icon');
  const largeScreenMenu = document.querySelector('.large-screen-menu');


  menuIcon.addEventListener('click', function() {

    largeScreenMenu.classList.toggle('show');
  });
});
