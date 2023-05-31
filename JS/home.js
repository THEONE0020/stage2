window.onscroll = function() {
    const navb=document.querySelector('.logo-na');
    if (window.scrollY == 0) {
        navb.style.backgroundColor = 'transparent'
        navb.style.boxShadow = "none";
        } else {
            navb.style.backgroundColor = 'white'
            navb.style.boxShadow = "0 -6px 10px 5px rgba(0, 0, 0, 0.5)";
        }
};