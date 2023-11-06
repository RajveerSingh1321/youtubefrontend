// import logo from './logo.svg';
// import './App.css';
// import TableComponent from "./components/table";


// function App() {
//   return (
//     <div className="App">
//       <TableComponent></TableComponent>
//       <TableComponent></TableComponent>
//       <TableComponent></TableComponent>
//       <TableComponent></TableComponent>
//       <TableComponent></TableComponent>
//       <TableComponent></TableComponent>



//     </div> 
//   );
// }
    


// export default App;
import logo from './logo.svg';
import './App.css';
// import TableComponent from "./components/table";
import{Routes,Route,BrowserRouter}from "react-router-dom";
// import SomeComponent from "./components/somecomponents";
// import HookComponent from './components/hookcomponents';
// import Timebomb from './components/timebomb';
import HomePage from './components/HomePage';
function App() {
  return (
    // <div className="App">
    // <TableComponent></TableComponent>
    // <TableComponent></TableComponent>
    // <TableComponent></TableComponent>
    
    // </div>

    <BrowserRouter>
      <Routes>
        {/* <Route path='/login' element={<TableComponent />}></Route>
        <Route path='/helo' element={<SomeComponent />}></Route>
        <Route path='/hook' element={<HookComponent />}></Route>
        <Route path='/timebomb' element={<Timebomb />}></Route> */}
          <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;