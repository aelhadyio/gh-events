import { string } from 'prop-types';

import './HelpBox.css';

// this is just a comment
// this is another comment but we gonna skip the ci from the comment message by adding [skip ci] to our commit message

function HelpBox({ title, text }) {
  return (
    <article className="help-box">
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

HelpBox.propTypes = {
  title: string,
  text: string,
};

export default HelpBox;
