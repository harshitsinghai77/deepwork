import Avatar from "../components/avatar";
import DateFormatter from "../components/date-formatter";
import cn from "classnames";
import Link from "next/link";

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  id,
}) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <Link as={`/blog/${id}`} href="/blog/[id]">
          <a aria-label={title}>
            <img
              className={cn("shadow-small object-contain", {
                "hover:shadow-medium transition-shadow duration-200 max-h-82": id,
              })}
              data-src={coverImage}
              srcSet={coverImage}
              loading="lazy"
              layout="responsive"
              alt={`Cover Image for ${title}`}
            />
          </a>
        </Link>
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:col-gap-16 md:col-gap-8 mb-20 sm:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link as={`/blog/${id}`} href="/blog/[id]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          {/* <Avatar name={author.name} picture={author.picture} /> */}
        </div>
      </div>
    </section>
  );
}
