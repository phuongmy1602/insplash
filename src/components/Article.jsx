import { format } from "date-fns"

export default function Article({ id, urls, user, created_at, likes }) {
  return (
    <>
      <div>
        <article key={id}>
          <img
            src={urls.regular}
            alt={user.username}
          />

          <div>
            <article >
              <img
                src={user.profile_image.medium}
                alt={user.username}
              />
              <ul>
                <li>{user.name}</li>
                <li>
                  {format(new Date(created_at), "dd MMMM yyyy")}
                </li>
              </ul>
            </article>

            <article >
              <a
                href={`https://instagram.com/${user.instagram_username}`}
                className="text-sm text-slate-800 opacity-75 underline"
                target="_blank"
                rel="noreferrer"
              >
                {user.instagram_username}
              </a>
            </article>
          </div>
        </article>
      </div>
    </>
  )
}
