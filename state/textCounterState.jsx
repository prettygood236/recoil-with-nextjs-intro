import { atom, selector } from 'recoil';

//* Atom
//. Atom은 state(상태)의 일부를 나타낸다. Atoms는 어떤 컴포넌트에서나 읽고 쓸 수 있다.
//. atom의 값을 읽는 컴포넌트들은 암묵적으로 atom을 구독한다.
//. 따라서 atom이 변화하면 atom을 구독하는 모든 컴포넌트들이 재 렌더링 된다.

export const textState = atom({
  key: 'textState', //- unique ID (다른 atom, selector와 구별되는)
  default: '', //- default value (aka initial value)
});

//* Selector
//. Selector는 derived state(파생된 상태)의 일부를 나타낸다.
//. derived state는 state의 변화다.
//. derived state를 어떤 방법으로든 주어진 state를 수정하는 순수 함수에 전달된 state의 결과물로 생각할 수 있다.

export const charCountState = selector({
  key: 'charCountState', //- unique ID (다른 atom, selector와 구별되는)
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});
