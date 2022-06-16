import Auth from "../components/Authentication/Auth";
import { useDispatch } from "react-redux";
import { clearError } from "../redux/UserRedux";

export default function Authentication() {
  //to clear auth error at every reload
  const dispatch = useDispatch();
  dispatch(clearError());

  return <Auth />;
}
