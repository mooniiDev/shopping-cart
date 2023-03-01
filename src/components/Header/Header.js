// Components imports
import Logo from './Logo';
import ToggleButton from './ToggleButton';
import Navigation from './Navigation';
import CheckoutButton from './CheckoutButton';

function Header() {
  return (
    <header className="flex flex-col bg-tropical-indigo text-white">
      <div className="flex justify-evenly py-5">
        <ToggleButton />
        <Logo />
        <CheckoutButton />
      </div>
      <Navigation />
    </header>
  );
}

export default Header;
