import { atom, selector } from 'recoil';

//* Atom
//. Atoms는 앱 state의 source of truth를 갖는다.
//. todo 리스트에서 source of truth는 todo 아이템을 나타내는 객체로 이루어진 배열이 될 것이다.

export const todoListState = atom({ key: 'todoListState', default: [] });

export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All', //"Show All", "Show Completed" , "Show Uncompleted"
});

//* Selector
//. derived state(파생된 상태)는 다른 데이터에 의존하는 동적인 데이터를 만들 수 있기 때문에 강력한 개념이다.
//. 컴포넌트 관점에서 보면 selector는 atom을 읽을 때 사용하는 같은 훅을 사용해서 읽을 수 있다.
//. 그러나 특정 훅은 writable state (즉, useRecoilState())에서만 작동하는 점을 유의해야 한다.
//. 모든 atom은 writable state지만 selector는 get과 set 속성을 둘 다 가지고 있어야 writable state이다.

// todo 리스트 애플리케이션 맥락에서는 다음과 같은 것들이 derived state로 간주된다.
// 필터링 된 todo 리스트 : 전체 todo 리스트에서 일부 기준에 따라 특정 항목이 필터링 된 새 리스트(예: 이미 완료된 항목 필터링)를 생성되어 파생된다.
// Todo 리스트 통계 : 전체 todo 리스트에서 목록의 총 항목 수, 완료된 항목 수, 완료된 항목의 백분율 같은 리스트의 유용한 속성들을 계산하여 파생된다.

// 필터링 된 리스트를 파생하는 filteredTodoListState selector를 구성한다.
//. filteredTodoListState는 내부적으로 2개의 의존성 todoListFilterState와 todoListState을 추적한다.
//. 둘 중 하나라도 변하면 filteredTodoListState는 재 실행된다.
export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Show Completed':
        return list.filter((item) => item.isComplete);
      case 'Show Uncompleted':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

// 통계 표시를 위한 selector 작성.
export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return {
      totalNum, // todo 항목들의 총개수
      totalCompletedNum, // 완료된 todo 항목들의 총개수
      totalUncompletedNum, // 완료되지 않은 todo 항목들의 총개수
      percentCompleted, // 완료된 항목의 백분율
    };
  },
});
