import { useState } from "react";

const initFormValue = {
  name: "",
  amount: 0,
  date: "",
};

export default function AddNewExpenseForm({ onAddNew }) {
  const [isShowForm, setIsShowForm] = useState(false);
  const [formValue, setFormValue] = useState(initFormValue);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onAddNew && typeof onAddNew === "function") {
      onAddNew(formValue);

      setFormValue(initFormValue);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };

  if (!isShowForm) {
    return (
      <div className="d-flex justify-content-center p-5">
        <button
          type="button"
          onClick={() => setIsShowForm(true)}
          className="btn btn-primary text-uppercase"
        >
          Add new expense
        </button>
      </div>
    );
  }

  return (
    <div>
      <form className="p-5" onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter name here"
              name="name"
              value={formValue.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="amount" className="col-sm-2 col-form-label">
            Amount
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control"
              id="amount"
              name="amount"
              value={formValue.amount}
              onChange={handleChange}
              placeholder="Enter amount here"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            Date
          </label>
          <div className="col-sm-10">
            <input
              type="date"
              className="form-control"
              id="name"
              name="date"
              value={formValue.date}
              onChange={handleChange}
              placeholder="dd/mm/yyyy"
            />
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-primary text-uppercase">
            Add
          </button>
          <button
            type="button"
            onClick={() => setIsShowForm(false)}
            className="btn btn-secondary text-uppercase ms-2"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
