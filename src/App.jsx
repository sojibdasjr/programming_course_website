import MainPage from "./Pages/MainPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <h1 className="bg-slate-300 py-6 text-center md:text-5xl text-2xl font-bold">
        Our Course
      </h1>

      <MainPage />
      <ToastContainer />
    </>
  );
}

export default App;
