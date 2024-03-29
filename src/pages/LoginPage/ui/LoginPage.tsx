import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL, CLIENT_ID } from 'src/utils/constants/api';

export function LoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!CLIENT_ID) {
      navigate('/');
    }
    // @ts-ignore
    window.YaAuthSuggest.init(
      {
        client_id: `${CLIENT_ID}`,
        response_type: 'token',
        redirect_uri: `${BASE_URL}/suggest/token`,
      },
      `${BASE_URL}`,
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
      .then((data: any) => {
        localStorage.setItem('token', data);
        navigate('/');
      })
      .catch((error: any) => console.log('Обработка ошибки', error));
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div id="loginContainer" style={{ width: 300 }}></div>
    </div>
  );
}
