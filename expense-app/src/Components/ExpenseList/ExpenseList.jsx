export default function ExpenseList({ items }) {
  console.log("item ", items);
  return (
    <div className="p-5">
      {items.map((item) => (
        <div key={item.id} className="card mb-2">
          <div className="card-body d-flex justify-content-between">
            <div className="d-flex">
              <div>{item.date}</div>
              <div className="ms-3">{item.name}</div>
            </div>
            <div>{item.amount}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
