import { useState } from "react";

export default function AddNewExpenseForm() {
  const [isShowForm, setIsShowForm] = useState(false);

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
      <form className="p-5">
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
