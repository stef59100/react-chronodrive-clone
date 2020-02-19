const collapseEls = document.querySelectorAll('.nav-link');

const CollapseDiv = () => {
    collapseEls.addEventListener('click', e => {
        if (e.target.dataset.toggle !== '') {
            let toggleTarget = e.target.dataset.toggle;
            console.log(e.target);
            let targetDiv = document.querySelector(`${toggleTarget}`);
            targetDiv.classList.toggle('show');
        }
    })
}

export { CollapseDiv as default }
