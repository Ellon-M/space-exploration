import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Navbar from '../components/Navbar';

describe('the navigation bar', () => {
  test('renders', () => {
    const tree = renderer.create(
      <Router>
        <Navbar />
      </Router>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders the rockets page at the /Rockets endpoint and is active', () => {
    const { getByText } = render(
      <Router>
        <Navbar />
      </Router>,
    );
    const rockets = getByText(/Rockets/i);
    fireEvent.click(rockets);
    expect(window.location.pathname).toBe('/');
    expect(rockets.classList.contains('active-link')).toBe(true);
  });

  test('renders the missions page at the /Missions endpoint and is active', () => {
    const { getByText } = render(
      <Router>
        <Navbar />
      </Router>,
    );
    const missions = getByText(/Missions/i);
    fireEvent.click(missions);
    expect(window.location.pathname).toBe('/Missions');
    expect(missions.classList.contains('active-link')).toBe(true);
  });

  test('renders the my profile page at the /Profile endpoint and is active', () => {
    const { getByText } = render(
      <Router>
        <Navbar />
      </Router>,
    );
    const myProfile = getByText(/Profile/i);
    fireEvent.click(myProfile);
    expect(window.location.pathname).toBe('/Profile');
    expect(myProfile.classList.contains('active-link')).toBe(true);
  });
});
