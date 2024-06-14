import FaqItem from "./FaqItem";
import { useState } from "react";
import RaiseQs from "./RaiseQs";
import NavBar from "./Navbar";
import Footer from "./Footer";
export default function Faq() {
  const [faqItems, setFaqItems] = useState([
    {
      id: 1,
      question: "Q1. What question do you have? ask here...",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumea mollitia error ex nihil dolores iusto, sunt labore illumoptio repellendus quibusdam explicabo est sed, enim expedita adipisci incidunt suscipit voluptatibus nobis? Culpa libero, ipsam architecto voluptate cum incidunt, doloremque, corrupti hic voluptates inventore neque consequatur voluptatibus corporis dolor molestiae?",
      isOpen: false,
    },
    {
      id: 2,
      question: "Q2. What question do you have? ask here",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumea mollitia error ex nihil dolores iusto, sunt labore illumoptio repellendus quibusdam explicabo est sed, enim expedita adipisci incidunt suscipit voluptatibus nobis? Culpa libero, ipsam architecto voluptate cum incidunt, doloremque, corrupti hic voluptates inventore neque consequatur voluptatibus corporis dolor molestiae?",
      isOpen: false,
    },
    {
      id: 3,
      question: "Q3. What question do you have? ask here",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumea mollitia error ex nihil dolores iusto, sunt labore illumoptio repellendus quibusdam explicabo est sed, enim expedita adipisci incidunt suscipit voluptatibus nobis? Culpa libero, ipsam architecto voluptate cum incidunt, doloremque, corrupti hic voluptates inventore neque consequatur voluptatibus corporis dolor molestiae?",
      isOpen: false,
    },
    {
      id: 4,
      question: "Q4. What question do you have? ask here",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumea mollitia error ex nihil dolores iusto, sunt labore illumoptio repellendus quibusdam explicabo est sed, enim expedita adipisci incidunt suscipit voluptatibus nobis? Culpa libero, ipsam architecto voluptate cum incidunt, doloremque, corrupti hic voluptates inventore neque consequatur voluptatibus corporis dolor molestiae?",
      isOpen: false,
    },
    {
      id: 5,
      question: "Q5. What question do you have? ask here",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumea mollitia error ex nihil dolores iusto, sunt labore illumoptio repellendus quibusdam explicabo est sed, enim expedita adipisci incidunt suscipit voluptatibus nobis? Culpa libero, ipsam architecto voluptate cum incidunt, doloremque, corrupti hic voluptates inventore neque consequatur voluptatibus corporis dolor molestiae?",
      isOpen: false,
    },
    {
      id: 6,
      question: "Q6. What question do you have? ask here",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumea mollitia error ex nihil dolores iusto, sunt labore illumoptio repellendus quibusdam explicabo est sed, enim expedita adipisci incidunt suscipit voluptatibus nobis? Culpa libero, ipsam architecto voluptate cum incidunt, doloremque, corrupti hic voluptates inventore neque consequatur voluptatibus corporis dolor molestiae?",
      isOpen: false,
    },
    {
      id: 7,
      question: "Q7. What question do you have? ask here",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumea mollitia error ex nihil dolores iusto, sunt labore illumoptio repellendus quibusdam explicabo est sed, enim expedita adipisci incidunt suscipit voluptatibus nobis? Culpa libero, ipsam architecto voluptate cum incidunt, doloremque, corrupti hic voluptates inventore neque consequatur voluptatibus corporis dolor molestiae?",
      isOpen: false,
    },
    {
      id: 8,
      question: "Q8. What question do you have? ask here",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumea mollitia error ex nihil dolores iusto, sunt labore illumoptio repellendus quibusdam explicabo est sed, enim expedita adipisci incidunt suscipit voluptatibus nobis? Culpa libero, ipsam architecto voluptate cum incidunt, doloremque, corrupti hic voluptates inventore neque consequatur voluptatibus corporis dolor molestiae?",
      isOpen: false,
    },
    {
      id: 9,
      question: "Q9. What question do you have? ask here",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumea mollitia error ex nihil dolores iusto, sunt labore illumoptio repellendus quibusdam explicabo est sed, enim expedita adipisci incidunt suscipit voluptatibus nobis? Culpa libero, ipsam architecto voluptate cum incidunt, doloremque, corrupti hic voluptates inventore neque consequatur voluptatibus corporis dolor molestiae?",
      isOpen: false,
    },
    {
      id: 10,
      question: "Q10. What question do you have? ask here",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumea mollitia error ex nihil dolores iusto, sunt labore illumoptio repellendus quibusdam explicabo est sed, enim expedita adipisci incidunt suscipit voluptatibus nobis? Culpa libero, ipsam architecto voluptate cum incidunt, doloremque, corrupti hic voluptates inventore neque consequatur voluptatibus corporis dolor molestiae?",
      isOpen: false,
    },
  ]);

  const toggleOpen = (id) => {
    setFaqItems((prevItems) => ({
      ...prevItems,
      [id]: {
        ...prevItems[id],
        isOpen: !prevItems[id].isOpen,
      },
    }));
  };

  return (
    <div>
      <NavBar />
      <h1 className="text-4xl m-4 font-bold flex justify-center">
        Frequently Asked Questions
      </h1>
      {/* <br /> */}
      <div>
        {Object.keys(faqItems).map((id) => (
          <FaqItem
            key={id}
            id={id}
            question={faqItems[id].question}
            answer={faqItems[id].answer}
            isOpen={faqItems[id].isOpen}
            toggleOpen={toggleOpen}
          />
        ))}
      </div>
      <RaiseQs />
      <Footer />
    </div>
  );
}
