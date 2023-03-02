function Navigation() {
  return (
    <nav>
      <ul className="flex text-xl md:gap-10">
        <li className="flex h-16 w-1/2 justify-center bg-persian-pink md:h-11 md:bg-opacity-0">
          <a href="/" className="self-center font-bold">
            HOME
          </a>
        </li>
        <li className="flex h-16 w-1/2 justify-center bg-light-green md:h-11 md:bg-opacity-0">
          <a href="/shop" className="self-center font-bold">
            SHOP
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
