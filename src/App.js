import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import StudentsList from "./Componets/Students"
import FavoriteStudents from "./Componets/FavStudents";
import { StudentsProvider } from "./Componets/ListShow";
import './index.css'
function App() {

  return (
    <StudentsProvider>
      <div >
        <Router>
          <nav className="bg-[#28282B] text-white p-4 flex justify-center gap-5 " >
            <Link className="hover:text-emerald-400" to="/">Footballer's List</Link> |
            <Link className="hover:text-emerald-400" to="/favorites">  Favorite Footballer's</Link>
          </nav>
          <Routes>
            <Route path="/" element={<StudentsList />} />
            <Route path="/favorites" element={<FavoriteStudents />} />
          </Routes>
        </Router>
      </div>
    </StudentsProvider>
  );
}

export default App;
