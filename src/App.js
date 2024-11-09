import "./App.css";
import Wrapper from "./components/Wrapper";

function App() {
  const foodData = [
    {
      food_name: "Spaghetti Carbonara",
      img_url:
        "https://dummyimage.com/300x200/ccc/000.jpg&text=Spaghetti+Carbonara",
      short_description:
        "Classic Italian pasta dish featuring creamy egg sauce, crispy bacon, and Parmesan cheese.",
    },
    {
      food_name: "California Roll",
      img_url:
        "https://dummyimage.com/300x200/ccc/000.jpg&text=California+Roll",
      short_description:
        "A popular sushi roll filled with crab meat, avocado, and cucumber, wrapped in seaweed and rice, perfect for sushi enthusiasts.",
    },
    {
      food_name: "Margherita Pizza",
      img_url:
        "https://dummyimage.com/300x200/ccc/000.jpg&text=Margherita+Pizza",
      short_description:
        "Traditional Italian pizza topped with tomato sauce, fresh mozzarella cheese, basil leaves, and a drizzle of olive oil.",
    },
    {
      food_name: "Chicken Tikka Masala",
      img_url:
        "https://dummyimage.com/300x200/ccc/000.jpg&text=Chicken+Tikka+Masala",
      short_description:
        "A flavorful Indian dish featuring grilled chicken pieces in a creamy, spiced tomato sauce, served with rice or naan bread.",
    },
    {
      food_name: "Caesar Salad",
      img_url: "https://dummyimage.com/300x200/ccc/000.jpg&text=Caesar+Salad",
      short_description:
        "A classic salad made with crisp romaine lettuce, Parmesan cheese, garlic croutons, and creamy Caesar dressing, perfect for a light and refreshing meal.",
    },
  ];
  return (
    <div className="App">
      <>
        <Wrapper foodData={foodData} />
      </>
    </div>
  );
}

export default App;
