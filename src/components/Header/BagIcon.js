// Font Awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

function BagIcon() {
  return (
    <button type="button" className="self-center text-3xl">
      <FontAwesomeIcon
        icon={faBagShopping}
        className="fa-fw"
        pointerEvents="none"
      />
    </button>
  );
}

export default BagIcon;
