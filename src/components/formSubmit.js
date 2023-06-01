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
      <form ref={(el) => (this.form = el)}>
        <input
          placeholder="Ссылка на картинку"
          onChange={(e) => this.setState({ url: e.target.value })}
        />
        <input
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
