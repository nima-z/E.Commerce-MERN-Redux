import { useEffect, useState } from "react";
//==============================================
import { userRequest } from "../../helpers/requestMethod";
import "./widgetLg.css";
//==============================================

export default function WidgetLg() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function getOrders() {
      try {
        const res = await userRequest("/orders");
        setOrders(res.data.allOrders);
      } catch (err) {
        console.log(err);
      }
    }
    getOrders();
  }, []);

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          {orders.map((order) => (
            <tr className="widgetLgTr" key={order._id}>
              <td className="widgetLgUser">
                <span className="widgetLgName">{order.userName}</span>
              </td>
              <td className="widgetLgDate">{order.createdAt}</td>
              <td className="widgetLgAmount">${order.amount / 100}</td>
              <td className="widgetLgStatus">
                <Button type={order.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
