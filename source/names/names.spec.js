import React from 'react';
import TestUtils from 'react-addons-test-utils';
import tape from 'tape';

// Component to test
import Names from './names.container';

// Tests
tape.test('----- React Component Tests: Names -----', (t) => {
  const renderer = TestUtils.createRenderer();

  // Ensure that two names are rendered
  renderer.render(<Names names={['Nate', 'David']} actions={{}} />);
  t.equals(renderer.getRenderOutput().props.children[1].length, 2);

  // Ensure that no names are rendered
  renderer.render(<Names names={[]} actions={{}} />);
  t.equals(renderer.getRenderOutput().props.children[1].length, 0);

  t.end();
});
