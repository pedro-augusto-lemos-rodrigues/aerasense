Chart.register(window["chartjs-plugin-annotation"]);

const GraphDiaSensor1 = document.getElementById('GraficoDiaSensor1');
const GraphSemanaSensor1 = document.getElementById('GraficoSemanaSensor1');
const GraphMesSensor1 = document.getElementById('GraficoMesSensor1');

const GraphDiaSensor2 = document.getElementById('GraficoDiaSensor2');
const GraphSemanaSensor2 = document.getElementById('GraficoSemanaSensor2');
const GraphMesSensor2 = document.getElementById('GraficoMesSensor2');

const GraphDiaSensor3 = document.getElementById('GraficoDiaSensor3');
const GraphSemanaSensor3 = document.getElementById('GraficoSemanaSensor3');
const GraphMesSensor3 = document.getElementById('GraficoMesSensor3');

const GraphDiaSensor4 = document.getElementById('GraficoDiaSensor4');
const GraphSemanaSensor4 = document.getElementById('GraficoSemanaSensor4');
const GraphMesSensor4 = document.getElementById('GraficoMesSensor4');

const GraphDiaSensor5 = document.getElementById('GraficoDiaSensor5');
const GraphSemanaSensor5 = document.getElementById('GraficoSemanaSensor5');
const GraphMesSensor5 = document.getElementById('GraficoMesSensor5');

const GraphDiaSensor6 = document.getElementById('GraficoDiaSensor6');
const GraphSemanaSensor6 = document.getElementById('GraficoSemanaSensor6');
const GraphMesSensor6 = document.getElementById('GraficoMesSensor6');

const GraphDiaSensor7 = document.getElementById('GraficoDiaSensor7');
const GraphSemanaSensor7 = document.getElementById('GraficoSemanaSensor7');
const GraphMesSensor7 = document.getElementById('GraficoMesSensor7');

const GraphDiaSensor8 = document.getElementById('GraficoDiaSensor8');
const GraphSemanaSensor8 = document.getElementById('GraficoSemanaSensor8');
const GraphMesSensor8 = document.getElementById('GraficoMesSensor8');

const GraphDiaSensor9 = document.getElementById('GraficoDiaSensor9');
const GraphSemanaSensor9 = document.getElementById('GraficoSemanaSensor9');
const GraphMesSensor9 = document.getElementById('GraficoMesSensor9');

const GraphDiaSensor10 = document.getElementById('GraficoDiaSensor10');
const GraphSemanaSensor10 = document.getElementById('GraficoSemanaSensor10');
const GraphMesSensor10 = document.getElementById('GraficoMesSensor10');

const GraphDiaSensor11 = document.getElementById('GraficoDiaSensor11');
const GraphSemanaSensor11 = document.getElementById('GraficoSemanaSensor11');
const GraphMesSensor11 = document.getElementById('GraficoMesSensor11');

const GraphDiaSensor12 = document.getElementById('GraficoDiaSensor12');
const GraphSemanaSensor12 = document.getElementById('GraficoSemanaSensor12');
const GraphMesSensor12 = document.getElementById('GraficoMesSensor12');

const limiteExplosivo = 1.9;

new Chart((GraphDiaSensor1), {

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
            enter: function (GraphDiaSensor1, event) {

              GraphDiaSensor1.element.label.options.display = true;
              GraphDiaSensor1.chart.draw(); //aparece a box na linha fixa

            },
            leave: function (GraphDiaSensor1, event) {

              GraphDiaSensor1.element.label.options.display = false;
              GraphDiaSensor1.chart.draw(); //some a box da linha fixa

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

new Chart((GraphSemanaSensor1), {

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
            enter: function (GraphSemanaSensor1, event) {

              GraphSemanaSensor1.element.label.options.display = true;
              GraphSemanaSensor1.chart.draw(); //aparece a box na linha fixa

            },
            leave: function (GraphSemanaSensor1, event) {

              GraphSemanaSensor1.element.label.options.display = false;
              GraphSemanaSensor1.chart.draw(); //some a box da linha fixa

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

new Chart((GraphMesSensor1), {

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
            enter: function (GraphMesSensor1, event) {

              GraphMesSensor1.element.label.options.display = true;
              GraphMesSensor1.chart.draw(); //aparece a box na linha fixa

            },
            leave: function (GraphMesSensor1, event) {

              GraphMesSensor1.element.label.options.display = false;
              GraphMesSensor1.chart.draw(); //some a box da linha fixa

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

new Chart((GraphDiaSensor2), {

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
            enter: function (GraphDiaSensor1, event) {

              GraphDiaSensor1.element.label.options.display = true;
              GraphDiaSensor1.chart.draw(); //aparece a box na linha fixa

            },
            leave: function (GraphDiaSensor1, event) {

              GraphDiaSensor1.element.label.options.display = false;
              GraphDiaSensor1.chart.draw(); //some a box da linha fixa

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

new Chart((GraphSemanaSensor2), {

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
            enter: function (GraphSemanaSensor1, event) {

              GraphSemanaSensor1.element.label.options.display = true;
              GraphSemanaSensor1.chart.draw(); //aparece a box na linha fixa

            },
            leave: function (GraphSemanaSensor1, event) {

              GraphSemanaSensor1.element.label.options.display = false;
              GraphSemanaSensor1.chart.draw(); //some a box da linha fixa

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

new Chart((GraphMesSensor2), {

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
            enter: function (GraphMesSensor1, event) {

              GraphMesSensor1.element.label.options.display = true;
              GraphMesSensor1.chart.draw(); //aparece a box na linha fixa

            },
            leave: function (GraphMesSensor1, event) {

              GraphMesSensor1.element.label.options.display = false;
              GraphMesSensor1.chart.draw(); //some a box da linha fixa

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

new Chart((GraphDiaSensor3), {

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
            enter: function (GraphDiaSensor1, event) {

              GraphDiaSensor1.element.label.options.display = true;
              GraphDiaSensor1.chart.draw(); //aparece a box na linha fixa

            },
            leave: function (GraphDiaSensor1, event) {

              GraphDiaSensor1.element.label.options.display = false;
              GraphDiaSensor1.chart.draw(); //some a box da linha fixa

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

new Chart((GraphSemanaSensor3), {

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
            enter: function (GraphSemanaSensor1, event) {

              GraphSemanaSensor1.element.label.options.display = true;
              GraphSemanaSensor1.chart.draw(); //aparece a box na linha fixa

            },
            leave: function (GraphSemanaSensor1, event) {

              GraphSemanaSensor1.element.label.options.display = false;
              GraphSemanaSensor1.chart.draw(); //some a box da linha fixa

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

new Chart((GraphMesSensor3), {

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
            enter: function (GraphMesSensor1, event) {

              GraphMesSensor1.element.label.options.display = true;
              GraphMesSensor1.chart.draw(); //aparece a box na linha fixa

            },
            leave: function (GraphMesSensor1, event) {

              GraphMesSensor1.element.label.options.display = false;
              GraphMesSensor1.chart.draw(); //some a box da linha fixa

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

new Chart((GraphDiaSensor4), {

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
            enter: function (GraphDiaSensor1, event) {

              GraphDiaSensor1.element.label.options.display = true;
              GraphDiaSensor1.chart.draw(); //aparece a box na linha fixa

            },
            leave: function (GraphDiaSensor1, event) {

              GraphDiaSensor1.element.label.options.display = false;
              GraphDiaSensor1.chart.draw(); //some a box da linha fixa

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

new Chart((GraphSemanaSensor4), {

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
            enter: function (GraphSemanaSensor1, event) {

              GraphSemanaSensor1.element.label.options.display = true;
              GraphSemanaSensor1.chart.draw(); //aparece a box na linha fixa

            },
            leave: function (GraphSemanaSensor1, event) {

              GraphSemanaSensor1.element.label.options.display = false;
              GraphSemanaSensor1.chart.draw(); //some a box da linha fixa

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

new Chart((GraphMesSensor4), {

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
            enter: function (GraphMesSensor1, event) {

              GraphMesSensor1.element.label.options.display = true;
              GraphMesSensor1.chart.draw(); //aparece a box na linha fixa

            },
            leave: function (GraphMesSensor1, event) {

              GraphMesSensor1.element.label.options.display = false;
              GraphMesSensor1.chart.draw(); //some a box da linha fixa

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

new Chart((GraphDiaSensor5), {

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
            enter: function (GraphDiaSensor1, event) {

              GraphDiaSensor1.element.label.options.display = true;
              GraphDiaSensor1.chart.draw(); //aparece a box na linha fixa

            },
            leave: function (GraphDiaSensor1, event) {

              GraphDiaSensor1.element.label.options.display = false;
              GraphDiaSensor1.chart.draw(); //some a box da linha fixa

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

new Chart((GraphSemanaSensor5), {

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
            enter: function (GraphSemanaSensor1, event) {

              GraphSemanaSensor1.element.label.options.display = true;
              GraphSemanaSensor1.chart.draw(); //aparece a box na linha fixa

            },
            leave: function (GraphSemanaSensor1, event) {

              GraphSemanaSensor1.element.label.options.display = false;
              GraphSemanaSensor1.chart.draw(); //some a box da linha fixa

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

new Chart((GraphMesSensor5), {

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
            enter: function (GraphMesSensor1, event) {

              GraphMesSensor1.element.label.options.display = true;
              GraphMesSensor1.chart.draw(); //aparece a box na linha fixa

            },
            leave: function (GraphMesSensor1, event) {

              GraphMesSensor1.element.label.options.display = false;
              GraphMesSensor1.chart.draw(); //some a box da linha fixa

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

new Chart((GraphDiaSensor6), {

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
            enter: function (GraphDiaSensor1, event) {

              GraphDiaSensor1.element.label.options.display = true;
              GraphDiaSensor1.chart.draw(); //aparece a box na linha fixa

            },
            leave: function (GraphDiaSensor1, event) {

              GraphDiaSensor1.element.label.options.display = false;
              GraphDiaSensor1.chart.draw(); //some a box da linha fixa

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

new Chart((GraphSemanaSensor6), {

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
            enter: function (GraphSemanaSensor1, event) {

              GraphSemanaSensor1.element.label.options.display = true;
              GraphSemanaSensor1.chart.draw(); //aparece a box na linha fixa

            },
            leave: function (GraphSemanaSensor1, event) {

              GraphSemanaSensor1.element.label.options.display = false;
              GraphSemanaSensor1.chart.draw(); //some a box da linha fixa

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

new Chart((GraphMesSensor6), {

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
            enter: function (GraphMesSensor1, event) {

              GraphMesSensor1.element.label.options.display = true;
              GraphMesSensor1.chart.draw(); //aparece a box na linha fixa

            },
            leave: function (GraphMesSensor1, event) {

              GraphMesSensor1.element.label.options.display = false;
              GraphMesSensor1.chart.draw(); //some a box da linha fixa

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

new Chart((GraphDiaSensor7), {

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
            enter: function (GraphDiaSensor1, event) {

              GraphDiaSensor1.element.label.options.display = true;
              GraphDiaSensor1.chart.draw(); //aparece a box na linha fixa

            },
            leave: function (GraphDiaSensor1, event) {

              GraphDiaSensor1.element.label.options.display = false;
              GraphDiaSensor1.chart.draw(); //some a box da linha fixa

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

new Chart((GraphSemanaSensor7), {

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
            enter: function (GraphSemanaSensor1, event) {

              GraphSemanaSensor1.element.label.options.display = true;
              GraphSemanaSensor1.chart.draw(); //aparece a box na linha fixa

            },
            leave: function (GraphSemanaSensor1, event) {

              GraphSemanaSensor1.element.label.options.display = false;
              GraphSemanaSensor1.chart.draw(); //some a box da linha fixa

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

new Chart((GraphMesSensor7), {

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
            enter: function (GraphMesSensor1, event) {

              GraphMesSensor1.element.label.options.display = true;
              GraphMesSensor1.chart.draw(); //aparece a box na linha fixa

            },
            leave: function (GraphMesSensor1, event) {

              GraphMesSensor1.element.label.options.display = false;
              GraphMesSensor1.chart.draw(); //some a box da linha fixa

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

new Chart((GraphDiaSensor8), {

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
            enter: function (GraphDiaSensor1, event) {

              GraphDiaSensor1.element.label.options.display = true;
              GraphDiaSensor1.chart.draw(); //aparece a box na linha fixa

            },
            leave: function (GraphDiaSensor1, event) {

              GraphDiaSensor1.element.label.options.display = false;
              GraphDiaSensor1.chart.draw(); //some a box da linha fixa

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

new Chart((GraphSemanaSensor8), {

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
            enter: function (GraphSemanaSensor1, event) {

              GraphSemanaSensor1.element.label.options.display = true;
              GraphSemanaSensor1.chart.draw(); //aparece a box na linha fixa

            },
            leave: function (GraphSemanaSensor1, event) {

              GraphSemanaSensor1.element.label.options.display = false;
              GraphSemanaSensor1.chart.draw(); //some a box da linha fixa

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

new Chart((GraphMesSensor8), {

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
            enter: function (GraphMesSensor1, event) {

              GraphMesSensor1.element.label.options.display = true;
              GraphMesSensor1.chart.draw(); //aparece a box na linha fixa

            },
            leave: function (GraphMesSensor1, event) {

              GraphMesSensor1.element.label.options.display = false;
              GraphMesSensor1.chart.draw(); //some a box da linha fixa

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

new Chart((GraphDiaSensor9), {

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
            enter: function (GraphDiaSensor1, event) {

              GraphDiaSensor1.element.label.options.display = true;
              GraphDiaSensor1.chart.draw(); //aparece a box na linha fixa

            },
            leave: function (GraphDiaSensor1, event) {

              GraphDiaSensor1.element.label.options.display = false;
              GraphDiaSensor1.chart.draw(); //some a box da linha fixa

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

new Chart((GraphSemanaSensor9), {

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
            enter: function (GraphSemanaSensor1, event) {

              GraphSemanaSensor1.element.label.options.display = true;
              GraphSemanaSensor1.chart.draw(); //aparece a box na linha fixa

            },
            leave: function (GraphSemanaSensor1, event) {

              GraphSemanaSensor1.element.label.options.display = false;
              GraphSemanaSensor1.chart.draw(); //some a box da linha fixa

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

new Chart((GraphMesSensor9), {

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
            enter: function (GraphMesSensor1, event) {

              GraphMesSensor1.element.label.options.display = true;
              GraphMesSensor1.chart.draw(); //aparece a box na linha fixa

            },
            leave: function (GraphMesSensor1, event) {

              GraphMesSensor1.element.label.options.display = false;
              GraphMesSensor1.chart.draw(); //some a box da linha fixa

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

new Chart((GraphDiaSensor10), {

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
            enter: function (GraphDiaSensor1, event) {

              GraphDiaSensor1.element.label.options.display = true;
              GraphDiaSensor1.chart.draw(); //aparece a box na linha fixa

            },
            leave: function (GraphDiaSensor1, event) {

              GraphDiaSensor1.element.label.options.display = false;
              GraphDiaSensor1.chart.draw(); //some a box da linha fixa

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

new Chart((GraphSemanaSensor10), {

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
            enter: function (GraphSemanaSensor1, event) {

              GraphSemanaSensor1.element.label.options.display = true;
              GraphSemanaSensor1.chart.draw(); //aparece a box na linha fixa

            },
            leave: function (GraphSemanaSensor1, event) {

              GraphSemanaSensor1.element.label.options.display = false;
              GraphSemanaSensor1.chart.draw(); //some a box da linha fixa

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

new Chart((GraphMesSensor10), {

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
            enter: function (GraphMesSensor1, event) {

              GraphMesSensor1.element.label.options.display = true;
              GraphMesSensor1.chart.draw(); //aparece a box na linha fixa

            },
            leave: function (GraphMesSensor1, event) {

              GraphMesSensor1.element.label.options.display = false;
              GraphMesSensor1.chart.draw(); //some a box da linha fixa

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

new Chart((GraphDiaSensor11), {

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
            enter: function (GraphDiaSensor1, event) {

              GraphDiaSensor1.element.label.options.display = true;
              GraphDiaSensor1.chart.draw(); //aparece a box na linha fixa

            },
            leave: function (GraphDiaSensor1, event) {

              GraphDiaSensor1.element.label.options.display = false;
              GraphDiaSensor1.chart.draw(); //some a box da linha fixa

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

new Chart((GraphSemanaSensor11), {

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
            enter: function (GraphSemanaSensor1, event) {

              GraphSemanaSensor1.element.label.options.display = true;
              GraphSemanaSensor1.chart.draw(); //aparece a box na linha fixa

            },
            leave: function (GraphSemanaSensor1, event) {

              GraphSemanaSensor1.element.label.options.display = false;
              GraphSemanaSensor1.chart.draw(); //some a box da linha fixa

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

new Chart((GraphMesSensor11), {

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
            enter: function (GraphMesSensor1, event) {

              GraphMesSensor1.element.label.options.display = true;
              GraphMesSensor1.chart.draw(); //aparece a box na linha fixa

            },
            leave: function (GraphMesSensor1, event) {

              GraphMesSensor1.element.label.options.display = false;
              GraphMesSensor1.chart.draw(); //some a box da linha fixa

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

new Chart((GraphDiaSensor12), {

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
            enter: function (GraphDiaSensor1, event) {

              GraphDiaSensor1.element.label.options.display = true;
              GraphDiaSensor1.chart.draw(); //aparece a box na linha fixa

            },
            leave: function (GraphDiaSensor1, event) {

              GraphDiaSensor1.element.label.options.display = false;
              GraphDiaSensor1.chart.draw(); //some a box da linha fixa

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

new Chart((GraphSemanaSensor12), {

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
            enter: function (GraphSemanaSensor1, event) {

              GraphSemanaSensor1.element.label.options.display = true;
              GraphSemanaSensor1.chart.draw(); //aparece a box na linha fixa

            },
            leave: function (GraphSemanaSensor1, event) {

              GraphSemanaSensor1.element.label.options.display = false;
              GraphSemanaSensor1.chart.draw(); //some a box da linha fixa

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

new Chart((GraphMesSensor12), {

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
            enter: function (GraphMesSensor1, event) {

              GraphMesSensor1.element.label.options.display = true;
              GraphMesSensor1.chart.draw(); //aparece a box na linha fixa

            },
            leave: function (GraphMesSensor1, event) {

              GraphMesSensor1.element.label.options.display = false;
              GraphMesSensor1.chart.draw(); //some a box da linha fixa

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
