export default function FormParticipantsData({handleAddParticipant, newParticipant, handleParticipantChange, newTrip, participants, saved, isCompiled, handleForm, handleRemoveParticipant}) {
  return (
    <>
      <h1 className="py-4 mt-4">Aggiungi partecipanti</h1>
      <p className="text-muted mb-4">
        Viaggio: <strong>{newTrip.destination}</strong>
      </p>

      <form onSubmit={handleAddParticipant}>
        <div className="card p-4 mb-4 border-0 shadow-sm">
          <div className="row g-2">
            <div className="col-md-6">
              <input
                className="form-control"
                placeholder="Nome *"
                name="firstName"
                value={newParticipant.firstName}
                onChange={handleParticipantChange}
              />
            </div>
            <div className="col-md-6">
              <input
                className="form-control"
                placeholder="Cognome *"
                name="lastName"
                value={newParticipant.lastName}
                onChange={handleParticipantChange}
              />
            </div>
            <div className="col-md-6">
              <input
                className="form-control"
                placeholder="Telefono"
                name="phone"
                value={newParticipant.phone}
                onChange={handleParticipantChange}
              />
            </div>
            <div className="col-md-6">
              <input
                className="form-control"
                placeholder="Email"
                name="email"
                value={newParticipant.email}
                onChange={handleParticipantChange}
              />
            </div>
            <div className="col-md-6">
              <input
                className="form-control"
                placeholder="Codice Fiscale"
                name="fiscalCode"
                value={newParticipant.fiscalCode}
                onChange={handleParticipantChange}
              />
            </div>
          </div>
          <button
            className="btn btn-outline-primary mt-3"
            type="submit"
            onClick={handleAddParticipant}
          >
            + Aggiungi partecipante
          </button>
        </div>
      </form>

      {participants.length > 0 && (
        <div className="card p-4 mb-4 border-0 shadow-sm">
          <h5 className="fw-bold mb-3">Partecipanti ({participants.length})</h5>
          <ul className="list-group list-group-flush">
            {participants.map((participant) => (
              <li
                key={participant.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>
                  {participant.firstName} {participant.lastName}
                </span>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => handleRemoveParticipant(participant.id)}
                >
                  Rimuovi
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {saved && (
        <p className="text-success fw-bold">
          ✅ Viaggio salvato con successo! Reinderizzamento...
        </p>
      )}

      {!isCompiled && (
        <p className="text-danger fw-bold">
          ❌ Compila i campi obbligatori per aggiungere un partecipante
        </p>
      )}

      <div className="d-flex gap-2">
        <button className="btn btn-outline-primary" onClick={() => setStep(1)}>
          Indietro
        </button>
        <button
          className={`btn btn-outline-success ${participants.length === 0 ? "disabled" : ""}`}
          onClick={handleForm}
        >
          💾 Salva viaggio
        </button>
      </div>
    </>
  );
}
