import TripsList from "../components/TripsList";
import { useTrips } from "../context/TripsContext";

export default function HomePage() {

  const { trips } = useTrips()

  return (
    <>
      <section>
        <div className="container my-5 py-5">
          <h1 className="pb-4 fw-bold">Trips List</h1>
          <div className="row g-4">
            <div className="col">
              <ul className="list-group list-group-flush border rounded-3">
                {trips.map((trip) => (
                  <TripsList trip={trip} key={trip.id} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
