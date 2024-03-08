import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import type { FC } from 'react';
import { Avatar } from 'src/entities/Avatar';
import avatar from 'src/shared/icons/userAvatar.png';
import type { INavbarProps } from '../types/types';
import { NavbarLink } from '..';

import style from './NavBar.module.scss';
import { useAppDispatch, useAppSelector } from 'src/app/store/hooks';
import { RootState } from 'src/app/store/store';
import { getNewAmbassadors } from 'src/shared/api/ambassadors';
import { getNewContent } from 'src/shared/api/content';

const Navbar: FC<INavbarProps> = ({ links }) => {
  const count = useAppSelector((state: RootState) => state.notifications);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const socket = new WebSocket('wss://ambassadors.sytes.net/ws/notification/');
    socket.onopen = () => {
      console.log('Connected to WebSocket');
      dispatch(getNewAmbassadors());
      dispatch(getNewContent());
    };
    socket.onmessage = (event) => {
      console.log('Received message from WebSocket:', event.data);
      const message: string = JSON.parse(event.data).message;
      switch(message) {
        case "ambassador":
          dispatch(getNewAmbassadors());
        case "content":
          dispatch(getNewContent());
      };
    };
    return () => {
      console.log('Closed connection to WebSocket');
      socket.close();
    };
  }, [dispatch]);

  const dict: { [key: string]: number } = {
    "/ambassadors": count.ambassadorsNewCount,
    "/content": count.contentNewCount,
    "/merch": count.merchNewCount,
  }


  return (
    <aside className={style.aside}>
      <nav className={style.nav}>
        <ul className={style.list}>
          {links.map((link, index) => ( 
            <NavbarLink
              key={uuidv4()}
              text={link.text}
              to={link.to}
              icon={link.icon}
              notification={dict[link.to]}
            />
          ))}
        </ul>
      </nav>
      <button
        type="button"
        className={style.button}
        aria-label="Открыть меню пользователя"
      >
        <Avatar link={avatar} size="m" />
      </button>
    </aside>
  )
};

export default Navbar;
