const form = document.querySelector('.mainForm');
// const pageWrap = document.querySelector('.pageWrap');
const page = document.querySelector('.page');



form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const title = event.target.title.value;
  const text = event.target.text.value;
  const obj = { title, text };
  console.log(title, text);
  const response = await fetch('/form', {
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(obj)
  });
  const result = await response.json();
  console.log(result);
  const newCard = document.createElement('div');
  newCard.classList.add('card');
  newCard.innerHTML = `<div class='card' >
  <h2>${result.title}</h2>
  <h5>${result.text}</h5>
  <button class='postsBtn'>Подробнее</button></a>
  <button id='${result.id}' class='delete'>Удалить</button>
  </div>`
  page.appendChild(newCard);
});

page.addEventListener('click', async (e) => {
  if (e.target.tagName === 'BUTTON') {
    const { id } = e.target;
    const response = await fetch('/delete', {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ id })
    })
    // const result = await response.json()
    // console.log(result);
    // if (result.delete === 'DONE') {
    if (response.status === 200) {
      page.removeChild(e.target.parentNode)
    }
  }
})
