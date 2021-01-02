export default function Header() {
  return (
    <header>
      <div className="menu">
        <a href="/">
          <img
            className="logo"
            src="https://nextjs-multi-language-site.vercel.app/images/logo.png"
            alt="Site logo"
          />
        </a>
      </div>
      <div className="menu">
        <ul>
          <li className="language-switcher">
            <a href="/en-us">Homepage</a>
          </li>
          <li className="language-switcher">
            <a href="/en-us/about-us">About us</a>
          </li>
          <li>
            <a className="flag-icon flag-icon-fr" href="/fr-fr"></a>
          </li>
        </ul>
      </div>
    </header>
  );
}
