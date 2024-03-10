import { useParams } from 'react-router-dom';

import { Navbar } from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { TabsNavBar } from 'src/entities/TabsNavBar';
import { AmbassadorQuestionnaire } from 'src/widgets/AmbassadorQuestionnaire';
import { useAppDispatch, useAppSelector } from 'src/app/store/hooks';
import { useEffect } from 'react';
import { tabsData } from '../model/data';
import { getAmbassadorById } from 'src/shared/api/ambassadors';
import { selectAmbassadors } from 'src/app/store/reducers/ambassadors/model/ambassadorsSlice';
import { Loader } from 'src/shared/Loader';
import {
  setIsEdit,
  setIsEditable,
} from 'src/app/store/reducers/questionnaire/model/questionnaireSlice';

import style from './AmbassadorDetailPage.module.scss';

const AmbassadorDetailPage = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const {ambassador, isLoading} = useAppSelector(selectAmbassadors)

  useEffect(() => {
    dispatch(setIsEdit(false));
    dispatch(setIsEditable(true));
    dispatch(getAmbassadorById(Number(id)))
  }, []);

  return isLoading ? <Loader /> : ambassador ? (
    <div className={style.main}>
      <Navbar links={navbarLinks} />
      <div className={style.content}>
        <TabsNavBar tabs={tabsData} />
        <AmbassadorQuestionnaire />
      </div>
    </div>
  ) : (
    <div>Пользоваетель с id ${id} не найдет</div>
  );
};

export default AmbassadorDetailPage;
