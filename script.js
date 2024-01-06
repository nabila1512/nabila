function toggleMenu() {
    const menuLinks = document.querySelector('.menu-links');
    menuLinks.classList.toggle('show-menu');

    const icon = document.querySelector('.hamburger-icon');
    icon.classList.toggle('open');
}
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

document.addEventListener('DOMContentLoaded', function () {
    function addFadeInAnimation() {
      const elementsToAnimate = document.querySelectorAll('.fade-in');
      
      elementsToAnimate.forEach(function (element) {
        element.classList.add('fade-in');
      });
    }
      addFadeInAnimation();
  });
  


