import React, { useContext } from "react";
import { StudentsContext } from "./ListShow";

const StudentsList = () => {
  const { students, favorites, addToFavorites } = useContext(StudentsContext);

  return (
    <div className="bg-[#36454F] text-center flex flex-col gap-4 p-7">
      <h1 className="mt-3 text-3xl font-bold text-white">Footballer's List</h1>
      <ul className="flex flex-col gap-5">
        {students.map((student) => (
          <li className="border rounded-md border-white p-3 w-2/3 ml-auto mr-auto flex justify-between font-bold bg-[#36454F] text-white" key={student}>
            {student}
            <button className="bg-green-500 border-none text-white rounded-md p-3 text-xxl  hover:cursor-pointer hover:disabled:cursor-not-allowed disabled:bg-gray-400"
              onClick={() => addToFavorites(student)}
              disabled={favorites.includes(student)}
            >
              {favorites.includes(student) ? "Added" : "Add to Favorite"}
              
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsList;
