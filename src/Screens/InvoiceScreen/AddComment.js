import "./style.css";
import "../../Components/NavBar/NavBar.css";
import NavImg from "../../Assets/nav-img.png";

export default function AddComment() {
  return (
    <div className="add-comment-section">
      <p>Internal Comment</p>

      <div className="text-area">
        <div className="nav-img">
          <img src={NavImg} alt="profile-img" />
        </div>

        <textarea placeholder="Add comment"></textarea>
      </div>
    </div>
  );
}
