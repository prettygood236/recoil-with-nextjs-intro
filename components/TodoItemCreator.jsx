import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../state/todoListState';

export default function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('');
  //- useSetRecoilState() 훅을 사용하여 todoListState 내용을 업데이트하는 setter 함수에 접근할 수 있다.
  //- 기존 todo 리스트를 기반으로 새 todo 리스트를 만들 수 있도록 setter 함수의 updater 형식을 사용한다.
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      { id: getId(), text: inputValue, isComplete: false },
    ]);
    setInputValue('');
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type='text' value={inputValue} onChange={onChange} />
      <br />
      <button onClick={addItem}>추가하기</button>
    </div>
  );
}

// 고유한 Id 생성을 위한 유틸리티
let id = 0;
function getId() {
  return id++;
}
