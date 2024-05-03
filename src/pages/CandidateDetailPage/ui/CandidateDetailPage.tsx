import { useParams } from 'react-router-dom';

import { useEffect } from 'react';

import { Navbar } from 'src/widgets/NavBar';
import { CandidateQuestionnaire } from 'src/widgets/CandidateQuestionnaire';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { useAppDispatch, useAppSelector } from 'src/app/store/hooks';
import { getAmbassadorById } from 'src/shared/api/ambassadors';
import { selectAmbassadors } from 'src/app/store/reducers/ambassadors/model/ambassadorsSlice';
import { Loader } from 'src/shared/Loader';
import {
  setIsEdit,
  setIsEditable,
} from 'src/app/store/reducers/questionnaire/model/questionnaireSlice';

import style from './CandidateDetailPage.module.scss';

const CandidateDetailPage = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const { ambassador, isLoading } = useAppSelector(selectAmbassadors);

  useEffect(() => {
    dispatch(setIsEdit(false));
    dispatch(setIsEditable(false));
    dispatch(getAmbassadorById(Number(id)));
  }, []);

  return isLoading ? (
    <Loader />
  ) : ambassador ? (
    <div className={style.main}>
      <Navbar links={navbarLinks} />
      <div className={style.content}>
        <CandidateQuestionnaire />
      </div>
    </div>
  ) : (
    <div>Пользоваетель с id ${id} не найдет</div>
  );
};

export default CandidateDetailPage;
