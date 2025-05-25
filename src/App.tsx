import { useState } from "react";
import ProductTable from "./components/ProductTable";
import SearchBar from "./components/SearchBar";

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

function App() {
  const [search, setSearch] = useState("");
  const [isStockedOnly, setIsStockedOnly] = useState(false);

  const visibleProducts = PRODUCTS.filter((product) => {
    if (search && !product.name.toLowerCase().includes(search)) {
      return false;
    }

    if (isStockedOnly && !product.stocked) {
      return false;
    }

    return true;
  });

  return (
    <div className="container my-4">
      <SearchBar
        placeholder="Search a product..."
        label="Show only products in stocks"
        search={search}
        onSearch={setSearch}
        isStockedOnly={isStockedOnly}
        onIsStockedOnly={setIsStockedOnly}
      />
      <ProductTable products={visibleProducts} />
    </div>
  );
}

export default App;
