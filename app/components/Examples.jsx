var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>WHere are some example locations to try tout!</p>
      <ol>
        <li>
          <Link to='/?location=Tallahassee'>Tallahassee, FL</Link>
        </li>
        <li>
          <Link to='/?location=Orlando'>Orlando, FL</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
