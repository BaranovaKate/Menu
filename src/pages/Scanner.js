import React, { useState } from "react";
import styles from "./Scanner.module.css";

const Scanner = () => {
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");

  const handleFirstInputChange = (event) => {
    setFirstInput(event.target.value);
    if (event.target.value !== "") {
      setSecondInput("");
    }
  };

  const handleSecondInputChange = (event) => {
    setSecondInput(event.target.value);
  };

  const handleSubmit = () => {
    console.log("First input:", firstInput);
    console.log("Second input:", secondInput);
  };

  const handleCancel = () => {
    setFirstInput("");
    setSecondInput("");
  };

  const isSubmitDisabled = firstInput === "" || secondInput === "";

  return (
    <div className={styles.container}>
      <h1>Сканируйте штрихкод с номером обьекта или введите его вручную</h1>
      <div className={styles.inputGroup}>
        <input
          type="text"
          placeholder="Введите текст в первое поле"
          value={firstInput}
          onChange={handleFirstInputChange}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Введите текст во второе поле"
          value={secondInput}
          onChange={handleSecondInputChange}
          className={`${styles.input} ${
            firstInput === "" ? styles.disabled : ""
          }`}
          disabled={firstInput === ""}
        />
      </div>
      <div className={styles.buttonGroup}>
        <button
          onClick={handleSubmit}
          className={`${styles.button} ${
            isSubmitDisabled ? styles.disabled : styles.active
          }`}
          disabled={isSubmitDisabled}
        >
          Перейти
        </button>
        <button
          onClick={handleCancel}
          className={`${styles.button} ${styles.cancelButton}`}
        >
          Отмена
        </button>
      </div>
    </div>
  );
};

export default Scanner;
