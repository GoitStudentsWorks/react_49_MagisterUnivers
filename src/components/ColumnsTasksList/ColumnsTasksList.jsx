import { TaskColumnCard } from 'components/TaskColumnCard/TaskColumnCard';
import { StyledLi, StyledUl } from './ColumnsTasksList.styled';

export const ColumnsTasksList = ({ tasks, categoryId }) => {
  return (
    <StyledUl>
      {(tasks ?? []).map((task, index) => (
        <StyledLi key={index}>
          <TaskColumnCard
            title={task.title}
            priority={task.priority}
            id={task._id}
            categoryId={categoryId}
            object={task}
          />
        </StyledLi>
      ))}
    </StyledUl>
  );
};