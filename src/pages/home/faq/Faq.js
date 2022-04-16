import React, { useState, useEffect } from "react";
import styles from "./faq.module.css";
import { Plus, Minus, MapPin, Phone, Envelope } from "phosphor-react";

const Faq = () => {
  const [items, setItems] = useState([]);

  const handleToggleClick = (index) => {
    if (index < 0) return;
    const itemsCopy = [...items];
    for (let i = 0; i < itemsCopy.length; i++) {
      let item = Object.assign({}, itemsCopy[i]);

      if (index === i) {
        item.isOpen = !item.isOpen;
      } else {
        item.isOpen = false;
      }

      itemsCopy[i] = item;
    }

    setItems(itemsCopy);
  };

  useEffect(() => {
    const faqs = Object.assign([], data);
    for (let i = 0; i < faqs.length; i++) {
      let item = faqs[i];
      item.isOpen = false;
    }

    setItems(faqs);

    return () => {
      setItems([]);
    };
  }, []);

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.header}`}>Frequently asked questions</div>
      <div>
        {items.map(({ title, content, isOpen }, i) => (
          <div key={i} className={`${styles.item}`}>
            <div
              className={`${styles.head}`}
              onClick={() => handleToggleClick(i)}
            >
              <div className={`${styles.title}`}>{title}</div>
              <div className={`${styles.icon}`}>
                {!isOpen && (
                  <Plus size={12} color="var(--primary-color)" weight="bold" />
                )}
                {isOpen && (
                  <Minus size={12} color="var(--primary-color)" weight="bold" />
                )}
              </div>
            </div>
            {isOpen && <div>{content}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

const data = [
  {
    title: "How does Carter work?",
    content: (
      <div className={`${styles.content}`}>
        <p>
          Carter is a digital platform where you can purchase your new vehicle
          in just 3 simple steps, without having to go directly to a dealership.
          These are:
        </p>
        <br />
        <div>
          <div>
            <b>View and request quotes</b> for a vehicle you are interested in.
          </div>
          <br />
          <div>
            <b>Apply for finance</b> and our team will guide you through the
            entire application process and take care of all the finer details
            for you.
          </div>
          <br />
          <div>
            <b>Take delivery of your new vehicle</b> and welcome to the Carter
            Family as you enjoy your new ride!
          </div>
          <br />
          <div>
            <em>
              Please note, we will still be happy to assist you should you
              prefer to come directly to our dealership.
            </em>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Where are our Carter dealerships and how can you cantact us?",
    content: (
      <div className={`${styles.content}`}>
        <div>
          Our Carter dealerships are currently located in Johannesburg and
          Durban, but we can assist you anywhere in South Africa. If you need to
          visit our physical dealership here are their locations and contact
          details:
        </div>
        <br />
        <div>
          <b>Johannesburg</b>
          <div className={`${styles.meta}`}>
            <div>
              <MapPin
                size={16}
                color="var(--black-200)"
                style={{ marginTop: 2 }}
              />
            </div>
            <div style={{ marginLeft: 8 }}>65 Corlett Drive, Birnam</div>
          </div>
          <div className={`${styles.meta}`}>
            <div>
              <Phone
                size={16}
                color="var(--black-200)"
                style={{ marginTop: 2 }}
              />
            </div>
            <a href="tel:+27100452682" style={{ marginLeft: 8 }}>
              (010) 045-2682
            </a>
          </div>
        </div>
        <br />
        <br />
        <div>
          <b>Durban </b>
          <div className={`${styles.meta}`}>
            <div>
              <MapPin
                size={16}
                color="var(--black-200)"
                style={{ marginTop: 2 }}
              />
            </div>
            <div style={{ marginLeft: 8 }}>
              1 Intersite Avenue, Springfield Park
            </div>
          </div>
          <div className={`${styles.meta}`}>
            <div>
              <Phone
                size={16}
                color="var(--black-200)"
                style={{ marginTop: 2 }}
              />
            </div>
            <a href="tel:+27310450500" style={{ marginLeft: 8 }}>
              (031) 045-0500
            </a>
          </div>
        </div>

        <div className={`${styles.email}`}>
          <div>Send us an email</div>
          <div className={`${styles.meta}`}>
            <div>
              <Envelope
                size={16}
                color="var(--black-200)"
                style={{ marginTop: 2 }}
              />
            </div>
            <a href="mailto:hello@heycarter.co.za" style={{ marginLeft: 8 }}>
              hello@heycarter.co.za
            </a>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "What are the minimum requirements to aply for vehicle finance?",
    content: (
      <div className={`${styles.content}`}>
        <div>
          A<b> valid driver's license</b> is required to apply for vehicle
          finance. However, it is possible to nominate a parent or spouse you
          live with as the driver to proceed further.
        </div>
        <br />
        <div>
          <b>Employment</b> You need to be permanently employed or
          self-employed, earning a minimum of R6500 pm before any deductions.
        </div>
        <br />
        <div>
          <b>Credit profile</b> You cannot be <em>blacklisted</em> or under{" "}
          <em> debt review</em>. We confirm this by means of a free credit
          check.
        </div>
        <br />
        <div>
          <b>Residence</b> You would need to have a valid RSA ID, or it would
          depend on the validity of your work permit and passport.
        </div>
      </div>
    ),
  },
  {
    title: "How long is the finance period?",
    content: (
      <div className={`${styles.content}`}>
        <div>
          The average finance period is <b>72 months/ 6years</b>.
        </div>
        <br />
        <div>
          It is possible to pay off a vehicle in less time, you can select a
          shorter financing period.
        </div>
      </div>
    ),
  },
  {
    title: "Do you have a rent-to-own option?",
    content: (
      <div className={`${styles.content}`}>
        <div>
          We currently do not have a rent to own option, however, we can assist
          you with the following:
        </div>
        <br />
        <div>
          <b>Vehicle Finance</b>: We can assist if you are looking to purchase a
          vehicle through finance, that is, monthly installments.
        </div>
        <br />
        <div>
          <b>Cash purchase</b>: We can also assist if you are looking to
          purchase a vehicle in cash.
        </div>
      </div>
    ),
  },
  {
    title: "Why is my installment different frrom the advertised amount?",
    content: (
      <div className={`${styles.content}`}>
        <div>
          <b>Advertised offer</b>: The advertised offers on all our vehicles are
          subject to qualifying.
        </div>
        <br />
        <div>
          <b>How did you qualify?</b> The installment you qualify for is
          ultimately determined by the banks and is based on your overall credit
          profile and affordability.
        </div>
      </div>
    ),
  },
  {
    title: "How is Carter different?",
    content: (
      <div className={`${styles.content}`}>
        <div>
          We ensure an easier and hassle-free process of buying and owning your
          new vehicle and strive to uphold our Carter values daily, some of
          which are:
        </div>
        <br />
        <div>
          <b>Honesty and Transparency</b>: No hidden costs or results. We keep
          you up to date through every process and aim to provide the highest
          level of service by going the extra mile for you.
        </div>
        <br />
        <div>
          <b>Teamwork</b>: Through teamwork, we are better equipped with the
          means to serve our customers and to ensure a smooth car buying
          process.
        </div>
        <br />
        <div>
          <b>Through technology</b>: We invest in technology and our people to
          make sure the process of buying and owning a vehicle is easier and
          simpler for you. process.
        </div>
      </div>
    ),
  },
];

export default Faq;
