import Chart from 'react-apexcharts'

const BarChart = () => { /*Função anônima/Lambda, estamos atribuindo a ela o NavBar */

  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      }
    },
  };

  const mockData = {
    labels: {
      categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    },
    series: [
      {
        name: "% Sucesso",
        data: [43.6, 67.1, 67.7, 45.6, 71.1]
      }
    ]
  };
  return (
    <Chart /* precisa por na mão aqui e o import, pois no TAB ele não puxa */
      options = {{ ...options, xaxis: mockData.labels}} /*variável entre chaves ele vai ser incorporado no jsx, utilizamos
       o ... como um macete para colocar mais coisas e utilizarmos os labels do mockData*/
       series = {mockData.series} /*uma lista...*/
       type = "bar"
       height = "240"
    /> 
  );
}

export default BarChart;