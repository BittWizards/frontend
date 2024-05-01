import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CURRENT_URL, CLIENT_ID } from 'src/utils/constants/api';
import { useAppDispatch } from 'src/app/store/hooks';

import { getUserToken } from 'src/shared/api/user';
import styles from './LoginPage.module.scss';
import type { TToken } from '../types/types';

export function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!CLIENT_ID) {
      navigate('/');
    }
    // @ts-ignore
    window.YaAuthSuggest.init(
      {
        client_id: `${CLIENT_ID}`,
        response_type: 'token',
        redirect_uri: `${CURRENT_URL}/suggest/token`,
      },
      `${CURRENT_URL}`,
      {
        view: 'button',
        parentId: 'loginContainer',
        buttonView: 'main',
        buttonTheme: 'dark',
        buttonSize: 'm',
        buttonBorderRadius: 10,
      }
    )
      .then(({ handler }: any) => handler())
      .then((data: TToken) => {
        dispatch(getUserToken(data));
        navigate('/');
      })
      .catch((error: any) => console.log('Обработка ошибки', error));
  }, []);

  return (
    <div className={styles.middleContainer}>
      <div id="loginContainer" className={styles.loginContainer} />
    </div>
  );
}
