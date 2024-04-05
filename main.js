const selectNum = document.createElement('select');
selectNum.setAttribute('id', 'select-id');
document.body.appendChild(selectNum);

for (let i = 0; i <= 10; i++) {
    const optionNum = document.createElement('option');
    optionNum.setAttribute('value', i);
    optionNum.innerHTML = i;
    selectNum.appendChild(optionNum);
}

async function getUser() {
    try {
        const selectedValue = selectNum.value;
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${selectedValue}`);
        const data = await response.json();
        console.log(data);
        const result = document.createElement('div');
        result.setAttribute('id', 'div-id');
        result.innerHTML = `the name is ${data.name} the adress is ${data.address.street}`;
        document.body.appendChild(result);
    } catch (err) {
        console.log('Error fetching data:', err);
    }
}

selectNum.addEventListener('change', async function () {
    await getUser();
});
