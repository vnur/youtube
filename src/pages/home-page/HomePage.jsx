import "./homepage.css";
import { HomePageSidebar } from "./home-page-sidebar/HomePageSidebar";
import { HomePageContentsPoints } from "./home-page-content-points/HomePageContentPoints";
import { HomePageVideoList } from "./home-page-video-list/HomePageVideoList";

export const HomePage = () => {

  return (
    <div className="home-page__container">
      <div className="home-page__sidebar">
        <HomePageSidebar />
      </div>

      <div className="homepage__contentPoints">
        <HomePageContentsPoints />
        <HomePageVideoList />
      </div>

    </div>
  );
};
