// Font Awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function MenuToggle() {
  return (
    <div className="flex items-center">
      <button type="button" className="self-center text-3xl">
        <FontAwesomeIcon icon={faBars} className="fa-fw" pointerEvents="none" />
      </button>
    </div>
  );
}

export default MenuToggle;
