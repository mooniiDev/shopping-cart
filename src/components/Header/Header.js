// Custom hook of monitoring screen size changes
import useScreenSize from '../../utils/useScreenSize';

// Components imports
import Logo from './Logo';
import ToggleButton from './ToggleButton';
import Navigation from './Navigation';
import CheckoutButton from './CheckoutButton';

function Header() {
  const isMobile = useScreenSize('(max-width: 767px)');

  return (
    <header className="bg-tropical-indigo text-white md:p-6">
      {isMobile ? (
        <div className="flex flex-col">
          <div className="flex justify-between p-6">
            <ToggleButton />
            <Logo />
            <CheckoutButton />
          </div>
          <Navigation />
        </div>
      ) : (
        <div className="flex justify-around">
          <Logo />
          <Navigation />
          <CheckoutButton />
        </div>
      )}
    </header>
  );
}

export default Header;
