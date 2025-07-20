let balance = 0;
let dailyLimit = 4000;
let collectedToday = 0;

document.addEventListener("DOMContentLoaded", () => {
  updateBalance();

  const tapGem = document.getElementById("tap-gem");
  tapGem.addEventListener("click", () => {
    if (collectedToday < dailyLimit) {
      balance += 5;
      collectedToday += 5;
      updateBalance();
    } else {
      alert("Дневной лимит достигнут (4000 ⭐)");
    }
  });

  // Меню навигации
  document.querySelectorAll(".menu button").forEach(button => {
    button.addEventListener("click", () => {
      const section = button.getAttribute("data-section");
      showSection(section);
    });
  });

  // Продажа предмета
  document.getElementById("sell-item").addEventListener("click", () => {
    balance += 100;
    updateBalance();
    alert("Вы продали предмет за 100 ⭐");
  });

  // Промокод
  document.getElementById("activate-code").addEventListener("click", () => {
    const code = document.getElementById("promo-input").value.trim();
    if (code === "FRIPLEX100") {
      balance += 100;
      updateBalance();
      alert("✅ Промокод активирован: +100 ⭐");
    } else {
      alert("❌ Неверный промокод");
    }
  });
});

function updateBalance() {
  document.getElementById("star-count").innerText = balance;
}

function showSection(name) {
  document.querySelectorAll("section").forEach(sec => sec.classList.add("hidden"));
  document.getElementById(name).classList.remove("hidden");
}
