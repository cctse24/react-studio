import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js"

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
    const [cartTotal, addPrice] = useState(0);
    const [items, addItem] = useState([]);

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
    
      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
            <BakeryItem image={item.image}
                        name= {item.name}
                        desc={item.description}
                        price={item.price}
                        cartTotal={cartTotal}
                        addPrice={addPrice}
                        items={items}
                        addItem={addItem}/>
                                        
      ))}

      <div>
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
          {items.map((item) => (
              <p>{item.name}</p>
          ))}
          <p>Total: ${cartTotal}</p>
      </div>
    </div>
  );
}

export default App;
