import { useState } from "react";
import PrimaryButton from "../Button/PrimaryButton";

import breakfast from "../../assets/images/HomePageCards/breakfast.jpg";
import snacks from "../../assets/images/HomePageCards/snacks.jpg";
import pasta from "../../assets/images/HomePageCards/pasta.jpg";
import vegetable from "../../assets/images/HomePageCards/Vegatables.jpg";
import fruits from "../../assets/images/HomePageCards/fruits.jpg";
import Cheese from "../../assets/images/HomePageCards/cheese.jpg";

const cards = [
  {
    id: 1,
    title: "Are you hungry?",
    description:
      "Fresh ingredients, easy recipes: pasta, chicken & veggies",
    image: pasta,
    alt: "Pasta topped with tomato-basil sauce in a white bowl.",
  },
  {
    id: 2,
    title: "Exotic fruits straight to your home",
    description: "Dragon fruit, papaya, and carambola — fresh and in season!",
    image: fruits,
    alt: "Vibrant mix of tropical fruits—dragon fruit, papaya, durian, kumquats.",
  },
  {
    id: 3,
    title: "For turophiles",
    description: "Cheeses from around the world.",
    image: Cheese,
    alt: "Cheeses mmmmmm.",
  },
  {
    id: 4,
    title: "Late-night snacks",
    description: "Chips, chocolate and more for movie nights.",
    image: snacks,
    alt: "Snacks chips, chocolate.",
  },
  {
    id: 5,
    title: "Straight from farms.",
    description: "Seasonal vegetables from local farmers.",
    image: vegetable,
    alt: "Fresh vegetables.",
  },
  {
    id: 6,
    title: "Breakfast, elevated.",
    description: "Garden-fresh veggies, exotic fruits & gourmet essentials — delivered.",
    image: breakfast,
    alt: "Breakfast set.",
  },
];

export default function Cards() {
  const [visibleCount, setVisibleCount] = useState(3);

  const visibleCards = cards.slice(0, visibleCount);

  function handleLoadMore() {
    setVisibleCount((prev) => {
      const next = prev + 3;
      return next > cards.length ? cards.length : next;
    });
  }

  const canLoadMore = visibleCount < cards.length;

  return (
    <section className="offer-cards">
      <div className="offer-cards__container">
        <div className="offer-cards__wrapper">
          {visibleCards.map((card) => (
            <article key={card.id} className="offer-card">
              <div className="offer-card__img">
                <img src={card.image} alt={card.alt} />
              </div>
              <div className="offer-card__content">
                <h2 className="offer-card__title title">{card.title}</h2>
                <div className="offer-card__description">
                  {card.description}
                </div>
              </div>
            </article>
          ))}
        </div>

        {canLoadMore && (
          <PrimaryButton text="Load more" onClick={handleLoadMore} />
        )}
      </div>
    </section>
  );
}
