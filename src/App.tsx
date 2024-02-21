import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"

import logo from "./logo.svg"

import style from "./App.module.scss"

const App = () => (
  <div className={style.App}>
    <header className={style.Appheader}>
      <img src={logo} className={style.Applogo} alt="logo" />
      <Counter />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <Quotes />
      <span>
        <span>Learn </span>
        <a
          className={style.Applink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
        <span>, </span>
        <a
          className={style.Applink}
          href="https://redux.js.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux
        </a>
        <span>, </span>
        <a
          className={style.Applink}
          href="https://redux-toolkit.js.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux Toolkit
        </a>
        <span>, </span>
        <a
          className={style.Applink}
          href="https://react-redux.js.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Redux
        </a>
        ,<span> and </span>
        <a
          className={style.Applink}
          href="https://reselect.js.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Reselect
        </a>
      </span>
    </header>
  </div>
)

export default App
