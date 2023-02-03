import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import React from 'react';
import Missions from '../components/MissionList';
import store from '../redux/configureStore';

describe('missions', () => {
    test('test if missions render', () => {
        const tree = render(
          <Provider store={store}>
            <Missions />
          </Provider>,
        );
        expect(tree).toMatchSnapshot();
  });
});
