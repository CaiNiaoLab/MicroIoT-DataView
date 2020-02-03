/** @format */

import { ComponentsProperty } from "@/store/actions/actionType";

let now = Date.now();
const config: ComponentsProperty = {
  style: {
    backgroundColor: "white",
  },
  option: {
    rect: {
      rHeight: "200",
      rWidth: "300",
    },
    echarts: {
      title: {
        text: "堆叠区域图",
        backgroundColor: "rgba(255,255,255,1)",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#6a7985",
          },
        },
      },
      dataset: {
        source: [
          ["product", "2015", "2016", "2017"],
          [
            new Date(now - 6000).toLocaleTimeString().replace(/^\D*/, ""),
            52.4,
            23.9,
            19.1,
          ],
          [
            new Date(now - 4000).toLocaleTimeString().replace(/^\D*/, ""),
            42.4,
            33.9,
            29.1,
          ],
          [
            new Date(now - 2000).toLocaleTimeString().replace(/^\D*/, ""),
            72.4,
            53.9,
            39.1,
          ],
        ],
      },
      legend: {},
      toolbox: {},
      xAxis: {
        type: "category",
        boundaryGap: false,
      },
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        {
          name: "2015",
          type: "line",
          stack: "总量",
          areaStyle: {},
        },
        {
          name: "2016",
          type: "line",
          stack: "总量",
          areaStyle: {},
        },
        {
          name: "2017",
          type: "line",
          stack: "总量",
          areaStyle: {},
        },
      ],
    },
  },
};
export default config;
