import React, { useContext } from "react";
import { StudentsContext } from "./ListShow";

const FavoriteStudents = () => {

  const { favorites, removeFromFavorites } = useContext(StudentsContext);

  return (

    <div className="bg-[#36454F] text-center flex flex-col gap-4 p-7">
      <h1 className="mt-3 text-3xl font-bold text-white"> Favorite Footballer's</h1>
      <ul className="flex flex-col gap-5" >
        {favorites.length > 0 ? (
          favorites.map((student) => (
            <li className="border rounded-md border-white p-3 w-2/3 ml-auto mr-auto flex justify-between font-bold bg-[#36454F] text-white" key={student}>
              <span>{student}</span>
              <button  className="bg-red-500 border-none text-white rounded-md p-3 text-xxl "onClick={() => removeFromFavorites(student)}>
                Remove
              </button>
            </li>
          ))
        ) : (
          <p className="no-favorites">No favorite Players added yet.</p>
        )}
      </ul>
    </div>
  );
};

export default FavoriteStudents;
