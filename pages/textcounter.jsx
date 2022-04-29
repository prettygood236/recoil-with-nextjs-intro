import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { textState, charCountState } from '../state/textCounterState';

export default function TextCounter() {
  function TextInput() {
    // const [text, setText] = useState('');
    //- useRecoilState()를 사용하여 atom을 읽고 쓸 수 있다.
    //? useState와 달리 페이지를 이동하고 다시 와도 최신의 state를 유지하게 된다.
    const [text, setText] = useRecoilState(textState);

    const onChange = (event) => {
      setText(event.target.value);
    };
    console.log(text);

    return (
      <>
        <input type='text' value={text} onChange={onChange} />
        Echo: {text}
        <br />
      </>
    );
  }

  function CharacterCount() {
    //- useRecoilValue() 훅을 사용해서 charCountState(Selector) 값을 읽을 수 있다.
    const count = useRecoilValue(charCountState);

    return <>Character Count: {count}</>;
  }
  return (
    <div className='wrapper'>
      <TextInput />
      <CharacterCount />
    </div>
  );
}
