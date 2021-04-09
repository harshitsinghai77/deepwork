export default function PostTitle({ children }) {
  return (
    <h1 className="text-custom-text-primary text-6xl xs:text-5xl font-bold tracking-tighter leading-tight leading-none mb-12 text-left">
      {children}
    </h1>
  );
}
