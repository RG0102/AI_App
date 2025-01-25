import Store from "./components/Store"
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart"
import storeItems from "./items.json"

function App() {
  return (
    <CartProvider>
      <Store items={storeItems} />
      <Cart />
    </CartProvider>
  );
}

export default App;
