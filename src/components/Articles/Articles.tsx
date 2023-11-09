import "./Articles.css";
import SingleArticle from "./SingleArticle";
// import { useState } from "react";

const Articles = () => {
  const dogArticles: Array<object> = [
    {
      id: 1,
      petCategory: "dog",
      articleFig: "src/Assets/dogs/d1.jpg",
      infoTitle: "Dogs are the most popular pet on the planet!",
      infoDesc:
        "A third of ALL households around the world have a dog. These playful, friendly, loyal animals make great companions, but they can also be fierce and tough protectors, or intelligent helpers.",
    },
    {
      id: 2,
      petCategory: "dog",
      articleFig: "src/Assets/dogs/d2.jpg",
      infoTitle: "They evolved from a now-extinct species of wolf",
      infoDesc:
        "Dogs were the first animal domesticated (tamed) by humans, over 20,000 years ago! As they evolved from wolves, their skulls, teeth and paws shrank, and they became more docile and obedient.",
    },
    {
      id: 3,
      petCategory: "dog",
      articleFig: "src/Assets/dogs/d3.jpg",
      infoTitle: "They can learn over 100 words and gestures!",
      infoDesc:
        "Dogs are thought to be as smart as two-year-old children (and much easier to train!), so many owners teach them commands and tricks.",
    },
    {
      id: 4,
      petCategory: "dog",
      articleFig: "src/Assets/dogs/d4.jpg",
      infoTitle: "Dog noses are at least 40x more sensitive than ours!",
      infoDesc:
        "These clever canines have an incredible sense of smell – allowing them to follow scent trails days after they were left. Amazingly, bloodhounds‘ sense of smell is so spot on that it can be used as evidence in court!",
    },
    {
      id: 5,
      petCategory: "dog",
      articleFig: "src/Assets/dogs/d5.jpg",
      infoTitle: "Many work as assistance dogs, helping humans!",
      infoDesc:
        "Many dogs are trained to work as guide dogs, helping blind people get around safely. Others are assistance dogs, who keep their owners calm and safe, while some brave hounds are search and rescue dogs, who help human rescuers save people from danger.",
    },
    {
      id: 6,
      petCategory: "dog",
      articleFig: "src/Assets/dogs/d6.jpg",
      infoTitle:
        "They only sweat from their paws, and have to cool down by panting.",
      infoDesc:
        "The sweat is much oilier than humans’, and it contains lots of chemicals that only other dogs can detect. Weirdly, it also makes many dog paws smell of cheesy crisps!",
    },
    {
      id: 7,
      petCategory: "dog",
      articleFig: "src/Assets/dogs/d7.jpg",
      infoTitle: "They can be right or left-pawed!",
      infoDesc:
        "Like humans, most dogs have a dominant hand – or in their case, paw! To figure out which one it is, you can conduct a simple science experiment.Watch a dog moving from standing still to walking forwards. Do they start walking with their left leg, or their right? Watch several times, noting down the starting leg each time, and see if there’s a pattern. Many dogs will often lead with the same leg – their dominant one!",
    },
    {
      id: 8,
      petCategory: "dog",
      articleFig: "src/Assets/dogs/d8.jpg",
      infoTitle: "The Ancient Egyptians saw dogs as god-like!",
      infoDesc:
        "Ancient breeds like the Saluki lived in the lavish palaces of Egyptian royalty! The pampered pooches had their own servants, were decked out in jewelled collars, and ate only the finest meats.",
    },
    {
      id: 9,
      petCategory: "dog",
      articleFig: "src/Assets/dogs/d9.jpg",
      infoTitle: "Dogs use body language to express their feelings.",
      infoDesc:
        "Next time you see a dog interacting with a person or other dog, pay close attention. Are they shrinking themselves down small, or standing up big and tall? What do you think they’re trying to say?",
    },
    {
      id: 10,
      petCategory: "dog",
      articleFig: "src/Assets/dogs/d10.jpeg",
      infoTitle: "Owning a dog is a BIG responsibility!",
      infoDesc:
        "ust like humans, dogs have feelings and needs, and they have to be taken care of properly. They need regular walking, healthy food, a clean, cosy place to sleep and lots and lots of love and affection! Make sure you and your family think carefully before you get a dog (or any pet!) to make sure you have the time and means to take one on.",
    },
  ];

  // const catArticles = [{ id: 1, petCategory: "cat" }];
  // const birdArticles = [{ id: 1, petCategory: "bird" }];

  // const [petArticle,setPetArticle]=useState([])

  return (
    <section className="articles py-5 " id="articles">
      <div className="container">
        <h2 className="text-center mb-5 fs-1 fw-bold">Articles</h2>
        <div className="categories text-center">
          <div
            className="btn-group mb-5"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              className="btn-check "
              name="btnradio"
              id="btnradio1"
              autoComplete="off"
            />
            <label
              className="btn rounded btn-outline-primary me-5"
              htmlFor="btnradio1"
            >
              Dogs
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio2"
              autoComplete="off"
            />
            <label
              className="btn rounded btn-outline-primary mx-5 "
              htmlFor="btnradio2"
            >
              Cats
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio3"
              autoComplete="off"
            />
            <label
              className="btn rounded btn-outline-primary ms-5"
              htmlFor="btnradio3"
            >
              Birds
            </label>
          </div>
        </div>
        <div className="articles ">
          <div className="row">
            {dogArticles.map((art: object) => (
              <SingleArticle articleData={art} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
