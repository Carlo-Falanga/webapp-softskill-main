export default function FormTripData({
  handleNextStep,
  newTrip,
  handleChange,
}) {
  return (
    <>
      <h1 className="py-4 mt-4">Crea un nuovo viaggio</h1>
      <form onSubmit={handleNextStep}>
        <div className="card p-4 mb-4 border-0 shadow-sm">

        <div className="row g-3">
          <div className="col-12">
            <label htmlFor="destination" className="form-label">
              Destinazione
            </label>
            <input
              type="text"
              className="form-control"
              id="destination"
              placeholder="Es: Roma, Parigi, Collegiove..."
              name="destination"
              value={newTrip.destination}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-12 col-md-6">
            <label htmlFor="startDate" className="form-label">
              Data di inizio
            </label>
            <input
              type="date"
              className="form-control"
              id="startDate"
              name="startDate"
              value={newTrip.startDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-12 col-md-6">
            <label htmlFor="endDate" className="form-label">
              Data di fine
            </label>
            <input
              type="date"
              className="form-control"
              id="endDate"
              name="endDate"
              value={newTrip.endDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col d-flex justify-content-end ">
            <button type="submit" className="btn px-4 custom_button text-white">
              Avanti <i className="bi bi-arrow-right"></i> Aggiungi partecipanti
            </button>
          </div>
        </div>

        </div>
      </form>
    </>
  );
}
