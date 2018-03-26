'use strict';

if (localStorage.getItem('pastStory')) {
    const storySection = document.getElementById('past-story');
    const button = document.createElement('button');
    button.setAttribute('type', button);
    button.textContent = 'Click Here to read your past story!';
    storySection.appendChild(button);
    button.addEventListener('click', function() {
        const pastStory = JSON.parse(localStorage.getItem('pastStory'));
        console.log(pastStory);
        const p = document.createElement('p');
        const h2 = document.createElement('h2');
        h2.textContent = 'Your past story...';
        p.textContent = pastStory;
        storySection.appendChild(h2);
        storySection.appendChild(p);
        button.remove();
    });
}
