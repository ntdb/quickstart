import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
// import createComponent from 'react-unit';
import tape from 'tape';
import addAssertions from 'extend-tape';
import jsxEquals from 'tape-jsx-equals';
const test = addAssertions(tape, {jsxEquals});

// import '../../source/components/nameList/nameList.scss';

// Component to test
import NameList from '../../source/components/nameList/nameList';

test('----- React Component Tests: NameList -----', (t) => {
  // Shallow rendering: Render React element only *one* level deep
  // const component = createComponent.shallow(<NameList names={['Nate', 'David']} />);

  // Test component props and content
  // t.equal(component.props.className, 'default-class', 'ClassName props of component should equal "share"');
  // t.equal(component.text, 'share', 'Label props of component should be rendered as Button text "share"');

  // Test rendered output
  const renderer = createRenderer();
  renderer.render(<NameList names={['Nate', 'David']} />);
  const result = renderer.getRenderOutput();
  t.jsxEquals(result, (
      <div>
        <h3>Names!</h3>
          <p key="Nate">"Nate"<a>(remove)</a></p>
        )}
        <a>Add Name</a>
      </div>
  ));

  t.end();
});
