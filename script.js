
//Lasat Updated: 7/8/2024

//darkmode

function toggleDarkMode() {
    const body = document.body;
    const darkModeButton = document.getElementById('dark-mode-button');

    body.classList.toggle('dark-theme');

    if (body.classList.contains('dark-theme')) {
        darkModeButton.innerHTML = '😄 Light Mode';
    } else {
        darkModeButton.innerHTML = '😴 Dark Mode';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-theme');
        document.getElementById('dark-mode-button').innerHTML = '😄 Light Mode';
    }
});

//navbar
document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.navbar');
    navbar.style.top = '80px';
    const navbarNav = navbar.querySelector('.navbar-nav'); 
    navbarNav.style.justifyContent = "center";

    const navLinks = navbarNav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
    link.style.padding = '0.5rem 4rem 0.5rem 2rem';
    link.style.fontWeight = 'bold';
    link.style.fontfamily = 'Arial, sans-serif';
});
});

$(document).ready(function() {
    $(`#bt1`).click(function() {
        $(`fr1`).attr('action', 'mailto:alexsifuentes118@gmail.com?subject=' +
            $(`#tb1`).val() + '&body=' + $(`#tb2`).val());
            $(`fr1`).submit();
        });
    });