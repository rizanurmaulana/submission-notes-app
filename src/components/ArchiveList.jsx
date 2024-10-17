import React from "react";
import ArchiveItem from "./ArchiveItem";

function ArchiveList({ notes, onDelete, onArchive }) {
  if (notes.filter((note) => note.archived).length === 0) {
    return (
      <div className="notes-list__empty-message">
        <p>Catatan Tidak Tersedia</p>
      </div>
    );
  }

  return (
    <div className="notes-list">
      {notes
        .filter((note) => note.archived)
        .map((note) => (
          <ArchiveItem
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onArchive={onArchive}
            {...note}
          />
        ))}
    </div>
  );
}

export default ArchiveList;
