document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");
  const yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  faqItems.forEach((item) => {
    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      faqItems.forEach((faq) => {
        faq.classList.remove("active");
      });

      if (!isOpen) {
        item.classList.add("active");
      }
    });
  });
});
