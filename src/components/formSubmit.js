import React from "react";

class FormSubmit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 1,
    };
  }
  render() {
    return (
      <form className="form" ref={(el) => (this.form = el)}>
        <input
          className="form__url"
          placeholder="Ссылка на картинку"
          onChange={(e) => this.setState({ url: e.target.value })}
        />
        <input
          className="form__button"
          value={"Искать картинку"}
          onClick={() => {
            this.form.reset();
            this.props.onAdd({ url: this.state.url });
          }}
          type={"button"}
        ></input>
      </form>
    );
  }
}
export default FormSubmit;
