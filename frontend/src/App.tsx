import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function App() {
  return ( /* nunca pode se colocar mais de um elemento na função no React...*/
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary"> Olá mundo!</h1>

        <DataTable />
      </div>
      <Footer />
    </> /* desta forma tudo fica dentro do Fragment (React)*/
  );
}

export default App;
