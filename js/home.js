'use strict';

if (localStorage.getItem('pastStory')) {
    const storySection = document.getElementById('past-story');

    /*
        Instead of dynamically creating this button, let's put it in our HTML
        then toggle its event listener/visibility (via a class with css)
    */
    const button = document.createElement('button');
    button.setAttribute('type', button);
    button.textContent = 'Click Here to read your past story!';
    storySection.appendChild(button);

    button.addEventListener('click', function() {
        /*
            Same with the story text - 
            since we know what elements we need on the page, we can put them in our html
            and update their content using JS
            unlike with our old cookie tables - we didn't necessarily know how many elements we needed
            (because we wanted the ability to add new stores)
        */
        const pastStory = JSON.parse(localStorage.getItem('pastStory'));
        const p = document.createElement('p');
        const h2 = document.createElement('h2');
        h2.textContent = 'Your past story...';
        p.textContent = pastStory;
        storySection.appendChild(h2);
        storySection.appendChild(p);
        button.remove();
    });
}
