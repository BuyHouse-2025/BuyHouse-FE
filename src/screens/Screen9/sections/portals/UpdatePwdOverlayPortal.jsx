import ReactDOM from "react-dom";
import { UpdatePwd } from "../../../UpdatePwd";
export const UpdatePwdOverlayPortal = ({ onClose, isActive }) => {
  return ReactDOM.createPortal(
    <div className="overlay-full" onClick={onClose}>
      <div className={`UpdatePwd-overlay-content ${isActive ? "active" : ""}`} onClick={(e) => e.stopPropagation()}>
        <UpdatePwd onClose={onClose} />
      </div>
    </div>,
    document.body
  );
};
