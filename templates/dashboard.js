const toggleBtn = document.querySelector('.dashboard--nav--toggle--icon');
const linkDescription = document.querySelectorAll('.dashboard--sidebar--links--desc')
const linksBar = document.querySelector('.dashboard--sidebar--links');
const sidebar = document.querySelector('.dashboard--sidebar')


toggleBtn.addEventListener('click', function(){
    for (let i = 0; i < linkDescription.length; i++) {
        linkDescription[i].classList.toggle('show');
        linkDescription[i].classList.toggle('hide');
    }
    linksBar.classList.toggle('.collapse');

    if (window.innerWidth < 1439) {
        sidebar.classList.toggle('hide')
    }
})

