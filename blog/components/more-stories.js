import PostPreview from "../components/post-preview";

export default function MoreStories({ posts }) {
  return (
    <section>
      <div className="grid gap-5 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2">
        {posts.map((post) => (
          <PostPreview
            key={post.id}
            title={post.title}
            coverImage={post.coverImage}
            category={post.category}
            date={post.date}
            author={post.author}
            id={post.id}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
