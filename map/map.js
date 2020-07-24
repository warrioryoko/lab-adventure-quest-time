import quests from '../data.js';

const section = document.querySelector('section');

for (let i = 0; i < quests.length; i++) {
    const quest = quests[i];

    const anchor = document.createElement('a');
    anchor.textContent = quest.title;
    anchor.href = '/quest/?id=' + quest.id;

    section.append(anchor);
}

console.log('Map page of The Tale of Derp');