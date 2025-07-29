import { useNavigate } from "react-router-dom";
const navigate = useNavigate();
useEffect(() => {
  if (isLoggedIn) {
    navigate("/");
  } else {
    navigate("/login");
  }
}, [isLoggedIn]);
