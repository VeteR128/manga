import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import options from "../utils/constants";
import axios from "axios";
const FormSubmit = ({ animeList }) => {
  const [url, seturl] = useState("");
  let form = useRef(null);
  useEffect(() => {
    gsap.fromTo(form, { opacity: 0 }, { opacity: 1, duration: 3 });
  }, []);

  const showResult = async () => {
    options.params.url = url;
    form.reset();
    try {
      const response = await axios.request(options);
      animeList(response.data.result);
    } catch (error) {
      console.error(error);
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
