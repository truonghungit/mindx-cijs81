export default function ExpenseFilter({ filterValue, onChange }) {
  return (
    <div className="px-4 py-3">
      <div className="d-flex justify-content-between">
        <div>Filter</div>
        <select
          style={{ maxWidth: "120px" }}
          className="form-select"
          value={filterValue.year}
          onChange={(event) =>
            onChange &&
            onChange({
              year: event.target.value,
            })
          }
        >
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
}
