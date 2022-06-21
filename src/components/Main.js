import { useEffect, useState } from "react";

export default function Main() {
  const [meme, setMeme] = useState({
    image: "",
    topText: "",
    bottomText: "",
  });
  const [memesData, setMemesData] = useState({});

  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setMemesData(data);
    }
    getMemes();
  }, []);

  const getRandomImage = () => {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevState) => ({
      ...prevState,
      image: url,
    }));
  };
  const handleChangeText = (event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  };
  return (
    <div className="main-block">
      <div className="inputs">
        <form>
          <input
            onChange={handleChangeText}
            placeholder="Top section"
            className="first-input"
            name="topText"
            value={meme.topText}
          />
        </form>
        <form>
          <input
            onChange={handleChangeText}
            placeholder="Bottom section"
            className="second-input"
            name="bottomText"
            value={meme.bottomText}
          />
        </form>
      </div>
      <button onClick={getRandomImage} className="button">
        Get a new image 🖼
      </button>
      {meme.image && (
        <div className="image-block">
          <img src={meme.image} alt="meme" className="image" />
          <div className="image-text-block">
            <p>{meme.topText}</p>
            <p>{meme.bottomText}</p>
          </div>
        </div>
      )}
    </div>
  );
}
