var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>
        This is a paragraph.
      </p>
    <p>
      I used these tools:
    </p>
    <ol>
      <li>
        React
      </li>
      <li>
        webpack
      </li>
    </ol>
    </div>
  )
};

module.exports = About;
