import { useState } from "react";

import { useTranslation } from "../../Context/TranslationContext";

const initFormValue = {
  name: "",
  amount: 0,
  date: "",
};

export default function AddNewExpenseForm({ onAddNew }) {
  const { translate } = useTranslation();

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
      <div className="card">
        <div className="card-body d-flex justify-content-center px-4 py-3">
          <button
            type="button"
            onClick={() => setIsShowForm(true)}
            className="btn btn-primary text-uppercase"
          >
            {translate("form.addNewExpense")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="card-body">
        <form className="px-4 py-3" onSubmit={handleSubmit}>
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
              {translate("form.add")}
            </button>
            <button
              type="button"
              onClick={() => setIsShowForm(false)}
              className="btn btn-secondary text-uppercase ms-2"
            >
              {" "}
              {translate("form.cancel")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
