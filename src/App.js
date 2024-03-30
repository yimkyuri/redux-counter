import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Box from "./component/Box";
import GrandSonBox from "./component/GrandSonBox";

function App() {
  const count = useSelector((state) => state.count);
  const id = useSelector((state) => state.id);
  const password = useSelector((state) => state.password);
  const bold = useSelector((state) => state.bold);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
  };

  const decrease = () => {
    dispatch({ type: "DECREMENT", payload: { num: 3 } });
  }

  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "kyuri", password: "123", bold: "bold" } });
  };
  return (
    <div>
      <section className="user-info">
        ID : <span className={bold}>{id}</span><br />
        PW : <span className={bold}>{password}</span><br />
        <button className="user-button" onClick={login}>ID, Password 표시</button>
      </section>
      <section>
        <h1>{count}</h1>
        <Box />
        <GrandSonBox />
        <div class="count-button">
          <button onClick={increase}>증가 5▲</button>
          <button onClick={decrease}>감소 3▼</button>
        </div>
      </section>
    </div>
  );
}

export default App;
