const elements = document.querySelectorAll('.card');

for (let i = 0; i <= elements.length - 1; i++) {
    const numberWrapper = elements[i].querySelector('.number');
    const percent = elements[i].querySelector('.number').getAttribute('data-percent');
    numberWrapper.innerHTML = `<h2>${percent}<span>%</span></h2>`;
    let cardCircle = elements[i].querySelector('.percent svg circle:nth-child(2)');
    cardCircle.style.strokeDashoffset = 'calc(440px - (440px * ' + percent + ') / 100)'
}