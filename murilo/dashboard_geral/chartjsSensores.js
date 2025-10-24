Chart.register(window["chartjs-plugin-annotation"]);
const limiteExplosivo = 1.9;
var x = 0;

while(x < 12){

  x++;

  const GraphDiaSensor = document.getElementById(`GraficoDiaSensor${x}`);
  const GraphSemanaSensor = document.getElementById(`GraficoSemanaSensor${x}`);
  const GraphMesSensor = document.getElementById(`GraficoMesSensor${x}`);

  new Chart((GraphDiaSensor), {

  type: "line",
  data: {

    labels: [

      '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00'
      , '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
      , '21:00', '22:00', '23:00'

    ],
    datasets: [

      {

        label: "Média por horário",
        data: [

          0.05, 0.06, 0.07, 0.8, 0.1, 0.3, 0.2, 0.13, 0.5, 0.1, 0.1, 0.8,
          1.8, 0.2, 0.5, 0.22, 0.23, 0.24, 0.25, 0.26, 0.27, 0.28, 0.29, 0.3

        ],
        backgroundColor: "#1f77b4",
        borderWidth: 3,
        borderColor: "#1f77b4",

      }

    ],

  },
  options: {

    scales: {

      y: {

        title: {

          display: true,
          text: "Concentração de GLP (%)",
          color: "#555",
          font: { size: 12, weight: "600" },
          padding: { bottom: 8 },

        },
        beginAtZero: true,
      },
      x: {

        title: {

          display: true,
          text: "Hora do dia (0–23)",
          color: "#555",
          font: { size: 12, weight: "600" },
          padding: { top: 8 }

        },
        ticks: {

          font: {

            weight: "bold"

          },
        },
      },
    },

    plugins: {

      annotation: {

        drawtime: "afterdraw",
        annotations: {

          linhaLimite: {

            type: "line",
            yMin: limiteExplosivo,
            yMax: limiteExplosivo,
            borderWidth: 3,
            borderColor: "#ff0000",
            borderDash: [8, 4],
            label: {

              display: false,
              content: "Valor limítrofe de explosividade",
              position: "end",
              backgroundColor: "rgba(255,0,0,0.65)",
              color: "white",
              padding: 6,
              borderRadius: 6,
              font: {

                weight: "bold",

              },

            },
            enter: function (GraphDiaSensor, event) {

              GraphDiaSensor.element.label.options.display = true;
              GraphDiaSensor.chart.draw(); //aparece a box na linha fixa

            },
            leave: function (GraphDiaSensor, event) {

              GraphDiaSensor.element.label.options.display = false;
              GraphDiaSensor.chart.draw(); //some a box da linha fixa

            },

          },

        },

      },

      legend: {

        labels: {

          font: {},

        },

      },

      title: {

        display: true,
        text: "Concentrações médias do dia",
        position: "top",
        align: "start",
        font: {

          size: 20,

        },

      },

    }

  },

});  

  new Chart((GraphSemanaSensor), {

  type: "line",
  data: {

    labels: [

      'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'

    ],
    datasets: [

      {

        label: "Média por dia",
        data: [

          0.7, 0.4, 1, 0.5, 0.2, 1.1, 0.8

        ],
        backgroundColor: "#1f77b4",
        borderWidth: 3,
        borderColor: "#1f77b4",

      }

    ],
  },
  options: {

    scales: {

      y: {

        title: {

          display: true,
          text: "Concentração de GLP (%)",
          color: "#555",
          font: { size: 12, weight: "600" },
          padding: { bottom: 8 }

        },
        beginAtZero: true,

      },
      x: {

        title: {

          display: true,
          text: "Dia da Semana (Segunda - Domingo)",
          color: "#555",
          font: { size: 12, weight: "600" },
          padding: { top: 8 }

        },
        ticks: {

          font: {

            weight: "bold",

          },

        },

      },

    },

    plugins: {

      annotation: {

        drawtime: "afterdraw",
        annotations: {

          linhaLimite: {

            type: "line",
            yMin: limiteExplosivo,
            yMax: limiteExplosivo,
            borderWidth: 3,
            borderColor: "#ff0000",
            borderDash: [8, 4],
            label: {

              display: false,
              content: "Valor limítrofe de explosividade",
              position: "end",
              backgroundColor: "rgba(255,0,0,0.65)",
              color: "white",
              padding: 6,
              borderRadius: 6,
              font: {

                weight: "bold",

              },

            },
            enter: function (GraphSemanaSensor, event) {

              GraphSemanaSensor.element.label.options.display = true;
              GraphSemanaSensor.chart.draw(); //aparece a box na linha fixa

            },
            leave: function (GraphSemanaSensor, event) {

              GraphSemanaSensor.element.label.options.display = false;
              GraphSemanaSensor.chart.draw(); //some a box da linha fixa

            },

          },

        },

      },

      legend: {

        labels: {

          font: {},

        },

      },

      title: {

        display: true,
        text: "Concentrações médias por dia da semana",
        position: "top",
        align: "start",
        font: {

          size: 20,

        },

      },

    }

  },

});

  new Chart((GraphMesSensor), {

  type: "line",
  data: {

    labels: [

      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31

    ],
    datasets: [

      {

        label: "Média por dia",
        data: [

          0.6, 0.7, 0.8, 0.1, 0.3, 0.2, 0.13, 0.5, 0.1, 0.1, 0.8,
          1.3, 0.2, 0.5, 0.22, 0.23, 0.24, 0.25, 0.26, 0.27, 0.28, 0.29, 0.3,
          0.2, 0.7, 0.2, 1.1, 0.6, 0.8, 0.9, 1.2

        ],
        backgroundColor: "#1f77b4",
        borderWidth: 3,
        borderColor: "#1f77b4",

      }

    ],

  },
  options: {

    scales: {

      y: {

        title: {

          display: true,
          text: "Concentração de GLP (%)",
          color: "#555",
          font: { size: 12, weight: "600" },
          padding: { bottom: 8 },

        },
        beginAtZero: true,
      },
      x: {

        title: {

          display: true,
          text: "Dia do Mês",
          color: "#555",
          font: { size: 12, weight: "600" },
          padding: { top: 8 }

        },
        ticks: {

          font: {

            weight: "bold"

          },
        },
      },
    },

    plugins: {

      annotation: {

        drawtime: "afterdraw",
        annotations: {

          linhaLimite: {

            type: "line",
            yMin: limiteExplosivo,
            yMax: limiteExplosivo,
            borderWidth: 3,
            borderColor: "#ff0000",
            borderDash: [8, 4],
            label: {

              display: false,
              content: "Valor limítrofe de explosividade",
              position: "end",
              backgroundColor: "rgba(255,0,0,0.65)",
              color: "white",
              padding: 6,
              borderRadius: 6,
              font: {

                weight: "bold",

              },

            },
            enter: function (GraphMesSensor, event) {

              GraphMesSensor.element.label.options.display = true;
              GraphMesSensor.chart.draw(); //aparece a box na linha fixa

            },
            leave: function (GraphMesSensor, event) {

              GraphMesSensor.element.label.options.display = false;
              GraphMesSensor.chart.draw(); //some a box da linha fixa

            },

          },

        },

      },

      legend: {

        labels: {

          font: {},

        },

      },

      title: {

        display: true,
        text: "Concentrações médias dos dia por Mês",
        position: "top",
        align: "start",
        font: {

          size: 20,

        },

      },

    }

  },

});

}
