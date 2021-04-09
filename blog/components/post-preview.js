import DateFormatter from "../components/date-formatter";
import Link from "next/link";

function truncateString(str, num = 182) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

export default function PostPreview({
  title,
  coverImage,
  date,
  category,
  excerpt,
  author,
  id,
}) {
  return (
    <div>
      <div className="mb-5 bg-white">
        <Link as={`/blog/${id}`} href="/blog/[id]">
          <a aria-label={title}>
            <img
              className="rounded-md max-h-48 h-48 object-cover"
              data-src={coverImage}
              srcSet={coverImage}
              loading="lazy"
              layout="responsive"
              alt={`Cover Image for ${title}`}
            />
          </a>
        </Link>
      </div>
      <h2 className="index-post-title">
        <Link as={`/blog/${id}`} href="/blog/[id]">
          <a className="hover:bg-custom-secondary">{title}</a>
        </Link>
      </h2>
      <div className="flex flex-row justify-between	">
        <div className="index-post-category">{category}</div>
        <div className="index-post-date">
          <DateFormatter dateString={date} />
        </div>
      </div>

      <p className="index-post-excerpt mb-4">{truncateString(excerpt)}</p>
    </div>
  );
}
