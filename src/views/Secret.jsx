const React = require('react');
const Layout = require('./Layout');

function Secret() {
  return (
    <Layout>
      <h3>Вы вошли в персональный раздел сайта! Поздравляем!</h3>
      <hr />
      <h4>Данный раздел сайта является конфиденциальным. См. адресную строку.</h4>
      <h4>Механизм реализован при помощи генератора случайных чисел, где 1 - Истина, 0 - Ложь.</h4>
      <h4>Для повторной генерации страницы кликните еще раз по ссылке AdminCheck.</h4>

    </Layout>
  );
}

module.exports = Secret;
