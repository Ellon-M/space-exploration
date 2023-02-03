import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import React from 'react';
import Missions from '../components/MissionList';
import store from '../redux/configureStore';

describe('teting', () => {
  test('should ', () => {
    jest.mock('../redux/Missions.js');
    const tree = (
      <React.StrictMode>
        <Provider store={store}>
          <Missions />
        </Provider>
      </React.StrictMode>
    );
    expect(tree).toMatchSnapshot();
  });
});
