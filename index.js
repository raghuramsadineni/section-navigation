document.addEventListener('scroll', function (e) {
    var i = 0;
    var sectionElements = document.getElementsByTagName("section");
    while (i < sectionElements.length) {
        var section = sectionElements[i];
        if (section.getBoundingClientRect().top >= 0) {
            break;
        }
        i++;
    }
    if (window.location.hash != '#' + sectionElements[i].id) {
        history.replaceState(null, '', '#' + sectionElements[i].id);
    }
    var navLinks = document.getElementsByTagName('a');
    for (var i_1 = 0; i_1 < navLinks.length; i_1++) {
        if (navLinks[i_1].hash == window.location.hash) {
            navLinks[i_1].classList.add("active");
        }
        else {
            navLinks[i_1].classList.remove("active");
        }
    }
});
