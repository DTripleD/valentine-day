import { useState } from "react";
import "./App.css";
import cute from "./images/cute.gif";
import kiss from "./images/kiss.gif";
import gun from "./images/gun.gif";

function App() {
  const [question, setQuestion] = useState("Ти будеш моєю Валентинкою?");
  const [isNameVisible, setNameVisible] = useState(true);
  const [imageSrc, setImageSrc] = useState(cute);
  const [buttonsVisible, setButtonsVisible] = useState(true);
  // const [index, setIndex] = useState(0);

  function showMessage(response) {
    if (response === "No") {
      const noButton = document.getElementById("no-button");
      const maxWidth = window.innerWidth - noButton.offsetWidth;
      const maxHeight = window.innerHeight - noButton.offsetHeight;

      noButton.style.position = "absolute";

      setImageSrc(gun);

      const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
      const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

      noButton.style.left = randomX + "px";
      noButton.style.top = randomY + "px";

      // const randomWorlds = [
      //   "Що ти там задумала?",
      //   "А якщо подумати?",
      //   "В тебе є остання спроба...",
      //   "Не забувай, що я програміст",
      //   "Зараз вінда полетить!!!!",
      //   "Жартую, мак",
      //   "3",
      //   "2",
      //   "1",
      // ];
      // setIndex((prev) => prev + 1);
      // if (index === 9) {
      //   alert("All data from this computer has been successfully deleted!");
      // }

      const randomWorlds = [
        "Що ти там задумала?",
        "Точно ні?",
        "Може ще раз подумаєш?",
        "Самовидалення системи через 3... 2...",
        "Там ще одна кнопка є...",
        "Для підтвердженння натисність 'Ні'",
      ];

      const randomIndex = Math.floor(Math.random() * randomWorlds.length);
      const randomWord = randomWorlds[randomIndex];

      setQuestion(randomWord);
      setNameVisible(false);
    }

    if (response === "Yes") {
      setNameVisible(false);
      setButtonsVisible(false);

      setQuestion("Ти моя бусінка 😘");
      setImageSrc(kiss);
    }
  }

  return (
    <div className="container">
      <div className="Mainprompt">
        <img className="image" src={imageSrc} alt="Emotion"></img>
        <div className="text">
          <h1
            className="hh"
            style={{ display: isNameVisible ? "block" : "none" }}
          >
            Привіт, красуне!
          </h1>
          <p className="pp" id="question">
            {question}
          </p>
        </div>
        {buttonsVisible && (
          <div className="buttons">
            <button
              className="button no"
              id="no-button"
              onMouseEnter={() => showMessage("No")}
            >
              Ні
            </button>
            <button
              className="button yes"
              onClick={() => showMessage("Yes")}
              id="yesButton"
            >
              Так
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
