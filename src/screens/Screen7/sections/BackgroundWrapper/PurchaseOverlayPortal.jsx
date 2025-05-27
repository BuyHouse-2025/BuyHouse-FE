import ReactDOM from "react-dom";
import { Purchase } from "../../../Purchase/Purchase";
export const PurchaseOverlayPortal = ({ onClose, isActive, aptSeq, onToggle }) => {
  return ReactDOM.createPortal(
    <div className="overlay-full" onClick={onClose}>
      <div
        className={`Purchase-overlay-content ${isActive ? "active" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <Purchase onClose={onClose} aptSeq={aptSeq} onToggle={onToggle}/>
      </div>
    </div>,
    document.body
  );
};
