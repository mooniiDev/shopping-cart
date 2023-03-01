function Navigation() {
  return (
    <nav>
      <ul className="flex text-xl">
        <li className="flex h-16 w-1/2 justify-center bg-persian-pink">
          <a href="/" className="self-center font-bold">
            HOME
          </a>
        </li>
        <li className="flex h-16 w-1/2 justify-center bg-light-green">
          <a href="/shop" className="self-center font-bold">
            SHOP
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
