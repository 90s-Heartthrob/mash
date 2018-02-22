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
        const h3 = document.createElement('h3');
        h3.textContent = 'Your past story...';
        p.textContent = pastStory;
        storySection.appendChild(h3);
        storySection.appendChild(p);
        button.remove();
    })
}
