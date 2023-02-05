const createCardsCarousel = ({ carouselId, cardTemplateId }) => {
  const cards = [];

  const domCardTemplate = document.getElementById(cardTemplateId);

  const cardTemplate = domCardTemplate.cloneNode(true);

  // hide the original template
  domCardTemplate.style.display = "none";

  const selectCard = (cardElement) => {
    cards.forEach((testCard) => {
      const { classList } = testCard.cardElement;

      if (testCard.cardElement === cardElement) {
        classList.add("card--state-open");
      } else {
        classList.remove("card--state-open");
      }
    });
  };

  const addCard = ({ imageUrl, text }) => {
    const cardElement = cardTemplate.cloneNode(true);

    cardElement.id = `${carouselId} - card${cards.length + 1}`;
    cardElement.style.backgroundImage = `url(${imageUrl})`;
    cardElement.onclick = () => selectCard(cardElement);

    const textElement =
      cardElement.getElementsByClassName("cardTemplate--text")[0];

    textElement.innerHTML = text;

    document.getElementById(carouselId).appendChild(cardElement);

    cards.push({
      imageUrl,
      text,
      cardElement,
    });
  };

  return {
    cards,
    addCard,
  };
};

const NUM_CARDS = 5;

const cardsCarousel = createCardsCarousel({
  carouselId: "card-container",
  cardTemplateId: "cardTemplateOriginal",
});

for (let t = 0; t < NUM_CARDS; t++) {
  cardsCarousel.addCard({
    imageUrl: `https://picsum.photos/id/${11 + t}/1200/600`,
    text: `Card ${t + 1}`,
  });
}
