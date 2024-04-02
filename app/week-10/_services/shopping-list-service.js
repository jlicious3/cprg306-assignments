import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

// Function to retrieve items for a specific user from Firestore
export const getItems = async (userId) => {
    try {
        // Reference to the items subcollection under the user's document
        const itemsCollection = collection(db, `users/${userId}/items`);

        // Construct a query to get all documents in the items subcollection
        const querySnapshot = await getDocs(itemsCollection);

        // Initialize empty array to store items
        const items = [];

        // Iterate over the documents and add them to the items array
        querySnapshot.forEach((doc) => {
            // Extract data from the document
            const itemData = doc.data();
            // Add document ID to the item data to load data from Firestore
            const item = { id: doc.id, ...itemData };
            // Push and display item to the items array
            items.push(item);
        });

        // Return the array of items
        return items;
    } catch (error) {
        console.error('Error getting items:', error);
        throw error;
    }
};


// addItem function to add a new item to Firestore database
export const addItem = async (userId, newItem) => {
    try {
      // Reference to the items collection for the specified user
      const itemsCollection = collection(db, `users/${userId}/items`);
  
      // Add a new document to the items collection with the newItem data
      const docRef = await addDoc(itemsCollection, newItem);
  
      // Return the ID of the newly created document
      return docRef.id;
    } catch (error) {
      // Handle any errors
      console.error('Error adding item:', error);
      throw error; // Rethrow the error for handling at a higher level  
    }
};


