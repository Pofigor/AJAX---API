const React = require('react');
const Layout = require('./Layout');

function OnePost({ post }) {
  return (
    <Layout>
      {/* <h1>OnePost Page</h1>
      <hr /> */}

      <div className='oneCard'>
      <h2>{post.title}</h2>
      <h5>{post.text}</h5>
      <h5>{post.createdAt.toLocaleDateString()}</h5>
      </div>

    </Layout>
  );
}

module.exports = OnePost;
