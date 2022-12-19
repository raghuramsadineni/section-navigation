document.addEventListener('scroll', (e: Event) => {
    let i = 0;
    let sectionElements: HTMLCollectionOf<HTMLElement> = document.getElementsByTagName("section")

    while (i < sectionElements.length) {
        let section = sectionElements[i]
        if (section.getBoundingClientRect().top >= 0) {
            break;
        }
        i++;
    }

    if (window.location.hash != '#' + sectionElements[i].id) {
        // @ts-ignore
        history.replaceState(null, '', '#' + sectionElements[i].id);
    }

    let navLinks: HTMLCollectionOf<HTMLAnchorElement> = document.getElementsByTagName('a')
    for (let i = 0; i < navLinks.length; i++) {
        if (navLinks[i].hash == window.location.hash) {
            navLinks[i].classList.add("active");
        } else {
            navLinks[i].classList.remove("active");
        }
    }
})