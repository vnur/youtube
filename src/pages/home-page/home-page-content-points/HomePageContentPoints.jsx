import "./home-page-content-points.css";

export const HomePageContentsPoints = () => {
  const homePageContentsPoints = [
    "Music",
    "Game",
    "Radio",
    "Podcasts",
    "Cricket",
    "Gaming",
    "News",
    "Tutorials",
    "Web",
    "Python",
    "Pubg",
    "Music",
    "Game",
    "Radio",
    "Podcasts",
    "Cricket",
    "Gaming",
    "News",
    "Tutorials",
    "Web",
    "Python",
    "Pubg",
  ];

  return (
    <div className="homepagecontentPoints__block">
      {homePageContentsPoints.map((item,index) => {
        return <span key={index} className="homepagecontentPoints__content">{item}</span>;
      })}
    </div>
  );
};
