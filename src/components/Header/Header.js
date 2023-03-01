// Components imports
import Logo from './Logo';
import ToggleButton from './ToggleButton';
import Navigation from './Navigation';
import CheckoutButton from './CheckoutButton';

function Header() {
  return (
    <header className="flex justify-evenly bg-tropical-indigo py-5 text-white">
      <MenuToggle />
        <ToggleButton />
        <Logo />
        <CheckoutButton />
      <Navigation />
    </header>
  );
}

export default Header;
