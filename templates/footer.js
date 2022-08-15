const arrows = document.querySelectorAll('.arrow--mobile')
const links = document.querySelectorAll('.footer--middle--link__grid')

for (let i = 0; i < arrows.length; i++) {

    const link = links[i];
    if (window.innerWidth < 1439) {
        link.classList.add('hide')
    }

    arrows[i].addEventListener('click', () => {
        link.classList.toggle('hide');
        arrows[i].classList.toggle('arrow--rotate');
})}