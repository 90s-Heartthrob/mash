'use strict'

if (localStorage.getItem('pastStory')) {
    const storySection = document.getElementById('past-story');
    const button = document.createElement('button')
    button.setAttribute('type', button)
    button.textContent = 'Click Here to read your past story!';
    storySection.appendChild(button);
    button.addEventListener('click', function() {
        const pastStory = JSON.parse(localStorage.getItem('pastStory'));
        console.log(pastStory);
        const p = document.createElement('p');
        p.textContent = pastStory;
        storySection.appendChild(p);
        button.remove();
    })
}
