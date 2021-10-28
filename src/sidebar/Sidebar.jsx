const Sidebar = ({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) => {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1 className="big-title">React Notepad</h1>
        <button onClick={onAddNote}>Ajouter</button>
      </div>
      <div className="app-sidebar-notes">
        {sortedNotes.map(({ id, title, body, lastModified }, i) => (
          <div
            className={`app-sidebar-note ${id === activeNote && "active"}`}
            onClick={() => setActiveNote(id)}
          >
            <div className="sidebar-note-title">
              <strong className="strong-title">{title}</strong>
              <button onClick={(e) => onDeleteNote(id)}>Supprimer</button>
            </div>

            <p className="body-text">{body && body.substr(0, 100) + "..."}</p>
            <small className="note-meta">
              Dernière modification{" "}
              {new Date(lastModified).toLocaleDateString("fr-FR", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
