const toggleBtn = document.querySelector('.dashboard--nav--toggle--icon');
const linkDescription = document.querySelectorAll('.dashboard--sidebar--links--desc')
const linksBar = document.querySelector('.dashboard--sidebar--links');

toggleBtn.addEventListener('click', function(){
    for (let i = 0; i < linkDescription.length; i++) {
        linkDescription[i].classList.toggle('show');
        linkDescription[i].classList.toggle('hide');
    }
    linksBar.classList.toggle('.collapse');
})
