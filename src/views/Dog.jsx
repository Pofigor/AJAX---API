const React = require('react');
const Layout = require('./Layout');

function Dog() {
  return (
    <Layout>
      <script defer src='js/dog.js'></script>

      {/* <h1>Dog Page</h1>
      <hr /> */}
      <h4>Генератор собакенов</h4>
      <button className='dogBtn'>Получить собакена</button>
      <div className='divDog'></div>
    </Layout>
  );
}

module.exports = Dog;
