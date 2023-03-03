import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../../components/Header/Header';
import useScreenSize from '../../utils/useScreenSize';

jest.mock('../../utils/useScreenSize');

describe('Header', () => {
  describe('on mobile', () => {
    beforeEach(() => {
      useScreenSize.mockImplementation(() => true);
    });

    // Test if a view on mobile matches a snapshot
    it('matches snapshot', () => {
      const tree = render(<Header />).container;
      expect(tree).toMatchSnapshot('mobile');
    });

    // Test if Header renders correct child components
    it('renders toggle button, logo, checkout button and navigation items', () => {
      render(<Header />);

      const toggleButton = screen.getByTestId('toggle-button');
      const logo = screen.getByTestId('logo');
      const navigation = screen.getByTestId('navigation');
      const checkoutButton = screen.getByTestId('checkout-button');

      expect(toggleButton).toBeInTheDocument();
      expect(logo).toBeInTheDocument();
      expect(navigation).toBeInTheDocument();
      expect(checkoutButton).toBeInTheDocument();
    });
  });

  // Test if a view on desktop matches a snapshot
  describe('on desktop', () => {
    beforeEach(() => {
      useScreenSize.mockImplementation(() => false);
    });

    it('matches snapshot', () => {
      const tree = render(<Header />).container;
      expect(tree).toMatchSnapshot('desktop');
    });

    // Test if Header renders correct child components
    it('renders logo, navigation items and checkout button', () => {
      render(<Header />);

      const logo = screen.getByTestId('logo');
      const navigation = screen.getByTestId('navigation');
      const checkoutButton = screen.getByTestId('checkout-button');

      expect(logo).toBeInTheDocument();
      expect(navigation).toBeInTheDocument();
      expect(checkoutButton).toBeInTheDocument();
    });
  });
});
