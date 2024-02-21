import { Outlet } from 'react-router-dom';

import Header from 'src/widgets/Header';

import style from './App.module.scss';

const App = () => {
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
