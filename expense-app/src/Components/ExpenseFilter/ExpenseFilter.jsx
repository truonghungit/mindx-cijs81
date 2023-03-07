export default function ExpenseFilter({ value, onChange }) {
  return (
    <div className="p-5">
      <div className="d-flex justify-content-between">
        <div>Filter</div>
        <select
          style={{ maxWidth: "120px" }}
          className="form-select"
          value={value}
          onChange={(event) => onChange && onChange(event.target.value)}
        >
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>

        <select
          style={{ maxWidth: "120px" }}
          className="form-select"
          value={value}
          onChange={(event) => onChange && onChange(event.target.value)}
        >
          <option value="2021">Thang 1</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
}
