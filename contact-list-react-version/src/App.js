import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "John",
      phoneNumber: "123 456 789",
    },
    {
      id: 2,
      name: "Bob",
      phoneNumber: "123 456 123",
    },
    {
      id: 3,
      name: "Alic",
      phoneNumber: "123 456 123",
    },
  ]);

  const [displayContacts, setDisplayContacts] = useState(contacts);

  const [contactFormValue, setContactFormValue] = useState({
    name: "",
    phoneNumber: "",
  });

  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    setContactFormValue({
      ...contactFormValue,
      [fieldName]: fieldValue,
    });
  };

  const handleAddNewContact = () => {
    const newContactList = [
      ...contacts,
      {
        ...contactFormValue,
        id: contacts.length + 1,
      },
    ];

    setContacts(newContactList);
    setDisplayContacts(newContactList);
    setContactFormValue({ name: "", phoneNumber: "" });
  };

  const handleSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    const displayContacts = contacts.filter((contact) => {
      return (
        contact.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        contact.phoneNumber.toLowerCase().includes(searchValue.toLowerCase())
      );
    });

    setDisplayContacts([...displayContacts]);
  };

  const sortContactsByName = (contactA, contactB) => {
    return contactA.name.localeCompare(contactB.name);
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-7">
          <div className="row">
            <div className="col-5">
              <input
                type="text"
                id="input-name"
                className="form-control"
                placeholder="Tên"
                name="name"
                value={contactFormValue.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-5">
              <input
                type="text"
                id="input-phone"
                className="form-control"
                placeholder="Điện thoại"
                name="phoneNumber"
                value={contactFormValue.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-2">
              <button
                className="btn btn-primary w-100"
                id="btn-add"
                type="submit"
                onClick={handleAddNewContact}
              >
                Thêm
              </button>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                id="input-search"
                placeholder="Tìm kiếm"
                onChange={handleSearchValueChange}
              />
            </div>
            <div className="col-2">
              <button
                className="btn btn-primary w-100"
                id="btn-search"
                onClick={handleSearch}
              >
                Tìm
              </button>
            </div>
            <div className="col-2">
              <button className="btn btn-primary w-100" id="btn-delete">
                Xóa trùng
              </button>
            </div>
          </div>

          <div className="mt-4" id="contact-list">
            {displayContacts.sort(sortContactsByName).map((contact) => (
              <div className="card">
                <div className="card-body d-flex justify-content-between">
                  <div>{contact.name}</div>
                  <div>{contact.phoneNumber}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
