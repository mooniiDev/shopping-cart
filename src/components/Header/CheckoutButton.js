// Font Awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

function CheckoutButton() {
  return (
    <button type="button" className="flex justify-end text-3xl md:w-52">
      <FontAwesomeIcon
        icon={faShoppingBag}
        className="fa-fw self-center"
        pointerEvents="none"
      />
    </button>
  );
}

export default CheckoutButton;
