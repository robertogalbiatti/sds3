import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import DonutChart from "components/DonutChart";
import React from "react";

function App() {
  return ( /* nunca pode se colocar mais de um elemento na função no React...*/
    /* px = espaçamento na horizontal de 3 unidades e py na vertical*/
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3"> Dashboard de Vendas </h1>
        <div className="row px-3"> 
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de Sucesso (%)</h5>
              <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Todas as vendas</h5>
              <DonutChart />
          </div>
        </div>

        <div className="py-3">
          <h2 className="text-primary"> Vendas </h2>
        </div>

        <DataTable />
      </div>
      <Footer />
    </> /* desta forma tudo fica dentro do Fragment (React)*/
  );
}

export default App;
