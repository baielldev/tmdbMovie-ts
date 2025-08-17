import { Button } from "antd";
import scss from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import SearchPage from "../../pages/searchPage/SearchPage";

const Header = () => {
  const [openSearch, setOpenSearch] = useState<boolean>(false);

  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.headerLogo}>
            <Link to="/">
              <h1>Flex</h1>
            </Link>
          </div>
          <nav>
            <NavLink to="">Фильмы</NavLink>
            <NavLink to="">Сериалы</NavLink>
            <NavLink to="">Подборки</NavLink>
            <NavLink to="">Новинки</NavLink>
            <NavLink to="">Топ</NavLink>
          </nav>
          <div className={scss.headerAction}>
            <SearchOutlined
              onClick={() => setOpenSearch(true)}
              className={scss.search}
            />
            <Button className={scss.btn}>Войти</Button>
          </div>
        </div>
      </div>

      {openSearch && <SearchPage onClose={() => setOpenSearch(false)} />}
    </header>
  );
};

export default Header;
