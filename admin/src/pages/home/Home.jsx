import { useEffect, useMemo, useState } from "react";
import Chart from "../../components/chart/Chart";
//==============================================
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import { userRequest } from "../../helpers/requestMethod";
import "./home.css";
//==============================================

export default function Home() {
  const [stats, setStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec",
    ],
    []
  );

  useEffect(() => {
    async function getUserStats() {
      try {
        const res = await userRequest.get("/users/stats");
        res.data.stats.map((item) =>
          setStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    }
    getUserStats();
  }, [MONTHS]);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={stats} title="User Analytics" grid dataKey="Active User" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
