import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Questionnaire() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({
    nameResponse: false,
    eyeContact: false,
    gestures: false
  });

  const submit = () => {
    localStorage.setItem("questionnaire", JSON.stringify(answers));
    navigate("/game");
  };

  return (
    <div className="container">
      <h2>Анкета для родителей</h2>

      {Object.keys(answers).map((key) => (
        <label key={key}>
          <input
            type="checkbox"
            onChange={(e) =>
              setAnswers({ ...answers, [key]: e.target.checked })
            }
          />
          {key === "nameResponse" && "Откликается на имя"}
          {key === "eyeContact" && "Устанавливает зрительный контакт"}
          {key === "gestures" && "Использует жесты"}
        </label>
      ))}

      <button onClick={submit}>Продолжить</button>
    </div>
  );
}