import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import options from "../utils/constants";
import axios from "axios";
const FormSubmit = ({ animeList }) => {
  const [url, seturl] = useState("");
  let form = useRef(null);
  let err = [
    {
      anilist: 1845,
      episode: 11,
      filename: "Не получилось найти картинку.=(",
      from: 918.17,
      image:
        "https://quasa.io/storage/images/news/1wy7s2BEZhuJaqYsay2yO8QkAYe76BvTD1K7A7Gt.png",
      similarity: 0.7466105439142234,
      to: 918.33,
    },
  ];
  useEffect(() => {
    gsap.fromTo(form, { opacity: 0 }, { opacity: 1, duration: 3 });
  }, []);

  const showResult = async () => {
    options.params.url = url;
    form.reset();
    try {
      const response = await axios.request(options);
      animeList(response.data.result);
      console.log(response.data.result);
    } catch (error) {
      animeList(err);
    }
  };

  return (
    <form
      className="form"
      ref={(el) => {
        form = el;
      }}
    >
      <input
        className="form__url"
        placeholder="Ссылка на картинку"
        onChange={(e) => seturl(e.target.value)}
      />
      <input
        className="form__button"
        value={"Искать картинку"}
        onClick={showResult}
        type={"button"}
      ></input>
    </form>
  );
};

export default FormSubmit;
