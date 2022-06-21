export default function Navbar() {
  return (
    <div className="header">
      <div className="header-left">
        <img
          src={require("../icons/troll-face.png")}
          alt="troll-face"
          className="icon-header"
        />
        <p className="header-left-text">Meme Generator</p>
      </div>
      <p className="header-right-text">React course - Project 3</p>
    </div>
  );
}
