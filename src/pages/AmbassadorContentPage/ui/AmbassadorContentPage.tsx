import { useParams } from 'react-router-dom';

import Navbar from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { TabsNavBar } from 'src/entities/TabsNavBar';
import { AmbassadorHeaderCard } from 'src/entities/AmbassadorHeaderCard';

import { tabsData } from '../model/data';
import { userCardsData } from 'src/utils/constants/ambassadorCardData';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';

import { formatDateString } from 'src/utils/constants/formatDate';

import habrIcon from 'src/shared/icons/habr.svg';
import vcIcon from 'src/shared/icons/vc.svg';
import youtubeIcon from 'src/shared/icons/youTubeIcon.svg';
import telegramIcon from 'src/shared/icons/telegramIcon.svg';
import linkedinIcon from 'src/shared/icons/linkedinIcon.svg';
import instagramIcon from 'src/shared/icons/instIcon.svg';
import otherSocialIcon from 'src/shared/icons/question-mark-circle.svg';

import style from './AmbassadorContentPage.module.scss';

const AmbassadorContentPage = () => {
  const { id } = useParams();
  const selectedUser = userCardsData.find(user => user.id === id);

  const commonCellStyle = {
    color: '#fff',
    fontFamily: 'YSText',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '1.2',
  };

  const headerCellStyle = {
    color: '#fff',
    fontFamily: 'YSDisplay',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '1.2',
  };

  const getPlatformIcon = (platform: string): JSX.Element => {
    switch (platform) {
      case 'habr':
        return <img src={habrIcon} alt="Habr" />;
      case 'vc':
        return <img src={vcIcon} alt="VC" />;
      case 'youtube':
        return <img src={youtubeIcon} alt="YouTube" />;
      case 'telegram':
        return <img src={telegramIcon} alt="Telegram" />;
      case 'linkedin':
        return <img src={linkedinIcon} alt="LinkedIn" />;
      case 'instagram':
        return <img src={instagramIcon} alt="Instagram" />;
      default:
        return <img src={otherSocialIcon} alt="Other" />;
    }
  };

  const handleRowClick = (index: number) => {
    console.log(`Row ${index + 1} clicked!`);
  };

  return selectedUser ? (
    <div className={style.main}>
      <Navbar links={navbarLinks} />
      <div className={style.content}>
        <TabsNavBar tabs={tabsData} />
        <AmbassadorHeaderCard title="Контент Амбассадора" data={selectedUser} />
        <div className={style.tableWrapper}>
          <Table style={{ width: '100%' }}>
            <TableHead className={style.tableHead}>
              <TableRow className={style.tableRow}>
                <TableCell style={headerCellStyle}>№</TableCell>
                <TableCell style={headerCellStyle}>Дата отчета</TableCell>
                <TableCell style={headerCellStyle}>Ссылка</TableCell>
                <TableCell style={headerCellStyle}>Файлы</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {selectedUser.content.map((row, index) => (
                <TableRow
                  sx={{ cursor: 'pointer' }}
                  key={index}
                  onClick={() => handleRowClick(index)}
                >
                  <TableCell style={commonCellStyle}>{index + 1}</TableCell>
                  <TableCell style={commonCellStyle}>
                    {formatDateString(row.date)}
                  </TableCell>
                  <TableCell style={commonCellStyle}>
                    <div className={style.socialWrapper}>
                      {getPlatformIcon(row.platform)}
                      <span>{row.link}</span>
                    </div>
                  </TableCell>
                  <TableCell style={commonCellStyle}>
                    {row.fileCounter === '0' ? '-' : row.fileCounter}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  ) : (
    <div>Пользоваетель с id ${id} не найден</div>
  );
};

export default AmbassadorContentPage;
