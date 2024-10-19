const panels = document.querySelectorAll('.panel');

const toggleOpen = (e) => {
    console.log('hello');
    e.currentTarget.classList.toggle('open');
    e.currentTarget.classList.toggle('active');
}
panels.forEach(panel => panel.addEventListener('click', toggleOpen));


// original solution by listening to transition properties
// function toggleActive(e) {
//     if (e.propertyName.includes('flex')) {
//         this.classList.toggle('open-active');
//     }
// }

// panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));