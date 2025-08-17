import scss from "./Footer.module.scss";
import { NavLink } from "react-router-dom";
import {
  YoutubeFilled,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className={scss.footer}>
      <div className="container">
        <div className={scss.top}>
          <div className={scss.logoBlock}>
            <h2 className={scss.logo}>FLEX</h2>
            <p className={scss.description}>
              FLEX — это ваш проводник в мире кино. Мы собрали лучшие фильмы,
              сериалы и подборки для всех вкусов. Следите за новинками и
              открывайте для себя новое кино каждый день!
            </p>
          </div>

          <nav className={scss.nav}>
            <h3>Навигация</h3>
            <NavLink to="">Фильмы</NavLink>
            <NavLink to="">Сериалы</NavLink>
            <NavLink to="">Подборки</NavLink>
            <NavLink to="">Топ</NavLink>
            <NavLink to="">Контакты</NavLink>
          </nav>

          <div className={scss.support}>
            <h3>Поддержка</h3>
            <a href="#">Центр помощи</a>
            <a href="#">Связаться с нами</a>
            <a href="#">Сообщить об ошибке</a>
          </div>

          <div className={scss.socials}>
            <h3>Мы в соцсетях</h3>
            <div className={scss.icons}>
              <a href="">
                <YoutubeFilled />
              </a>
              <a href="">
                <InstagramOutlined />
              </a>
              <a href="">
                <GithubOutlined />
              </a>
            </div>
          </div>
        </div>

        <div className={scss.bottom}>
          <p>© {new Date().getFullYear()} FLEX. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
