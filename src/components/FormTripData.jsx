export default function FormTripData({handleNextStep, newTrip, handleChange}) {
  return (
    <>
      <h1 className="py-4 mt-4">Create a new trip</h1>
      <form onSubmit={handleNextStep}>
        <div className="row g-3">
          <div className="col-12">
            <label htmlFor="destination" className="form-label">
              Destination
            </label>
            <input
              type="text"
              className="form-control"
              id="destination"
              placeholder="Frattamaggiore"
              name="destination"
              value={newTrip.destination}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-12 col-md-6">
            <label htmlFor="startDate" className="form-label">
              Start Date
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
              End Date
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
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Avanti
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
