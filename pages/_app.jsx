import '../styles/globals.css';
import { RecoilRoot } from 'recoil';

// 다음의 기능을 수행하는 todoList.
// todo 아이템 추가
// todo 아이템 수정
// todo 아이템 삭제
// todo 아이템 필터링
// 유용한 통계 표시

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
      <style jsx global>{`
        .wrapper {
          display: flex;
          flex-direction: column;
          height: 100vh;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </RecoilRoot>
  );
}

export default MyApp;
