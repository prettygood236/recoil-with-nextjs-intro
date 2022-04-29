import Link from 'next/link';

export default function Home() {
  return (
    <div className='wrapper'>
      <Link href='/textcounter'>
        <button>시작하기</button>
      </Link>
      <br />
      <Link href='/todolist'>
        <button>TODOLIST</button>
      </Link>
    </div>
  );
}
