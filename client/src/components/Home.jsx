import './Home.css';

function Home() {

  const gifs = [
    {
      src: "https://giphy.com/embed/ZqlvCTNHpqrio",
    },
    {
      src: "https://giphy.com/embed/RJOn3p1xMXDjHiKU5S",
      height: "271"
    },
    {
      src: "https://giphy.com/embed/snEeOh54kCFxe",
      height: "271"
    },
    {
      src: "https://giphy.com/embed/YVgzWgYgrmEdW",
      height: "240"
    },
    {
      src: "https://giphy.com/embed/12PIT4DOj6Tgek",
      height: "361"
    },
    {
      src: "https://giphy.com/embed/bEVKYB487Lqxy",
      height: "264"
    },
    {
      src: "https://giphy.com/embed/jpbnkneOMU9UeXXCfd",
      height: "462"
    },
    {
      src: "https://giphy.com/embed/kBZBlLVlfECvOQAVno",
      height: "361"
    },
    {
      src: "https://giphy.com/embed/lKXEBR8m1jWso",
      height: "360"
    }

  ]
  return (
    <main className="home">
      <div className="gif-collage">
        {gifs.map((gif) => (
          <iframe {...gif} frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
        ))}
      </div>
      <p><a href="https://giphy.com/gifs/h">via GIPHY</a></p>
    </main>
  );
}

export default Home;
