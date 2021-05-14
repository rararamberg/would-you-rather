import './Home.css';

function Home() {

  const gifs = [
    {
      src: "https://giphy.com/embed/bEVKYB487Lqxy",
      height: "360"
    },
    {
      src: "https://giphy.com/embed/RJOn3p1xMXDjHiKU5S",
      height: "271"
    },
    {
      src: "https://giphy.com/embed/xT0xeseEWv7alfGrDy",
      height: "271"
    },
    {
      src: "https://giphy.com/embed/12PIT4DOj6Tgek",
      height: "240"
    },
    {
      src: "https://giphy.com/embed/YVgzWgYgrmEdW",
      height: "361"
    },
    {
      src: "https://giphy.com/embed/lKXEBR8m1jWso",
      height: "264"
    }
  ]
  console.log(gifs)

  const randomImage = () => {
    const randomNum = Math.floor(Math.random() * (gifs.length - 1));
    return (gifs[randomNum].src) 
  }
  
  return (
    <main className="home">
      <div className="gif-collage">
        {gifs.map((gif) => (
          <iframe {...gif} frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
        ))}    
      </div>
      <iframe className="rando-gif" src={randomImage()}></iframe>
    </main>
  );
}

export default Home;

