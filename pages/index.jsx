import Link from 'next/link';

export default function Home() {
  return (
    <div className='wrapper'>
      <Link href='/textcounter'>
        <button>μμνκΈ°</button>
      </Link>
      <br />
      <Link href='/todolist'>
        <button>TODOLIST</button>
      </Link>
    </div>
  );
}
