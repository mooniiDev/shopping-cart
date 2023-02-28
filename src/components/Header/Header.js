// Components imports
import Logo from './Logo';
import MenuToggle from './MenuToggle';
import Navigation from './Navigation';
import BagIcon from './BagIcon';

function Header() {
  return (
    <header className="flex justify-evenly bg-tropical-indigo py-5 text-white">
      <MenuToggle />
      <Logo />
      <Navigation />
      <BagIcon />
    </header>
  );
}

export default Header;
