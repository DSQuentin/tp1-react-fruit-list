import type { FruitType } from "../../types/FruitType";

type ProductRowProps = {
  product: FruitType;
};

export default function ProductRow({ product }: ProductRowProps) {
  const stockedStyle = product.stocked ? undefined : { color: "red" };
  return (
    <tr>
      <td style={stockedStyle}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}
