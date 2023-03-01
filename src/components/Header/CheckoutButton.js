// Font Awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

function CheckoutButton() {
  return (
    <button type="button" className="self-center text-3xl">
      <FontAwesomeIcon
        icon={faShoppingBag}
        className="fa-fw"
        pointerEvents="none"
      />
    </button>
  );
}

export default CheckoutButton;
