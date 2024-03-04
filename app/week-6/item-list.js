"use client";

import { useState } from "react";
import Item from './item';

const ItemList = ({ items }) => { // Adds the items prop
    const [sortBy, setSortBy] = useState("name"); // Initializes sortBy state variable
    const [activeButton, setActiveButton] = useState("name"); // Initializes activeButton state variable to add underlined effect to the active button

    // Sort the items array based on the sortBy state variable
    const sortedItems = items.slice().sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }
    });

    // Function to handle sorting when sort buttons are clicked
    const handleSortChange = (value) => {
        setSortBy(value);
        setActiveButton(value);
    };

    return (
        <div>
            {/* Sort buttons */}
            <button className={`mt-5 ml-2 p-3 font-bold rounded-lg ${activeButton === "name" ? "underline" : ""}`}
                onClick={() => handleSortChange("name")} 
                style={{ backgroundColor: sortBy === "name" ? "red" : "#f8b500" }} >
                Sort by Name
            </button>
            <button className={`ml-5 p-3 font-bold rounded-lg ${activeButton === "name" ? "" : "underline"}`}
                onClick={() => handleSortChange("category")} 
                style={{ backgroundColor: sortBy === "name" ? "#f8b500" : "red" }} >
                Sort by Category
            </button>
            {/* Rendering the items using the map function */}
            <ul className="flex-wrap w-1/3 pt-5">
                {sortedItems.map(item => (
                    <Item key={item.id} {...item} />
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
