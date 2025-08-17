import { useEffect, useRef, useState, type FC } from "react";
import scss from "./SearchPage.module.scss";
import { FiSearch, FiX } from "react-icons/fi";
import { useGetSearchQuery } from "../../../api/search";
import MoviePreviewCard from "../../ui/moviePreviewCard/MoviePreviewCard";

interface IProps {
  mediaType?: "movie" | "tv";
  onClose: () => void;
}

const SearchPage: FC<IProps> = ({ onClose }) => {
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const { data, isPending } = useGetSearchQuery(value);

  const handleClearSearch = () => {
    setValue("");
  };

  const handleClose = () => {
    setTimeout(() => {
      onClose();
    }, 100);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className={scss.searchPage}>
      <div className="container">
        <div className={scss.title}>
          <h1>Поиск</h1>
          <FiX onClick={handleClose} className={scss.closeSearch} size={24} />
        </div>

        <div className={scss.content}>
          <div className={scss.searchBox}>
            <FiSearch className={scss.searchIcon} size={24} />
            <input
              ref={inputRef}
              type="text"
              className={scss.searchInput}
              placeholder="Название фильма/сериала"
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
            {value && (
              <button
                type="button"
                className={scss.clearButton}
                onClick={handleClearSearch}
                aria-label="Очистить поиск"
              >
                <FiX size={24} />
              </button>
            )}
          </div>
        </div>

        <div className={scss.resultsSearch}>
          {value.trim() !== "" && (
            <>
              {isPending && (
                <div className={scss.pendingLoader}>
                  <span className={scss.loader}></span>
                  <p>Поиск...</p>
                </div>
              )}
              {!isPending &&
                Array.isArray(data?.results) &&
                data.results.length === 0 && (
                  <p className={scss.notFound}>Ничего не найдено!</p>
                )}
              {!isPending &&
                Array.isArray(data?.results) &&
                data.results.length > 0 && (
                  <>
                    {data.results
                      .filter(
                        (item) =>
                          item.media_type === "movie" ||
                          item.media_type === "tv"
                      )
                      .map((item) => (
                        <MoviePreviewCard
                          key={item.id}
                          item={item}
                          mediaType={item.media_type}
                          onClose={onClose}
                        />
                      ))}
                  </>
                )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
