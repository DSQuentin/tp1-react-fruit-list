type ProductCategoryRowProps = {
  category: string;
};

export default function ProductCategoryRow({
  category,
}: ProductCategoryRowProps) {
  return (
    <tr>
      <td colSpan={2}>
        <strong>{category}</strong>
      </td>
    </tr>
  );
}
