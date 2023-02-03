import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import store from '../redux/configureStore';
import Rockets from '../components/Rockets';
import rocketSlice, { reserve } from '../redux/rockets/rockets';

describe('rockets', () => {
  test('component renders', () => {
    const tree = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('reserve button toggles the state', () => {
    const state = {
      rockets: [
        {
          id: '1', name: 'A', reserved: false,
        },
        {
          id: '2', name: 'B', reserved: false,
        },
        {
          id: '3', name: 'C', reserved: false,
        },
      ],
    };

    const action = {
      type: reserve.type,
      payload: '2',
    };

    const expectedState = [
      {
        id: '1', name: 'A', reserved: false,
      },
      {
        id: '2', name: 'B', reserved: true,
      },
      {
        id: '3', name: 'C', reserved: false,
      },
    ];

    const result = rocketSlice(state, action);
    expect(result).toEqual(expectedState);
  });
});
