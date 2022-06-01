import { useEffect, useState } from "react";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
//==============================================
import { adminRequest } from "../../helpers/requestMethod";
import "./featuredInfo.css";
//==============================================

export default function FeaturedInfo({ token }) {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    async function getIncome() {
      try {
        const res = await adminRequest(token).get("orders/income");
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
  }, [token]);

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
