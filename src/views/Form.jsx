const React = require('react');
const Layout = require('./Layout');

function Form({tasks}) {
  return (
    <Layout>
      <script defer src="js/tasks.js"></script>
      {/* <h1>Form Page</h1>
      <hr /> */}
      <div className='form'>
      <form method="POST" action="/form" className='mainForm'>
        <input name="title" className='title' placeholder="Заголовок..."/>
        <input name="text" className='text' placeholder="Текст..."/>
        <button className='formBtn'>Отправить</button>
      </form>
      </div>

      <div className='pageWrap'>
      <div className='page'>
      {tasks.length
        ? tasks.map((el) => (
          <div key={el.id} className='card' >
            <h2>{el.title}</h2>
            <h5>{el.text}</h5>
            <a href={el.id}><button className='postsBtn'>Подробнее</button></a>
            <button id={el.id} className='delete'>Удалить</button>
          </div>
        ))
        : <div>No Posts in Database</div>}
        </div>
        </div>
    </Layout>
  );
}

module.exports = Form;
