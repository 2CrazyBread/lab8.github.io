  let userName = prompt("Введіть своє ім’я:");
  if (!userName || userName.trim() === "") userName = "User";
  document.getElementById("userName").textContent = userName;

  let userWins = 0, compWins = 0;

  const buttonContainer = document.getElementById("buttonContainer");
  const generateBtn = document.createElement("button");
  generateBtn.textContent = "Generate";
  buttonContainer.appendChild(generateBtn);

  generateBtn.addEventListener("click", function() {
    const userNum = Math.floor(Math.random() * 10) + 1;
    const compNum = Math.floor(Math.random() * 10) + 1;

    document.getElementById("userScore").textContent = userNum;
    document.getElementById("compScore").textContent = compNum;

    let resultText = "";

    if (userNum > compNum) {
      userWins++;
      resultText = `${userName} виграв цей раунд!`;
    } else if (compNum > userNum) {
      compWins++;
      resultText = `Комп’ютер виграв цей раунд!`;
    } else {
      resultText = "Нічия!";
    }

    document.getElementById("userWinsText").textContent = `Перемог: ${userWins}`;
    document.getElementById("compWinsText").textContent = `Перемог: ${compWins}`;
    document.getElementById("result").textContent = resultText;

    if (userWins === 3 || compWins === 3) {
      const winner = userWins === 3 ? userName : "Комп’ютер";
      alert(`Гра завершена! Переможець: ${winner}`);
      userWins = compWins = 0;
      document.getElementById("userWinsText").textContent = `Перемог: 0`;
      document.getElementById("compWinsText").textContent = `Перемог: 0`;
      document.getElementById("result").textContent = "Почнімо знову!";
    }
  });