<<<<<<< HEAD
var nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
    if(window.pageYOffset > 100) {
        nav.classList.add('bg-black', 'shadow');
    } else {
        nav.classList.remove('bg-black', 'shadow');
    }
})
=======
// Skills
$('.skill').waypoint(function () {
    $('.progress .progress-bar').each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
}, {offset: '80%'});
>>>>>>> 56577f698e5d626f73a1a7635b71b03d06f3586f
