import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../helpers/requestMethod";

export default function FeaturedInfo() {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    async function getIncome() {
      try {
        const res = await userRequest.get("orders/income");
        const currentMonth = res.data[1].sales / 100;
        const prevtMonth = res.data[0].sales / 100;
        setIncome(currentMonth);
        const percentage = parseFloat(
          ((currentMonth * 100) / prevtMonth - 100).toFixed(2)
        );
        setPerc(percentage);
      } catch (err) {
        console.log(err);
      }
    }
    getIncome();
  }, []);

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$ {income}</span>
          <span className="featuredMoneyRate">
            % {perc}
            {perc < 0 ? (
              <ArrowDownward className="featuredIcon negative" />
            ) : (
              <ArrowUpward className="featuredIcon" />
            )}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
