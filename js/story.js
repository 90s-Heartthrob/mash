'use strict';

storyApplication = 'This is somthing' + ' and this is somthing else';


const story = document.getElementById('crush');
console.log(story);
story.addEventListener('submit', function () {
    for (let i = 0; i < storyInfo.length; i++ ){
        const ele = document.createElement('this is it');
        ele.src =  storyApplication[i].imageUrl;
        ele.setAttribute('alt', storyInfo[i].name);
        list.appendChild(ele);
    }
});