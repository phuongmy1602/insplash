import { format } from "date-fns";

function Article({ id, urls, user, created_at, alt_description }) {
  return (
    <div key={id} className="card">
      <img src={urls.regular} title={alt_description} alt={alt_description} className="image"/>
      <div className="info">
        <img
          src={user.profile_image.small}
          alt={user.username}
          className="avatar"
        />
        <ul>
          <li className="name">{user.name}</li>
          <li className="time">{format(new Date(created_at), "MMMM yyyy")}</li>
        </ul>
      </div>
    </div>
  );
}
export default Article;
