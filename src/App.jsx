import "./css/main.css";

const imgSrc = "/src/assets/logo.png";
const imgAlt = "Rebehayan";
const h1 = "Rebehayan";

function App() {
  return (
    <>
      <header className="header">
        <h1 className="logo">
          <img src={imgSrc} className="logo" alt={imgAlt} />
          {h1}
        </h1>
        <nav className="gnb">
          <ul>
            <li>
              <a href="">ABOUT</a>
            </li>
            <li>
              <a href="">TOUR</a>
            </li>
            <li>
              <a href="">PRACKAGE</a>
            </li>
            <li>
              <a href="">CONTACT</a>
            </li>
          </ul>
        </nav>
        <button className="btn-book">Book Trip</button>
      </header>
    </>
  );
}

export default App;
