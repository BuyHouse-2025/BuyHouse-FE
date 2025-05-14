import ReactDOM from "react-dom";
import { Favorite } from "../../../Favorite";
export const FavoriteOverlayPortal = ({ onClose, isActive, closeFavorite }) => {
  return ReactDOM.createPortal(
    <div className="overlay-full" onClick={onClose}>
      <div className={`favorite-overlay-content ${isActive ? "active" : ""}`} onClick={(e) => e.stopPropagation()}>
        <Favorite onClose={onClose} closeFavorite={closeFavorite} />
      </div>
    </div>,
    document.body
  );
};
