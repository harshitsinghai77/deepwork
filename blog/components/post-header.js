import Avatar from "../components/avatar";
import DateFormatter from "../components/date-formatter";
import PostTitle from "../components/post-title";

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <a href={author.linkedin} target="_blank">
          <Avatar name={author.name} picture={author.picture} />
        </a>
      </div>
      <div className="mb-8 lg:mb-16 sm:mx-0">
        <img
          data-src={coverImage}
          srcSet={coverImage}
          loading="lazy"
          layout="responsive"
          alt={`Cover Image for ${title}`}
          height={620}
          width={1240}
        />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        {/* <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div> */}
        <div style={{ color: "#999" }}>
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
}
