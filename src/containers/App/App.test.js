import {
  cleanup,
  render,
  fireEvent,
  waitForDomChange
} from '@testing-library/react';
import React from 'react';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import reducer from '../../store/reducer';
import { useAuth0 } from '../../react-auth0-wrapper';
import App from './App';

jest.mock('../../components/Footer/Footer');
Footer.mockImplementation(() => <div>Footer</div>);

jest.mock('../../components/NavBar/NavBar');
NavBar.mockImplementation(() => <div>NavBar</div>);

jest.mock('../../react-auth0-wrapper');

describe('App', () => {
  beforeEach(() => {
    fetch.mockResponseOnce(JSON.stringify({ data: { message: 'baz' } }));
  });

  afterEach(() => {
    fetch.resetMocks();
    cleanup();
  });

  it('loading', () => {
    useAuth0.mockImplementation(() => ({
      loading: true
    }));
    const feature = { active: jest.fn() };

    const { container } = render(<App feature={feature} reducer={reducer} />);

    expect(container).toMatchSnapshot();
  });

  it('unauthenticated user', () => {
    useAuth0.mockImplementation(() => ({
      isAuthenticated: false,
      loading: false
    }));
    const feature = { active: jest.fn() };

    const { container } = render(<App feature={feature} reducer={reducer} />);

    expect(container).toMatchSnapshot();
  });

  it('pick your own linefeed', () => {
    useAuth0.mockImplementation(() => ({
      isAuthenticated: false,
      loading: false
    }));
    const feature = { active: jest.fn() };
    const mockReducer = jest.fn((state, action) => reducer(state, action));

    const { getByTestId } = render(
      <App feature={feature} reducer={mockReducer} />
    );

    fireEvent.click(getByTestId('custom'));
    expect(mockReducer.mock.calls).toMatchSnapshot();
  });

  it('generate tweetstorm and dismiss notification', async () => {
    fetch.mockResponseOnce(JSON.stringify({ data: { message: 'qux' } })); // INFO: adding a second response
    useAuth0.mockImplementation(() => ({
      isAuthenticated: true,
      loading: false
    }));
    const feature = { active: jest.fn() };

    const { container, getByTestId } = render(
      <App feature={feature} reducer={reducer} />
    );
    fireEvent.change(getByTestId('source'), { target: { value: 'foo' } });
    fireEvent.change(getByTestId('hashtags'), { target: { value: '#bar' } });
    await waitForDomChange();
    fireEvent.click(getByTestId('tweet'));
    await waitForDomChange();
    fireEvent.click(getByTestId('dismiss'));

    expect(container).toMatchSnapshot();
  });
});
