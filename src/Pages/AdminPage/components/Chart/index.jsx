import React from "react";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import "./Chart.scss";
// import PropTypes from "prop-types";

function Chart(props) {
  const data = [
    {
      name: "Metiz 1",
      re: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Metiz 2",
      re: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Metiz 3",
      re: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Metiz 4",
      re: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Metiz 5",
      re: 1890,
      pv: 4800,
      amt: 2181,
      xxx: 1239,
    },
  ];

  //Render
  return (
    <section className="chart__section">
      <h2 className="chart__title">Revenue</h2>
      <AreaChart
        width={1000}
        height={360}
        data={data}
        margin={{ top: 10, right: 30, left: 20, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorre" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ece21c" stopOpacity={0.5} />
            <stop offset="95%" stopColor="#ece21c" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="1 1" />
        <Tooltip contentStyle={{ background: "#0a1e5e" }} />
        <Area
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorre)"
        />
        <Area
          type="monotone"
          dataKey="re"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorre)"
        />
        <Area
          type="monotone"
          dataKey="amt"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorre)"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stroke="#ece21c"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </section>
  );
}
// Chart.propTypes = {};
export default React.memo(Chart);
