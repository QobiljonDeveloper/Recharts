import { memo } from "react";
import BarChartCustom from "./components/BarChartCustom";
import LineChartCustom from "./components/LineChartCustom";

const App = () => {
  return (
    <div className="container">
      <div className="item">
        <BarChartCustom />
      </div>
      <div className="item">
        <LineChartCustom />
      </div>
      <div className="item"></div>
    </div>
  );
};

export default memo(App);
