import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import scss from "../../moviePreviewCard/MoviePreviewCard.module.scss";

const SkeletonPreviewCard = () => {
  return (
    <div className={scss.card}>
      <div className={scss.card_list}>
        <div className={scss.card_box}>
          <Skeleton
            height={320}
            width={210}
            borderRadius={10}
            baseColor="#1b1b1b"
            highlightColor="#3a3a3a"
            style={{ marginBottom: "10px" }}
          />
          <div className={scss.card_info}>
            <Skeleton
              height={20}
              width={150}
              borderRadius={8}
              baseColor="#1b1b1b"
              highlightColor="#3a3a3a"
            />
            <Skeleton
              height={16}
              width={90}
              borderRadius={8}
              baseColor="#1b1b1b"
              highlightColor="#3a3a3a"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonPreviewCard;
