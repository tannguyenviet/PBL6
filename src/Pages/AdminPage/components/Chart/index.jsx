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

function Chart({ data }) {
  // console.log("REVENUE DATA", data);
  //Render
  return (
    <section className="chart__section">
      <h2 className="chart__title">Revenue</h2>
      <AreaChart
        width={1200}
        height={360}
        data={data}
        margin={{ top: 10, right: 30, left: 20, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorth" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorfi" x1="0" y1="0" x2="0" y2="1">
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
          dataKey="theater"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorth)"
        />
        <Area
          type="monotone"
          dataKey="film"
          stroke="#ece21c"
          fillOpacity={1}
          fill="url(#colorfi)"
        />
      </AreaChart>
    </section>
  );
}
// Chart.propTypes = {};
export default React.memo(Chart);
