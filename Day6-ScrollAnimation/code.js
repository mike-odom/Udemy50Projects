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

// Tried InteractionObserver
// const onScroll = (entries) => {
//   console.log("scrolling");
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       console.log("isIntersecting");

//       entry.classList.addClass("visible");
//     }
//   });
// };

// let options = {
//   root: document.querySelector("body"),
//   rootMargin: "0px",
//   threshold: 1.0,
// };

// let observer = new IntersectionObserver(onScroll, options);

// contentCards.forEach((contentCard) => observer.observe(contentCard));

// const showVisibleContentCards = () => {};
// console.log("contentCards", contentCards);
