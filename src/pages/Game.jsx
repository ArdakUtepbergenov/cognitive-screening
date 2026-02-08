import { useNavigate } from "react-router-dom";

export default function Game() {
  const navigate = useNavigate();
  const age = localStorage.getItem("childAge");

  return (
    <div className="container">
      <h2>Игра для возраста: {age}</h2>
      <p>Здесь будет интерактивная игра с камерой</p>

      <button onClick={() => navigate("/result")}>
        Завершить игру
      </button>
    </div>
  );
}