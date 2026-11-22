const monthlyBtn = document.getElementById("monthly");
const yearlyBtn = document.getElementById("yearly");
const cards = document.querySelectorAll(".card");

const format = (n) => Number(n).toLocaleString("en-IN");

function setPeriod(period) {
  cards.forEach((card) => {
    const price = card.querySelector(".price");
    const unit = card.querySelector(".unit");
    const note = card.querySelector(".billing-note");

    price.textContent = format(price.dataset[period]);
    unit.textContent = period === "monthly" ? "per month" : "per year";

    if (period === "yearly") {
      const perMonth = Math.round(price.dataset.yearly / 12);
      note.textContent = "Just ₹" + format(perMonth) + "/month, billed yearly";
    } else {
      note.textContent = "Billed monthly, cancel anytime";
    }
  });

  monthlyBtn.classList.toggle("active", period === "monthly");
  yearlyBtn.classList.toggle("active", period === "yearly");
  monthlyBtn.setAttribute("aria-pressed", period === "monthly");
  yearlyBtn.setAttribute("aria-pressed", period === "yearly");
}

monthlyBtn.addEventListener("click", () => setPeriod("monthly"));
yearlyBtn.addEventListener("click", () => setPeriod("yearly"));

setPeriod("monthly");