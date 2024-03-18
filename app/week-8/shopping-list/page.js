"use client";

import Link from "next/link";
import { useState, useEffect } from "react"; // Import useEffect hook
import { GoArrowRight } from "react-icons/go";
import ItemList from "./item-list";
import itemsData from "./items.json";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas"; // Importing the new MealIdeas component
import { useUserAuth } from "../_utils/auth-context"; // Import the useUserAuth hook

const Page = () => {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(null); // Adding the new state variable selectedItemName
  const { user } = useUserAuth(); // Get the user object from useUserAuth hook

  // Event handler to handle item selection
  const handleItemSelect = (itemName) => {
    // Clean up the item name by removing emojis
    const cleanedItemName = itemName
      .replace(/[\u{1F300}-\u{1FAD6}]/gu, "")
      .split(",")[0]
      .trim();
    setSelectedItemName(cleanedItemName);
  };

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  // Use useEffect to redirect if user is not logged in
  useEffect(() => {
    if (!user) {
      window.location.href = "/week-8"; // Redirect to the landing page
    }
  }, [user]); // Run useEffect whenever user changes

  // Check if the user is not logged in and return null to prevent rendering the shopping list page
  if (!user) {
    return null;
  }

  return (
    <>
      <main className="bg-black min-h-screen p-8 flex">
        {/* Updated layout with flex */}
        <div>
          <h1 className="text-4xl font-bold border-b pb-5 pl-2 pt-5 fixed top-0 w-full bg-black shadow-md">
            Shopping List App 🛒
          </h1>

          <div className="text-white mt-20 mb-5 pl-3">
            Add items to the list<p></p> or click an item to get meal ideas:
          </div>

          <NewItem onAddItem={handleAddItem} />
          {/* Pass items state variable and onItemSelect handler */}
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div>
          {/* Pass selectedItemName as ingredient prop */}
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </main>
      <footer>
        <div className="flex hover:underline mb-10 ml-10">
          <Link href="http://localhost:3000/">Back to Assignments</Link>
          <GoArrowRight className="mt-1 ml-1"></GoArrowRight>
        </div>
      </footer>
    </>
  );
};

export default Page;
