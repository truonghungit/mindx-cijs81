const contacts = [
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
];

const contactListElement = document.getElementById("contact-list");
const btnAdd = document.getElementById("btn-add");
const inputName = document.getElementById("input-name");
const inputPhoneNumber = document.getElementById("input-phone");

const inputSearch = document.getElementById("input-search");
const btnSearch = document.getElementById("btn-search");
const btnDelete = document.getElementById("btn-delete");

function sortContactsByName(contactA, contactB) {
  return contactA.name.localeCompare(contactB.name);
}

function renderContactList(data) {
  const contactListHtml = data.sort(sortContactsByName).map((contact) => {
    return `
  <div class="card">
    <div class="card-body d-flex justify-content-between">
      <div>${contact.name}</div>
      <div>${contact.phoneNumber}</div>
    </div>
  </div>
`;
  });

  contactListElement.innerHTML = contactListHtml;
}

function init() {
  renderContactList(contacts);
}

btnAdd.addEventListener("click", () => {
  const name = inputName.value;
  const phoneNumber = inputPhoneNumber.value;

  contacts.push({ id: contacts.length + 1, name, phoneNumber });

  renderContactList(contacts);
});

btnSearch.addEventListener("click", () => {
  const searchValue = inputSearch.value.toLowerCase();

  const results = contacts.filter((contact) => {
    return (
      contact.name.toLowerCase().includes(searchValue) ||
      contact.phoneNumber.toLowerCase().includes(searchValue)
    );
  });

  renderContactList(results);
});

btnDelete.addEventListener("click", () => {
  const results = [];

  const contactsMap = {
    key: "value",
    name: "Hung",
    "0772 4748 42": {
      name: "Hung",
    },
  };

  debugger;

  contactsMap.name;
  const a = contactsMap["0772 4748 42"];
  // contacts co n item: 100
  contacts.forEach((contact) => {
    if (!contactsMap[contact.phoneNumber]) {
      contactsMap[contact.phoneNumber] = contact;
    }

    // results có m item: 100

    // const isExsiting = results.find((item) => {
    //   return item.phoneNumber === contact.phoneNumber;
    // });

    // if (!isExsiting) {
    //   results.push(contact);
    // }
  });

  console.log("contactsMap", contactsMap);

  const results2 = Object.keys(contactsMap).map((key) => {
    return contactsMap[key];
  });
  console.log("results2", results2);

  renderContactList(results2);
});

init();
