"use client";

import Link from "next/link";
import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import ItemList from './item-list';
import itemsData from './items.json';
import NewItem from './new-item';

const Page = () => {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="bg-black min-h-screen p-8">
      <div>
        <h1 className="text-4xl font-bold border-b pb-5 pl-2 pt-5 fixed top-0 w-full bg-black shadow-md">Shopping List 🛒</h1>

        <div className="text-white mt-20 mb-5 pl-3">
          Add items to the list: 
        </div>

        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} /> {/* Pass items state variable */}
      </div>

      <div className="flex hover:underline mt-10">
        <Link href="http://localhost:3000/">Back to Assignments</Link>
        <GoArrowRight className="mt-1 ml-1"></GoArrowRight>
      </div>
    </main>
  );
};

export default Page;
