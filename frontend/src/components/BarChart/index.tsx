import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts'
import { SaleSuccess } from 'types/sale';
import { round } from 'utils/format';
import { BASE_URL } from 'utils/requests';

type SeriesData = {
  name: string,
  data: number[];
}

type ChartData = {
  labels: {
    categories: string[];
  };
  series: SeriesData[];
}

const BarChart = () => { /*Função anônima/Lambda, estamos atribuindo a ela o NavBar */

  const [chartData, setChartData] = useState<ChartData>({
    labels: {
      categories: []
    },
    series: [
      {
        name: "",
        data: []
      }
    ]
  });

  useEffect(() => {
    axios.get(`${BASE_URL}/sales/success-by-seller`).then(response => {
      const data = response.data as SaleSuccess[];
      const myLabels = data.map(x => x.sellerName); ///transformando as coleções para outro tipo de coleção (vide OneNote)
      const mySeries = data.map(x => round(100.0 * x.deals / x.visited, 1));

      setChartData({
        labels: {
          categories: myLabels
        },
        series: [
          {
            name: "% Sucesso",
            data: mySeries
          }
        ]
      });
    });
  }, []);

  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      }
    },
  };

  //Antigo Mock Data
  /*const mockData = {
    labels: {
      categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    },
    series: [
      {
        name: "% Sucesso",
        data: [43.6, 67.1, 67.7, 45.6, 71.1]
      }
    ]
  };*/
  
  return (
    <Chart /* precisa por na mão aqui e o import, pois no TAB ele não puxa */
      options={{ ...options, xaxis: chartData.labels }} /*variável entre chaves ele vai ser incorporado no jsx, utilizamos
       o ... como um macete para colocar mais coisas e utilizarmos os labels do mockData*/
      series={chartData.series} /*uma lista...*/
      type="bar"
      height="240"
    />
  );
}

export default BarChart;