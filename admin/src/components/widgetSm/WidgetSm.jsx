import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../helpers/requestMethod";

export default function WidgetSm() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getLastFiveUsers() {
      const res = await userRequest("/users/?latest=true");

      setUsers(res.data.users);
    }
    getLastFiveUsers();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map((user) => (
          <li className="widgetSmListItem" key={users._id}>
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
