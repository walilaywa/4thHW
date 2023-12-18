let myGraph = document.getElementById('myGraph');

// trace1（長條圖）配置
let trace1 = {
  type: "bar",
  x: [],
  y: [],
  xaxis: 'x',
  yaxis: 'y',
};

// trace2（折線圖）配置
let trace2 = {
  type: "scatter",
  mode: "lines",
  x: [],
  y: [],
  name: "折線圖",
  xaxis: 'x2',
  yaxis: 'y2',
};

// trace3（圓餅圖）配置
let trace3 = {
    type: "pie",
    labels: [],
    values: [],
    domain: { x: [0, 0.45], y: [0, 0.45] },
    height: 400,
    width: 400,
  textfont: {
    size: 35,  // 調整圓餅圖的顯示字體大小
  },
};

let chungWenSchoolData = schools.find(school => school.name === "市立崇文國小");

if (chungWenSchoolData) {
  let years = Object.keys(chungWenSchoolData).filter(key => key !== "name");

  // 設定 trace1 的 x 與 y
  trace1.x = years;
  trace1.y = years.map(year => chungWenSchoolData[year]);

  // 設定 trace2 的 x 與 y
  trace2.x = years;
  trace2.y = years.map(year => chungWenSchoolData[year]);
} else {
  console.log("找不到崇文國小的資料");
}

// trace3（圓餅圖）資料
let junschoolData = junschool.map(school => ({
    "校名": school.校名,
    "總人數": school.總人數
  }));

// 設定 trace3 的 labels 和 values
trace3.labels = junschoolData.map(school => school.校名);
trace3.values = junschoolData.map(school => school.總人數);
trace3.hole =0.5;
let data = [trace1, trace2, trace3];
let annotation = {
    x: 0.15,  // 這裡使用相對於整個版面的 x 座標（0 到 1）
    y: 0.2,  // 這裡使用相對於整個版面的 y 座標（0 到 1）
    xref: "paper",  // 使用相對於整個版面的 x 座標
    yref: "paper",  // 使用相對於整個版面的 y 座標
    text: "各學校人數比例",
    font: {
      size: 35,
    },
    showarrow: false,
  };
  
  
let layout = {
  margin: { t: 60 },
  title: {
    text: "崇文國小各學年度人數",
    x: 0.5,
    xanchor: "center",
    font: {
      size: 40,
    }
  },
  xaxis: {
    domain: [0, 0.45],
    title: {
      text: "年度",
      font: {
        size: 35,
      }
    },
    tickfont: {
      size: 30,
    },
  },
  yaxis: {
    domain: [0.55, 1],
    title: {
      text: "人數",
      font: {
        size: 35,
      }
    },
    tickfont: {
      size: 30,
    },
    side: 'left',
  },
  xaxis2: {
    domain: [0.55, 1],
    title: {
      text: "年度",
      font: {
        size: 35,
      }
    },
    tickfont: {
      size: 30,
    },
  },
  yaxis2: {
    domain: [0.55, 1],
    title: {
      text: "人數",
      font: {
        size: 35,
      }
    },
    tickfont: {
      size: 30,
    },
    side: 'right',
  },
  annotations: [annotation],
};
Plotly.newPlot(myGraph, data, layout);
