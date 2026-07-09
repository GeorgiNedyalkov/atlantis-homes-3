// Central content module for the Atlantis Homes III site.
// Image assets are served directly from the original Framer CDN.

const img = (id: string) => `https://framerusercontent.com/images/${id}`;

export const siteConfig = {
  name: "Atlantis Homes III",
  tagline:
    "Three minutes from the beach, with open sea views. Atlantis Homes 3 brings refined coastal architecture, generous light, and a daily rhythm that balances privacy with resort-style ease.",
  phone: "+359 888 86 86 44",
  phoneHref: "tel:+359888868644",
  email: "georgi@novipropertygroup.com",
};

export const navLinks = [
  { label: "Residences", href: "#residences" },
  { label: "Features", href: "#features" },
  { label: "Location", href: "#location" },
  { label: "FAQs", href: "#faq" },
  { label: "Enquiries", href: "#contact" },
];

export const heroMedia = {
  video: "https://framerusercontent.com/assets/SFm4WAnykkxpu5uqSkaUvT02HY.mp4",
  poster: img("YDJxZ85pEM2WAZhsTuAmAP6mXc.jpeg"),
};

export const introImage = img("rpVmaGm8QBIsbjBPgx55YrBxgc.jpeg");

export const featureSlides = [
  {
    tag: "Master Craftsmanship",
    heading: "Custom made, fully equipped kitchen",
    body: "Custom made, fully equipped kitchen, bespoke joinery and meticulously finished details throughout.",
    label: "Kitchen",
    image: img("pQXavYSRJX7fYacUNnQ6lriT9M.jpeg"),
  },
  {
    tag: "Beautiful Views",
    heading: "Framed sea outlooks from every level",
    body: "Framed sea outlooks from key rooms, with two rooftop terraces to enjoy sunrise and sunset.",
    label: "Terrace",
    image: img("iaA0bKmwVIzvl2Q8hpW9uXSY6k.jpeg"),
  },
  {
    tag: "Custom ROCA Furniture",
    heading: "Spa-like en-suite bathrooms",
    body: "Every bedroom features an en-suite finished with ROCA fittings and cosy floor heating for a spa-like feel.",
    label: "Bathroom",
    image: img("dLKboA4LvQQ6OYkKvlZxJCxM.jpeg"),
  },
  {
    tag: "Fully Turnkey",
    heading: "Move-in ready living spaces",
    body: "Move-in ready: semi-furnished with designer Italian pieces and a fully equipped, custom-made kitchen.",
    label: "Living Room",
    image: img("ndb5ChLwVgdW4ZgBzJYZ8OtjXFI.jpeg"),
  },
  {
    tag: "Beautiful Views",
    heading: "Two private rooftop terraces",
    body: "Framed sea outlooks from key rooms, with two rooftop terraces to enjoy sunrise and sunset.",
    label: "Sun Terrace",
    image: img("cYq132FqHkJWecWaaxMacCjQKk.jpeg"),
  },
  {
    tag: "Fully Turnkey",
    heading: "A private, sunny courtyard",
    body: "Move-in ready: semi-furnished with designer Italian pieces and a private sunny patio for every home.",
    label: "Courtyard",
    image: img("dzkntKUmDSDj7SGfsEQhXxyAY.jpeg"),
  },
];

export const gallery = [
  img("UEGrYiXrs3BwvJM2hD6xnO9INlo.jpeg"),
  img("ftVTaZmI8bOSjDmSxUL7Cp7UPmk.jpeg"),
  img("Ruc8BkixHU6iY5EZwtkK6mq5c.jpeg"),
  img("7T491ghvltKIPjrxCeqoOjfoJ0.jpeg"),
  img("xzDElCjAHFZS9GlW1iuPR4OatTY.jpeg"),
  img("dOmFp1YabsvzNZlchIQyP7KQ.jpeg"),
  img("4fRall5y9eBgAhO9qM7PZA114.jpeg"),
  img("aRmI67NXLYgta2V1bcS5QCh96Y.jpg"),
  img("9clrw8wzWXOSvBsLHf4gVwEc.jpeg"),
];

export const featureTabs = [
  {
    label: "Living Spaces",
    body: "Open-plan rooms bathed in natural light, flowing from lounge to dining to a custom, fully equipped kitchen—proportioned for everyday ease and effortless hosting.",
  },
  {
    label: "Outdoor Spaces",
    body: "Two private rooftop terraces and a sun-warmed courtyard extend every home outward, framing open sea views for morning coffee or evening gatherings.",
  },
  {
    label: "Bedrooms & Bathrooms",
    body: "Every bedroom is en-suite, finished with ROCA fittings, cosy floor heating and calm, considered materials for a spa-like feel year-round.",
  },
  {
    label: "Crafted Details",
    body: "Bespoke joinery, natural stone and meticulously finished details run throughout—furniture and fixtures selected for lasting quality, not trend.",
  },
];

export const residenceStats = [
  {
    value: 4,
    suffix: "",
    label: "Beautifully designed houses",
    body: "Modern coastal architecture and crafted interiors.",
  },
  {
    value: 100,
    suffix: "%",
    label: "Bedrooms (en-suite)",
    body: "ROCA fittings with warm floor heating in every bedroom.",
  },
  {
    value: 2,
    suffix: "",
    label: "Outdoor spaces per home",
    body: "Two rooftop terraces plus a private sunny patio.",
  },
];

export const aboutResidencesImage = img("lzmvxuctPVSByJN7JAE2Lx3imuE.jpeg");

export const locationImage = img("lZ3W9vQmOMQz8Na9AL0I9dQrk.jpeg");

export const ctaBannerImage = img("mFA3OcQEbG6daaM69Ra6Rw4.jpeg");

export const companyImage = "/g.jpeg";

export const companyStats = [
  { value: 14, suffix: "", label: "Completed Projects" },
  { value: 45, suffix: "+", label: "Clients Served" },
  { value: 8500, suffix: " m²", label: "Gross Floor Area Developed" },
];

export const companyNote = {
  eyebrow: "About us",
  heading: "A Note from the Developers",
  body: "The path of the developers began 30 years ago when their father and now grandfather laid the first foundations in construction back in the communist era. In the early 2000’s our father and uncle completed their first project, laying the foundation for a successful career that today includes over 14 completed projects. As third generation builders, NOVI Property Group – uniting two brothers and their father – continues the tradition, combining sophisticated design with modern architecture. Our mission is to build not just buildings, but complete neighbourhoods where luxury, comfort and elegance meet the highest standards of quality.",
};

export const faqItems = [
  {
    question: "How close is the sea?",
    answer: "Around three minutes by view/walk, with immediate coastal access.",
  },
  {
    question: "Who are the homes for?",
    answer:
      "Discerning buyers seeking a refined seaside address with wellness, sport and hosting at its core.",
  },
  {
    question: "Can I view a show home?",
    answer: "Yes – book a private appointment via the form above.",
  },
  {
    question: "Are the homes furnished?",
    answer:
      "A semi-furnished specification is included; selected elements can be tailored—please confirm at viewing.",
  },
  {
    question: "Do you offer design consultation?",
    answer: "Selected interior elements can be tailored. Options available on request.",
  },
  {
    question: "What amenities are nearby?",
    answer:
      "Everyday essentials and a spa/wellness centre are nearby, along with tennis, fitness facilities, and yachting opportunities.",
  },
];

export const contactImage = img("inSHYmGRhHxFmfHYqdIJsUjNaM.jpg");
