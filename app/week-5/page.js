import Link from "next/link";
import ItemList from './item-list';
import { GoArrowRight } from "react-icons/go";

const Page = () => {
  return (
    <main className="bg-black min-h-screen p-8">
    <div>
      <h1 className="text-4xl font-bold border-b pb-5 pl-2 pt-5 fixed top-0 w-full bg-black shadow-md">Shopping List 🛒</h1>
      <ItemList />
    </div>

      
    <div className="flex hover:underline mt-10">
        <Link href="http://localhost:3000/">Back to Assignments</Link>
        <GoArrowRight className="mt-1 ml-1"></GoArrowRight>
    </div>
    </main>
  );
};

export default Page;
