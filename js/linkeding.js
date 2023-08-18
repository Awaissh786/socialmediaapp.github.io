const nav_profile_img = document.querySelector('.nav-profile-img');
const Profile_menu = document.querySelector('#profilemenu');

nav_profile_img.addEventListener('click', () => {
    Profile_menu.classList.toggle('open-menu');
})