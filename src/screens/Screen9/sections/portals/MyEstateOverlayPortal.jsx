import ReactDOM from "react-dom";
import { MyEstate } from "../../../MyEstate";

export const MyEstateOverlayPortal = ({ onClose, isActive, closeMyEstate }) => {
  return ReactDOM.createPortal(
    <div className="overlay-full" onClick={onClose}>
      <div className={`myestate-overlay-content ${isActive ? "active" : ""}`} onClick={(e) => e.stopPropagation()}>
        <MyEstate onClose={onClose} closeMyEstate={closeMyEstate} />
      </div>
    </div>,
    document.body
  );
};
