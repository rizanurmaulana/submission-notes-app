import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      limitChar: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const { value } = event.target;
    if (value.length <= this.state.limitChar) {
      this.setState(() => {
        return {
          title: value,
        };
      });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState({ title: "", body: "" });
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <h2>Buat Catatan</h2>
        <p className="note-input__title__char-limit">
          sisa karakter: {this.state.limitChar - this.state.title.length}
        </p>
        <input
          type="text"
          placeholder="Ini adalah judul ..."
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
          required
        />
        <textarea
          className="note-input__body"
          placeholder="Tuliskan catatan disini ..."
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
        ></textarea>
        <button type="submit">Buat</button>
      </form>
    );
  }
}

export default NoteInput;
