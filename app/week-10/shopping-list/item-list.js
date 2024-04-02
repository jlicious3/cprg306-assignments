"use client";

import { useState } from "react";
import Item from './item';

const ItemList = ({ items, onItemSelect }) => {
    const [sortBy, setSortBy] = useState("name");
    const [activeButton, setActiveButton] = useState("name");

    const sortedItems = items.slice().sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }
    });

    const handleSortChange = (value) => {
        setSortBy(value);
        setActiveButton(value);
    };

    return (
        <div>
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
            <ul className="flex-wrap w-1/3 pt-5">
                {sortedItems.map(item => (
                    <Item key={item.id} {...item} onSelect={onItemSelect} />
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
