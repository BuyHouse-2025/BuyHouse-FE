import ReactDOM from "react-dom";
import { UpdateMemberInfo } from "../../../UpdateMemberInfo";
export const UpdateMemberInfoOverlayPortal = ({ onClose, isActive }) => {
  return ReactDOM.createPortal(
    <div className="overlay-full" onClick={onClose}>
      <div
        className={`UpdateMemberInfo-overlay-content ${isActive ? "active" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <UpdateMemberInfo onClose={onClose} />
      </div>
    </div>,
    document.body
  );
};
