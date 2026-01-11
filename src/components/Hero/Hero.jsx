import HeroImage from "../../assets/images/HomePageHero/Grocery.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__img">
          <img src={HeroImage} alt="grocery basket with products" />
        </div>

        <div className="hero__content">
          <h1 className="hero__title title">
            Groceries for your fridge
          </h1>

          <div className="hero__description">
            Fresh fruits, vegatables, cheese and more for you. Always have a full fridge.
          </div>
        </div>
      </div>
    </section>
  );
}
