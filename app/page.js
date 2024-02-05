import Image from 'next/image';
import Link from 'next/link';
import { FaApple } from 'react-icons/fa';
import { DiAndroid, DiWindows } from "react-icons/di";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10 bg-black text-amber-500">
      <div className="text-4x1 text-amber-500 border-4 border-amber-500 p-5 hover:text-white">
        <h1>CPRG 306: Web Development 2 - Assignments</h1>
      </div>
      
      <div className="mt-5 hover:underline hover:text-white">
      <Link href="/week-2"> Week 2 </Link>
      </div>

      <div className="mt-5 hover:underline hover:text-white">
      <Link href="/week-3"> Week 3 </Link>
      </div>

      <div className="mt-5 hover:underline hover:text-white">
      <Link href="/week-2"> Week 4 </Link>
      </div>

      <div className="mt-5 hover:underline hover:text-white">
      <Link href="/week-2"> Week 5 </Link>
      </div>

      <div className="mt-5 hover:underline hover:text-white">
      <Link href="/week-2"> Week 6 </Link>
      </div>

      <div className="mt-5 hover:underline hover:text-white">
      <Link href="/week-2"> Week 7 </Link>
      </div>

      <div className="mt-5 hover:underline hover:text-white">
      <Link href="/week-2"> Week 8 </Link>
      </div>

      <div className="mt-5 hover:underline hover:text-white">
      <Link href="/week-2"> Week 9 </Link>
      </div>
      
      <div className="flex-grow text-white mt-30 flex-grow items-end">        
      <footer className="text-white mt-5 flex justify-center items-end space-x-8">
        
          <DiWindows /> <FaApple /> <DiAndroid />
        
      </footer>
      </div>
    </main>
  );
}
