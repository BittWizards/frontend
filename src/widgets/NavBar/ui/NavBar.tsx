import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import type { FC } from 'react';
import { Avatar } from 'src/entities/Avatar';
import avatar from 'src/shared/icons/userAvatar.png';
import type { INavbarProps } from '../types/types';
import { NavbarLink } from '..';

import style from './NavBar.module.scss';

const Navbar: FC<INavbarProps> = ({ links }) => {
  const [notification, setNotification] = useState<any>(null);

  useEffect(() => {
    // Подключение к вебсокету здесь
    const socket = new WebSocket('wss://ambas-1.ddns.net/ws/notification/');
    socket.onopen = () => {
      console.log('Connected to WebSocket');
    };
    // Обработка данных из вебсокета
    socket.onmessage = (event) => {
      console.log('Received message from WebSocket:', event.data);
      const message = JSON.parse(event.data).message
      const fetchData = async () => {
        try {
          const response = await fetch('https://ambas-1.ddns.net/api/v1/' + message)
          const jsonData: any[] = await response.json()
          console.log(jsonData.length)
          setNotification(jsonData.length)
        } catch (error) {
          console.error('Ошибка при получении данных:', error)
        }
      }
      fetchData()
    };
    // Закрытие вебсокета при размонтировании компонента
    return () => {
      console.log('Closed connection to WebSocket');
      socket.close();
    };
  }, []);


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
              notification={notification}
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
