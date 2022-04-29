import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../state/todoListState';

// 필터 state를 바꿔주는 컴포넌트
export default function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  // console.log(filter);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <>
      <select value={filter} onChange={updateFilter}>
        <option value='Show All'>All</option>
        <option value='Show Completed'>Completed</option>
        <option value='Show Uncompleted'>Uncompleted</option>
      </select>
    </>
  );
}
