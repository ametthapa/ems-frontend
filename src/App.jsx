import "./App.css";
import ListEmployee from "./components/ListEmployee";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import AddEmployee from "./components/AddEmployee";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ListEmployee />}></Route>
          <Route path="/employee" element={<ListEmployee />}></Route>
          <Route path="/employee/addEmployee" element={<AddEmployee />}></Route>
          <Route
            path="/employee/updateEmployee/:id"
            element={<AddEmployee />}
          ></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
