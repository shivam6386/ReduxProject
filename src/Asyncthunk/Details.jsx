export default function TodoItem({ id, title,price }) {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span>{title}</span>
      <span className="badge bg-primary">{id}</span>
       <span className="badge bg-primary">{price}</span>

    </li>
  );
}
