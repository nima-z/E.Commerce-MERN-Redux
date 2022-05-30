import { useEffect, useState } from "react";
import { Visibility } from "@material-ui/icons";
//==============================================
import { userRequest } from "../../helpers/requestMethod";
import "./widgetSm.css";
//==============================================

export default function WidgetSm() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getLastFiveUsers() {
      try {
        const res = await userRequest("/users/?latest=true");
        setUsers(res.data.users);
      } catch (err) {
        console.log(err);
      }
    }
    getLastFiveUsers();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map((user) => (
          <li className="widgetSmListItem" key={user._id}>
            <img
              src={
                user.img ||
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">
                {user.name + "" + user.lastname}
              </span>
              {/* <span className="widgetSmUserTitle">Software Engineer</span> */}
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
