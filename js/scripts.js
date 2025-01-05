
window.addEventListener('DOMContentLoaded', event => {

    const masthead = document.querySelector(".masthead");
    const images = [
        "url('assets/img/writing1.jpg')",
        "url('assets/img/writing2.jpg')",
        "url('assets/img/design1.jpg')",
        "url('assets/img/art2.jpg')",
        "url('assets/img/art5.jpg')",
        "url('assets/img/fashion1.jpg')",
        "url('assets/img/design2.jpg')",
        "url('assets/img/design3.jpg')",
        "url('assets/img/fashion3.jpg')",
        "url('assets/img/design4.jpg')",
        "url('assets/img/art1.jpg')",
        "url('assets/img/fashion2.jpg')",
    ];

    let currentImageIndex = 0;

    function changeBackgroundImage() {
        const gradient = "linear-gradient(to bottom, rgba(92, 77, 66, 0.8) 0%, rgba(92, 77, 66, 0.8) 100%)";
        masthead.style.backgroundImage = `${gradient}, ${images[currentImageIndex]}`;
        masthead.style.backgroundPosition = "center";
        masthead.style.backgroundRepeat = "no-repeat";
        masthead.style.backgroundAttachment = "scroll";
        masthead.style.backgroundSize = "cover";
        masthead.style.paddingTop = "10rem";
        masthead.style.paddingBottom = "calc(10rem - 4.5rem)";
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    // Change the background image every 2 seconds
    setInterval(changeBackgroundImage, 2000);

    // Navbar shrink
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});
