import Image from 'next/image';
import Link from 'next/link';
import { FaApple } from 'react-icons/fa';
import { DiAndroid, DiWindows } from "react-icons/di";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-5 bg-black text-amber-400">
      <div className="text-4x1 text-amber-400 border-4 border-amber-500 p-4 hover:text-white">
        <h1>CPRG 306: Web Development 2 - Assignments</h1>
      </div>
      
      <div className="mt-5 hover:underline hover:text-white font-mono font-mono">
      <Link href="/week-2"> Week 2 </Link>
      </div>

      <div className="mt-5 hover:underline hover:text-white font-mono">
      <Link href="/week-3"> Week 3 </Link>
      </div>

      <div className="mt-5 hover:underline hover:text-white font-mono">
      <Link href="/week-4"> Week 4 </Link>
      </div>

      <div className="mt-5 hover:underline hover:text-white font-mono">
      <Link href="/week-5"> Week 5 </Link>
      </div>

      <div className="mt-5 hover:underline hover:text-white font-mono">
      <Link href="/week-6"> Week 6 </Link>
      </div>

      <div className="mt-5 hover:underline hover:text-white font-mono">
      <Link href="/week-7"> Week 7 </Link>
      </div>

      <div className="mt-5 hover:underline hover:text-white font-mono">
      <Link href="/week-8"> Week 8 </Link>
      </div>

      <div className="mt-5 hover:underline hover:text-white font-mono">
      <Link href="/week-9"> Week 9 </Link>
      </div>

      <div className="mt-5 hover:underline hover:text-white font-mono">
      <Link href="/week-10"> Week 10 </Link>
      </div>
      
      <div className="flex-grow text-white mt-30 flex-grow items-end">        
      <footer className="text-white mt-5 flex justify-center items-end space-x-8">
        
          <DiWindows /> <FaApple /> <DiAndroid />
          <Image src="/image/sait.png" alt="SAIT Logo" width="100" height="100" />

      </footer>
      </div>
      
    </main>
  );
}
