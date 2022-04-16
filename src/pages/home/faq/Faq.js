import React from "react";
import styles from "./faq.module.css";
import { Plus } from "phosphor-react";

const Faq = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.header}`}>Frequently asked questions</div>
      <div className={`${styles.list}`}>
        {items.map(({ title }, i) => (
          <div key={i} className={`${styles.item}`}>
            <div className={`${styles.title}`}>{title}</div>
            <div>
              <Plus size={12} color="var(--primary-color)" weight="bold" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const items = [
  { title: "How does Carter work?", content: "" },
  {
    title: "Where are our Carter dealershipts and how can you cantact us?",
    content: "",
  },
  {
    title: "What are the minimum requirements to aply for vehicle finance?",
    content: "",
  },
  { title: "Do you have a rent-to-own option?", content: "" },
  {
    title: "Why is my installment different frrom the advetised amount?",
    content: "",
  },
  { title: "How is Carter different?", content: "" },
];

export default Faq;
