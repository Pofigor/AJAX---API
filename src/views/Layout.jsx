const React = require('react');

function Layout(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="./img/dog.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="styles/main.css" />
        <title>Repeat</title>
      </head>

      <body>
        <div className='nav'>
        <img src="./img/dog.png" alt="logo" className='logo'/>
        {/* <a href="/" className='index'>На главную</a> */}
        <a href="/form" className='toForm'>AJAX</a>
        {/* <a href="/all" className='all'>Все посты</a> */}
        <a href="/dog" className='dog'>API</a>
        <a href="/secret" className='secret'>AdminCheck</a>
        </div>
        <hr />
        {props.children}
      </body>
    </html>
  );
}

module.exports = Layout;
