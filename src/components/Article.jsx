import { format } from "date-fns";

function Article({ id, urls, user, created_at, alt_description }) {
  return (
    <div>
      <div key={id}>
        <img
          src={urls.regular}
          title={alt_description}
          alt={alt_description}
          className="h-52 object-fit object-cover w-full lg:h-80"
        />
        <div className="flex items-center my-1">
          <img
            src={user.profile_image.small}
            alt={user.username}
            className="rounded-full"
          />
          <ul>
            <li className="text-sm">{user.name}</li>
            <li className="text-xs opacity-75">
              {format(new Date(created_at), "MMMM yyyy")}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Article;
