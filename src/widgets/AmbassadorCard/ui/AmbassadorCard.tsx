import { TAmbassadorCardProps } from '../types/types';

import calendarIcon from 'src/shared/icons/calendar.svg';
import { Avatar } from 'src/entities/Avatar';

import { formatDateString } from 'src/utils/constants/formatDate';

import style from './AmbassadorCard.module.scss';
import ButtonGrayComponent from '../../../entities/ButtonSecondary/ui/ButtonSecondary';
import ButtonSecondaryComponent from '../../../entities/ButtonSecondary/ui/ButtonSecondary';

const AmbassadorCard: React.FC<TAmbassadorCardProps> = ({ data }) => {
  return (
    <div className={style.cardContainer}>
      {data.avatar && <Avatar link={data.avatar} />}
      <p className={style.name}>{data.surname}</p>
      <p className={style.name}>
        {data.name} {data.secondname}
      </p>
      <p className={style.position}>{data.position}</p>
      <div className={style.dateContainer}>
        <img src={calendarIcon} alt="Calendar" style={{ marginRight: '5px' }} />
        <span className={style.date}>{formatDateString(data.date)}</span>
      </div>
      <div className={style.line}></div>
      <div className={style.btnWrapper}>
        <ButtonSecondaryComponent
          label="Посмотреть"
          width={296}
          height={48}
          onClick={() => console.log(`Посмотреть карточку с id=${data.id}`)}
        />
      </div>
    </div>
  );
};

export default AmbassadorCard;
