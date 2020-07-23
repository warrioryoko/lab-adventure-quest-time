export function renderQuestSection(quest) {
    const questSection = document.createElement('section');
    const questDiv = document.createElement('div');
    questDiv.textContent = quest.title;

    const questImg = document.createElement('img');
    questImg.src = quest.image;

    const questForm = document.createElement('form');
    const questDescription = document.createElement('div');
    questDescription.textContent = quest.description;
    questForm.append(questDescription);

    for (let i = 0; i < quest.choices.length; i++) {
        const questLabel = document.createElement('label');
        const questLabelDiv = document.createElement('div');
        const questChoice = quest.choices[i];

        questLabelDiv.textContent = questChoice.description;
        const input = document.createElement('input');

        input.type = 'radio';
        input.value = questChoice.id;
        input.name = 'choices';

        questLabel.append(questLabelDiv, input);
        questForm.append(questLabel);
    }

    const button = document.createElement('button');

    button.textContent = 'Submit';

    questForm.append(button);
    questSection.append(questDiv, questImg, questForm);
    return questSection;
}

// export function findById(someArray, someId) {
//     return Array.find(i => i.id === id);
// }

//Let's try this instead?
export function findById(items, id) {
    for (let i = 0; i < items.length; i++) {
        const item = items[i];

        if (item.id === id) {
            return item;
        }
    }

    return null;
}