const jsNavIcon = document.getElementById('js--nav-icon');
const jsMainNav = document.getElementById('js--main-nav');
const icon = document.querySelector('#js--nav-icon i');

jsNavIcon.addEventListener('click', () => {
    jsMainNav.classList.toggle('js--main-toogle-no-html');
    if(icon.className == 'ion-close-round') {
        icon.className = 'ion-navicon-round';
    }
    else {
        icon.className = 'ion-close-round';
    }
});


/*
 * waypoint animation 
*/
new Waypoint({
    element: document.querySelector('.js--wp-1'),
    handler: function(direction) {
        document.querySelector('.js--wp-1').classList.add('fadeIn', 'animated');
    },
    offset : '50%'
});

new Waypoint({
    element: document.querySelector('.js--wp-2'),
    handler: function(direction) {
        document.querySelector('.js--wp-2').classList.add('fadeInUp', 'animated');
    },
    offset : '50%'
});

new Waypoint({
    element: document.querySelector('.js--wp-3'),
    handler: function(direction) {
        document.querySelector('.js--wp-3').classList.add('fadeIn', 'animated');
    },
    offset : '50%'
});

new Waypoint({
    element: document.querySelector('.js--wp-4'),
    handler: function(direction) {
        document.querySelector('.js--wp-4').classList.add('fadeIn', 'animated');
    },
    offset : '50%'
});
