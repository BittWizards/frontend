import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function LoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // @ts-ignore
    window.YaAuthSuggest.init(
      {
        client_id: '8625584df11a4d8b84466d9df0c9872f',
        response_type: 'token',
        redirect_uri: 'https://ambas-1.ddns.net/suggest/token',
      },
      'https://ambas-1.ddns.net',
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
