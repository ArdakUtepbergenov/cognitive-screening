export default function Result() {
  const questionnaire = JSON.parse(
    localStorage.getItem("questionnaire")
  );

  return (
    <div className="container">
      <h2>Результаты скрининга</h2>

      <pre>{JSON.stringify(questionnaire, null, 2)}</pre>

      <p>
        ⚠️ Это не диагноз. При сомнениях рекомендуется
        консультация специалиста.
      </p>
    </div>
  );
}