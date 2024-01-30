import Image from 'next/image'
import Link from 'next/link'
import { FaApple } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-4x1 text-red-900 border-2 border-red-800 p-10">
        The chicken is yummy?
      </div>
      <div>
        Click the apol
      </div>
      <div className="text-5x1 text-grey-900 border-0 items-center">
        <Link href="/apples">
          <FaApple />
           </Link>
         
      </div>
    </main>
  );
}
