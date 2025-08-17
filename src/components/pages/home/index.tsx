import scss from "./HomePage.module.scss";
import Popular from "./sections/Popular";
import TopRated from "./sections/TopRated";
import Trending from "./sections/Trending";
import Welcome from "./sections/Welcome";

const HomePage = () => {
  return (
    <div className={scss.homePage}>
      <Welcome />
      <Popular />
      <Trending />
      <TopRated />
    </div>
  );
};

export default HomePage;
