const responsiveMenuSection = document.getElementById('responsive-menu');


function openMenu() {
    responsiveMenuSection.style.display = 'block';

}

function closeMenu() {
    responsiveMenuSection.style.display = 'none';

}

window.addEventListener('resize', function () {
    if (this.window.innerWidth > 992) {
        responsiveMenuSection.style.display = 'none';
    }
});