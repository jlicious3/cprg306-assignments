import Image from 'next/image';
import Link from 'next/link';
import { FaApple } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10 bg-black text-white">
      <div className="text-4x1 text-white border-4 border-red-800 p-5">
        <h1>CPRG 306: Web Development 2 - Assignments</h1>
      </div>
      
      <div className="mt-5">
        Click the Apple to go to Week 2
      </div>
      
      <div className="text-4xl mt-5">
        <Link href="/week-2">
          <FaApple />
        </Link>
      </div>
    </main>
  );
}
