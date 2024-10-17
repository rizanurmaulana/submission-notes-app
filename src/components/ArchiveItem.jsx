import React from "react";
import ActiveButton from "./ActiveButton";
import DeleteButton from "./DeleteButton";
import NoteItemBody from "./NoteItemBody";

function ArchiveItem({ title, createdAt, body, id, onDelete, onArchive }) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <NoteItemBody title={title} createdAt={createdAt} body={body} />
      </div>
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        <ActiveButton id={id} onArchive={onArchive} />
      </div>
    </div>
  );
}

export default ArchiveItem;
