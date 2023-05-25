import React, { FC } from "react";
import s from "./SideBar.module.scss";

import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";
import Translate from "../Translate/Translate";

interface IMenuProps {
  menuActive: boolean;
  setMenuActive: (active: boolean) => void;
}

const Menu: FC<IMenuProps> = ({ menuActive, setMenuActive }) => {
  // Чтобы получить информацию о текущем маршруте
  const { pathname } = useRouter();
  return (
    <div
      className={cn(s.menu, { [s.active]: menuActive })}
      onClick={() => setMenuActive(!menuActive)}
    >
      <div className={s.blur}></div>

      <div className={s.menu__content} onClick={(e) => e.stopPropagation()}>
        <header className={s.menu__header}>
          <h2>Menu</h2>
          <Translate />
        </header>
        {pathname === "/" ? (
          <ul className={s.menu__list}>
            <li>
              <a href="#" onClick={() => setMenuActive(!menuActive)}>
                Главная
              </a>
            </li>
            <li>
              <a href="#categories" onClick={() => setMenuActive(!menuActive)}>
                Курсы
              </a>
            </li>
            <li>
              <a
                href="#recommendations"
                onClick={() => setMenuActive(!menuActive)}
              >
                Рекомендации
              </a>
            </li>
            <li>
              <a href="#contacts" onClick={() => setMenuActive(!menuActive)}>
                Контакты
              </a>
            </li>
          </ul>
        ) : (
          <ul className={s.menu__list}>
            <li>
              <Link href="/" onClick={() => setMenuActive(!menuActive)}>
                Главная
              </Link>
            </li>
            <li>
              <Link
                href="/#categories"
                onClick={() => setMenuActive(!menuActive)}
              >
                Курсы
              </Link>
            </li>
            <li>
              <Link
                href="/#recommendations"
                onClick={() => setMenuActive(!menuActive)}
              >
                Рекомендации
              </Link>
            </li>
            <li>
              <Link
                href="/#contacts"
                onClick={() => setMenuActive(!menuActive)}
              >
                Контакты
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Menu;