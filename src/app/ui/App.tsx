import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

import Header from 'src/widgets/Header';

import { useAppDispatch } from 'src/app/store/hooks';
import { getNewAmbassadors } from 'src/shared/api/ambassadors';
import { getNewContent } from 'src/shared/api/content';

import style from './App.module.scss';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const socket = new WebSocket(
      'wss://ambassadors.sytes.net/ws/notification/'
    );
    socket.onopen = () => {
      dispatch(getNewAmbassadors());
      dispatch(getNewContent());
    };
    socket.onmessage = event => {
      // console.log('Received message from WebSocket:', event.data);
      const { message }: { message: string } = JSON.parse(event.data);
      switch (message) {
        case 'ambassador':
          dispatch(getNewAmbassadors());
          break;
        case 'content':
          dispatch(getNewContent());
          break;
        default:
        // console.warn(`message: ${message} is not implemented yet.`);
      }
    };

    return () => {
      socket.close();
    };
  }, [dispatch]);

  return (
    <div className={style.app}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
