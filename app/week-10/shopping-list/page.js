"use client";

import Link from "next/link";
import { useState, useEffect } from "react"; // Import useState and useEffect hook
import { GoArrowRight } from "react-icons/go";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas"; // Importing the new MealIdeas component
import { useUserAuth } from "../_utils/auth-context"; // Import the useUserAuth hook
import { getItems, addItem } from "../_services/shopping-list-service"; // Import getItems and addItem functions from the shopping-list-service

const Page = () => {
  const [items, setItems] = useState([]); // Initialize items state with an empty array
  const [selectedItemName, setSelectedItemName] = useState(null); // Initialize selectedItemName state with null
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

  const handleAddItem = async (newItem) => {
    try {
      // Call the addItem function to add the item to the shopping list
      const newItemId = await addItem(user.uid, newItem);
      // Set the id of the new item
      newItem.id = newItemId;
      // Update the state of items to include the new item
      setItems([...items, newItem]);
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  // Create an async function to load items
  const loadItems = async () => {
    try {
      // Call getItems function to fetch shopping list items for the current user
      const userItems = await getItems(user.uid);
      // Set the state of items to the result of getItems
      setItems(userItems);
    } catch (error) {
      console.error('Error loading items:', error);
    }
  };

    // Use useEffect to load items when the component mounts
    useEffect(() => {
      // Call loadItems when the component mounts
      loadItems();
    }, []); // Run useEffect only once when the component mounts
  
    // Use useEffect to redirect if user is not logged in
    useEffect(() => {
      if (!user) {
        window.location.href = "/week-10"; // Redirect to landing page
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
