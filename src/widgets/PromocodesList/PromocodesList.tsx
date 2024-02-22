import type * as React from 'react'
import style from "./Promocodes.module.scss"
import promocodesconst from './promocodes'

function PromocodesList() {
  return (
    <ul className={style.promocodesList}>
      {promocodesconst.map((item) => (
        <li key={item.id} className={style.promocodesList__element}>
          <h2 className={style.promocodesList__title}>Промокод
            &quot;<span className={style.promocodesList__title}>{item.promocode}</span>&quot;</h2>
          <h3 className={style.promocodesList__ambassador}>Амбассадор :
            <p className={style.promocodesList__fio}>{item.ambassador}</p>
          </h3>
          <div className={style.promocodesList__data}>
            <span className={style.promocodesList__data_day}>{item.day}</span>
            |
            <span className={style.promocodesList__data_time}>{item.time}</span></div>
        </li>
      ))}
    </ul>
  )
}

export default PromocodesList
