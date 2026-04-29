import { useParams } from "react-router-dom";
import { useTrips } from "../context/TripsContext";
import TripPartecipants from "../components/TripPartecipants";
import { useState } from "react";
import PartecipantsModal from "../components/ParticipantsModal";

export default function SingleTrip() {
  const { id } = useParams();
  const { trips } = useTrips();

  const [search, setSearch] = useState("");
  const [selectedParticipant, setSelectedParticipant] = useState(null);

  const trip = trips.find((trip) => trip.id === Number(id));

  if(!trip) {
    return <p>Viaggio non trovato</p>
  }
  const filteredParticipants = trip.participants.filter((participant) => {
    const fullName =
      `${participant.firstName} ${participant.lastName}`.toLowerCase();
    return fullName.includes(search.toLowerCase());
    console.log(filteredParticipants);
  });

  return (
    <>
      <section>
        <div className="container">
          <div className="text-center">
            <h1 className="fw-bold mt-5">{trip.destination}</h1>
            <p className="text-secondary fw-medium">
              Ecco la lista dei partecipanti al viaggio
            </p>
            <form className="d-flex justify-content-end ms-auto w-auto mt-5">
              <input
                className="form-control mb-4"
                type="search"
                placeholder="Search"
                style={{ width: "250px" }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>
            <div className="row">
              {filteredParticipants.map((participant) => (
                <TripPartecipants
                  key={participant.id}
                  participant={participant}
                  onSelect={setSelectedParticipant}
                />
              ))}
            </div>

            {selectedParticipant && (
              <PartecipantsModal
                participant={selectedParticipant}
                onClose={() => setSelectedParticipant(null)}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
