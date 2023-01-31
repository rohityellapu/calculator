const getDOM = query => document.querySelector(query);
const getDOMs = query => document.querySelectorAll(query);

let btns = getDOMs('.inputs');
let c = getDOM('#clear')
let ans = getDOM('#equals')
let input = getDOM('#input')

c.addEventListener('click', (e) => input.value = '');
ans.addEventListener('click', (e) => input.value = eval(input.value));

for (let btn of btns) {
    btn.addEventListener('click', (e) => {
        input.value = input.value + e.target.innerText

    })
}


