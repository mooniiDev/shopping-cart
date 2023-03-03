import React from 'react';
import { render } from '@testing-library/react';
import Header from '../../components/Header/Header';
import useScreenSize from '../../utils/useScreenSize';

jest.mock('../../utils/useScreenSize');

describe('Header', () => {
  describe('on mobile', () => {
    beforeEach(() => {
      useScreenSize.mockImplementation(() => true);
    });

    it('renders correctly', () => {
      const tree = render(<Header />).container;
      expect(tree).toMatchSnapshot('mobile');
    });
  });

  describe('on desktop', () => {
    beforeEach(() => {
      useScreenSize.mockImplementation(() => false);
    });

    it('renders correctly', () => {
      const tree = render(<Header />).container;
      expect(tree).toMatchSnapshot('desktop');
    });
  });
});
