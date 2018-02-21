'use strict'

if (localStorage.getItem('pastStory')) {
    const pastStory = JSON.parse(localStorage.getItem('pastStory'));
    console.log(pastStory);
    const storySection = document.getElementById('past-story');
    const button = document.createElement('button')
    button.setAttribute('type', button)
    button.textContent = 'Click Here!';
    storySection.appendChild(button);
}