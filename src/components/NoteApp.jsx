import React from "react";
import { getInitialData, showFormattedDate } from "../utils/index";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";
import ArchiveList from "./ArchiveList";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchTerm: "",
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
          },
        ],
      };
    });
  }

  onSearchHandler(event) {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          archived: !note.archived,
        };
      }
      return note;
    });
    this.setState({ notes });
  }

  render() {
    const filteredNotes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );

    return (
      <div className="note-app">
        <div className="note-app__header">
          <h1>Notes</h1>
          <div className="note-search">
            <input
              type="text"
              placeholder="Cari catatan..."
              value={this.state.searchTerm}
              onChange={this.onSearchHandler}
            />
          </div>
        </div>
        <div className="note-app__body">
          <div className="note-input">
            <NoteInput addNote={this.onAddNoteHandler} />
          </div>
          <h2>Catatan Aktif</h2>
          <NoteList
            notes={filteredNotes.filter((note) => !note.archived)}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
          <h2>Arsip</h2>
          <ArchiveList
            notes={filteredNotes.filter((note) => note.archived)}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
        </div>
      </div>
    );
  }
}

export default NoteApp;
