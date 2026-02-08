import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Welcome() {
  const navigate = useNavigate();
  const [age, setAge] = useState("");

  const start = () => {
    if (!age) return alert("Выберите возраст ребенка");
    localStorage.setItem("childAge", age);
    navigate("/questionnaire");
  };

  return (
    <div className="container">
      <h1>Ранний когнитивный скрининг</h1>
      <p>
        Этот тест помогает выявить возможные риски развития.
        Он не является медицинским диагнозом.
      </p>

      <select onChange={(e) => setAge(e.target.value)}>
        <option value="">Возраст ребенка</option>
        <option value="1">0–1 год</option>
        <option value="2">2–3 года</option>
        <option value="3">4–6 лет</option>
      </select>

      <button onClick={start}>Начать проверку</button>
    </div>
  );
}