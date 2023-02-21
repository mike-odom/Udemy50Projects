const initVanillaScroll = () => {
  const body = document.querySelector("body");
  const contentCards = document.querySelectorAll(".content_card");

  const onScroll = () => {
    contentCards.forEach((card) => {
      const cardRect = card.getBoundingClientRect();

      if (cardRect.top < window.innerHeight - 100) {
        console.log("visible");
        card.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", onScroll);

  onScroll();

  window.addEventListener("load", function (event) {
    // Enable animation after the page loads so the initial cards are static
    contentCards.forEach((card) => {
      card.classList.add("animated");
    });
  });
};

// I couldn't get this to work right, still playing
const initIntersectionObserverScroll = () => {
  const contentCards = document.querySelectorAll(".content_card");

  let options = {
    root: document.querySelector(".content"),
    // extreme margins hack to possibly see content on the sides?
    rootMargin: "0px 4000px 0px 4000px",
    threshold: 0.75,
  };

  const onScroll = (entries) => {
    entries.forEach((entry) => {
      console.log("entry", entry);
      if (
        entry.isIntersecting ||
        entry.target.getBoundingClientRect().top < 0
      ) {
        console.log("isIntersecting", entry.intersectionRatio);

        entry.target.classList.add("visible");
      }
    });
  };

  const observer = new IntersectionObserver(onScroll, options);

  contentCards.forEach((contentCard) => observer.observe(contentCard));
};

initVanillaScroll();
// initIntersectionObserverScroll();
