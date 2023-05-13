// import { Add, ControlPoint } from '@mui/icons-material';
import ColumnHeadBar from '../../components/ChoosedDay/ColumnHeadBar/ColumnHeadBar';
import styled from 'styled-components';
import { CalendarToolbar } from 'components/CalendarToolbar/CalendarToolbar';
import { useParams } from 'react-router-dom';
import { useCalendar } from 'components/ChoosedMonth/useCalendar/useCalendar';
import moment from 'moment';
import { useEffect } from 'react';
import {useCurrentDate} from '../../redux'
import { parseDate } from '@internationalized/date';
import {getCalendarKey} from '../../utils/calendars'

const ChoosedDayPage = () => {
  const { currentDay: currentDayParam } = useParams();
  const [currentDate, setCurrentDate] = useCurrentDate();
  
  useEffect(() => {
    if (!currentDayParam) return;

    const paramDate = parseDate(currentDayParam);

    setCurrentDate(paramDate)
  }, []);

  const currentDateKey = getCalendarKey({ date: currentDate.toDate()  }); 

  let { title, prevButtonProps, nextButtonProps, daysOfWeekLabels } =
    useCalendar(currentDayParam);
  let startDate = moment(new Date(currentDayParam)).startOf('week')
  let days = Array.from({ length: 7 }, (_, i) => moment(startDate).add(i, 'day').toDate());
  let dayNumbers = days.map((day) => day.getDate());
  let abbreviatedDaysOfWeekLabels = daysOfWeekLabels.map((day) =>
    day.slice(0, 3)
  );
  return (
    <div>
     
      <CalendarToolbar {...{ title, prevButtonProps, nextButtonProps }} />
      <ListDay>
        {days.map((date, index) => {
          const dateKey = getCalendarKey({ date });
          const isSelected = currentDateKey === dateKey;

          return (
          <ItemMonthDay key={index}  >
            <MonthDay>{abbreviatedDaysOfWeekLabels[index]}</MonthDay>

            <TextDay
            className={`${isSelected ? `text-white bg-blue-1 rounded-8` : ''}`}
            >{dayNumbers[index]}</TextDay>
          </ItemMonthDay>
        );
        })}
      </ListDay>
      <ListTask>
        <ColumnHeadBar />
        {/* <ItemTask>
          <Title>To do <ControlPoint/></Title>
          <ButtonTask><Add/>Add task</ButtonTask>
        </ItemTask>
        <ItemTask> 
          <Title>In progress <ControlPoint/></Title> 
          <ButtonTask><Add/> Add task</ButtonTask> 
        </ItemTask> 
        <ItemTask> 
          <Title>Done <ControlPoint/></Title> 
          <ButtonTask><Add/> Add task</ButtonTask> 
        </ItemTask>  */}
      </ListTask>
    </div>
  );
};
export default ChoosedDayPage;
const ListDay = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 122px;
  width: 1087px;
  height: 68px;
  border-radius: 8px;
  padding: 14px 46px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  background: white;
  align-items: center;
  justify-content: center;
  margin-right: auto;
`;
const ItemMonthDay = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;
const MonthDay = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 18/16;
  text-transform: uppercase;
  color: #616161;
`;
const TextDay = styled.strong`
  padding: 4px 8px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  
`;
// const BlueText = styled.strong`
// padding: 4px 8px;
// font-family: 'Inter';
// font-style: normal;
// font-weight: 700;
// font-size: 16px;
// line-height: 18px;
// background: #3E85F3;
// border-radius: 8px;
// color: white;  `
const ListTask = styled.ul`
  display: flex;
  gap: 27px;
  margin-top: 16px;
`;
// const ItemTask = styled.li`
//   display: flex;
//   flex-direction: column;
//   gap: 42px;
//   padding: 20px;
//   background: #ffffff;
//   border: 1px solid rgba(220, 227, 229, 0.8);
//   border-radius: 8px;
// `;
// const Title = styled.h2`
//   font-family: 'Inter';
//   font-style: normal;
//   font-weight: 700;
//   font-size: 20px;
//   line-height: 24px;
//   text-align: center;
//   color: #111111;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
// `;
// const ButtonTask = styled.button`
//   width: 304px;
//   height: 52px;
//   border: 1px dashed #3e85f3;
//   background: #e3f3ff;
//   border-radius: 8px;
//   padding: 16px 104px;
//   font-family: 'Inter';
//   font-weight: 600;
//   font-size: 14px;
//   line-height: 18/14;
//   text-align: center;
//   color: #111111;
//   display: flex;
//   flex-direction: row;
//   gap: 8px;
//   align-items: center;
// `;
