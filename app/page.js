import Image from 'next/image';
import Link from 'next/link';
import { FaApple } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-4x1 text-black-900 border-4 border-red-800 p-5">
        <h1>CPRG 306: Web Development 2 - Assignments</h1>
      </div>
      
     
      
      <div className="text-5xl text-red-900 border-0 items-center">
        <Link href="/week-2">
          <FaApple />
        </Link>
      </div>
    </main>
  );
}
