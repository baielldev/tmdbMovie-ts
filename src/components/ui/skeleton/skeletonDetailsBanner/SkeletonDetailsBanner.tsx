import Skeleton from "react-loading-skeleton";
import scss from "../../../pages/home/details/detailBanner/DetailBanner.module.scss";

const SkeletonDetailsBanner = () => {
  return (
    <div className={scss.detailBanner}>
      <div className={scss.content}>
        <div className={scss.bannerInfo}>
          <Skeleton
            width={620}
            height={70}
            borderRadius={8}
            baseColor="#1b1b1b"
            highlightColor="#656565"
          />
          <Skeleton
            width={550}
            height={50}
            borderRadius={8}
            baseColor="#1b1b1b"
            highlightColor="#656565"
          />
          <Skeleton
            width={500}
            height={38}
            borderRadius={8}
            baseColor="#1b1b1b"
            highlightColor="#656565"
          />
          <Skeleton
            width={620}
            height={30}
            borderRadius={8}
            baseColor="#1b1b1b"
            highlightColor="#656565"
          />
          <Skeleton
            width={120}
            height={40}
            borderRadius={8}
            baseColor="#1b1b1b"
            highlightColor="#656565"
          />
        </div>
      </div>
    </div>
  );
};

export default SkeletonDetailsBanner;
