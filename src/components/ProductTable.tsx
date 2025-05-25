import type { FruitType } from "../types/FruitType";
import ProductCategoryRow from "./table/ProductCategoryRow";
import ProductRow from "./table/ProductRow";

type ProductTableProps = {
  products: FruitType[];
};

export default function ProductTable({ products }: ProductTableProps) {
  const rows: React.ReactElement[] = [];
  let lastCategory = "";
  products.forEach((product) => {
    if (lastCategory !== product.category) {
      rows.push(
        <ProductCategoryRow
          key={product.category}
          category={product.category}
        />
      );
      lastCategory = product.category;
    }
    rows.push(<ProductRow key={product.name} product={product} />);
  });

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prix</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}
