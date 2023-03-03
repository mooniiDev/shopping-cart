// Font Awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function ToggleButton() {
  return (
    <button
      type="button"
      className="self-center text-3xl"
      data-testid="toggle-button"
    >
      <FontAwesomeIcon icon={faBars} className="fa-fw" pointerEvents="none" />
    </button>
  );
}

export default ToggleButton;
