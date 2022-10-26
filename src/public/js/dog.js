const dogBtn = document.querySelector('.dogBtn')
const divDog = document.querySelector('.divDog')



dogBtn.addEventListener('click', async () => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random');
  const result = await response.json();
  const dogImage = `<img src='${result.message}' alt='dog' />`;
  divDog.innerHTML = dogImage;
})
