import ParticipantsList from "./ParticipantsList";

export default function FormParticipantsData({
  handleAddParticipant,
  newParticipant,
  handleParticipantChange,
  newTrip,
  participants,
  saved,
  isCompiled,
  handleForm,
  handleRemoveParticipant,
  setStep,
}) {
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
            className="btn px-4 text-white custom_button mt-4"
            type="submit"
            onClick={handleAddParticipant}
          >
            + Aggiungi partecipante
          </button>
        </div>
      </form>

      {participants.length > 0 && (
        <ParticipantsList
          participants={participants}
          handleRemoveParticipant={handleRemoveParticipant}
        />
      )}
      {saved && (
        <p className="text-success fw-bold">
          <i className="bi bi-check-square-fill">Viaggio salvato con successo! Reinderizzamento...</i> 
        </p>
      )}

      {!isCompiled && (
        <p className="text-danger fw-bold">
          ❌ Compila i campi obbligatori per aggiungere un partecipante
        </p>
      )}

      <div className="d-flex justify-content-between gap-2">
        <button
          className="btn px-4 text-white custom_button"
          onClick={() => setStep(1)}
        >
          <i className="bi bi-arrow-left"> Indietro</i>
        </button>
        <button
          className={`btn btn-success px-4 text-white custom_save_button  ${participants.length === 0 ? "disabled" : ""}`}
          onClick={handleForm}
        >
          <i className="bi bi-floppy2"></i> Salva viaggio
        </button>
      </div>
    </>
  );
}
