import React from "react";

export default function Hobby() {
  const [hobbies, setHobbies] = React.useState([
    {
      id: 1,
      hobby: "📷",
    },
    {
      id: 2,
      hobby: "🎹",
    },
  ]);

  const deleteHobby = (hobbyId) => {
    const updatedhobbies = hobbies.filter((item) => item.id !== hobbyId);
    setHobbies(updatedhobbies);
  };

  return (
    <div>
      <h1>Rate your hobbies !</h1>
      {hobbies.map((item, i) => (
        <li key={item.id}>
          I
          <select>
            <option>likes</option>
            <option>loves</option>
          </select>
          {item.hobby}
          <button onClick={() => deleteHobby(item.id)}>X</button>
        </li>
      ))}
    </div>
  );
}
