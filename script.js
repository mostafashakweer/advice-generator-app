let adviceId = document.getElementById("advice-id");
let adviceText = document.getElementById("advice-text");
let diceBtn = document.getElementById("dice-btn");

async function getAdvice() {
  diceBtn.disabled = true;
  adviceText.textContent = "Loading...";

  try {
    // cache
    let res = await fetch("https://api.adviceslip.com/advice?" + Date.now());
    let data = await res.json();

    adviceId.textContent = data.slip.id;
    adviceText.textContent = `“${data.slip.advice}”`;
  } catch (error) {
    adviceText.textContent = "Oops! Try again.";
    console.error("API Error:", error);
  } finally {
    diceBtn.disabled = false;
  }
}

// load
getAdvice();

// onclick
diceBtn.addEventListener("click", getAdvice);
