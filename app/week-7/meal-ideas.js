import { useEffect, useState } from "react";

const MealIdeas = ({ ingredient }) => {
    const [meals, setMeals] = useState([]);
    const [error, setError] = useState(null);

    const fetchMealIdeas = async (ingredient) => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            
            const data = await response.json();
            if (!data.meals) {
                // If data.meals is null or undefined, display an error message
                setError(`No meals found with ${ingredient}`);
                return [];
            }
            // Reset error if meals are found
            setError(null);
            // Map over data.meals and return an array of meal objects
            return data.meals.map(meal => ({
                id: meal.idMeal,
                name: meal.strMeal,
                image: meal.strMealThumb
            }));
        } catch (error) {
            console.error(error);
            setError('Error fetching meal ideas');
            return [];
        }
    };
    

    const loadMealIdeas = async () => {
        const fetchedMeals = await fetchMealIdeas(ingredient);
        setMeals(fetchedMeals);
    };

    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        }
    }, [ingredient]);

    const handleListClick = () => {
        setListClicked(true);
    };

    return (
        <div className="mt-20 ml-10">
            <h1 className="font-bold underline">Meal Ideas</h1> <div className="italic text-xs mb-5">from www.themealdb.com</div>
            {error && <p>{error}</p>}
            {meals.length > 0 && (
                <>
                    <h2>Here are some meal ideas with {ingredient}:</h2>
                    <br></br>
                    <ul onClick={handleListClick}>
                        {meals.map(meal => (
                            <li key={meal.id}>{meal.name}</li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default MealIdeas;
