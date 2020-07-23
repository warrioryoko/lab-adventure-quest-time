function makeUser(formData) {
    return {
        name: formData.get('name'),
        class: formData.get('class'),
        hp: 35,
        gold: 0,
        completed: {}
    };
}

const userForm = document.querySelector('form');

userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(userForm);

    const user = makeUser(formData);

    const stringUserData = JSON.stringify(user);
    localStorage.setItem('USER', stringUserData);

    //Sanity check
    console.log(stringUserData);
    console.log(localStorage.getItem('USER'));
});