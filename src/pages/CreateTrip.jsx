import { useState } from "react";
import { useTrips } from "../context/TripsContext";
import { useNavigate } from "react-router-dom";
import FormTripData from "../components/FormTripData";
import FormParticipantsData from "../components/FormParticipantsData";

export default function CreateTrip() {
  const { trips, addTrip } = useTrips();
  const navigate = useNavigate();
  const [participants, setParticipants] = useState([]);
  const [step, setStep] = useState(1);
  const [saved, setSaved] = useState(false);
  const [isCompiled, setIsCompiled] = useState(true);

  const [newTrip, setNewTrip] = useState({
    destination: "",
    startDate: "",
    endDate: "",
  });

  const [newParticipant, setNewParticipant] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    fiscalCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewTrip({
      ...newTrip,
      [name]: value,
    });
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleParticipantChange = (e) => {
    const { name, value } = e.target;
    setNewParticipant({
      ...newParticipant,
      [name]: value,
    });
  };

  const handleAddParticipant = (e) => {
    e.preventDefault();
    if (!newParticipant.firstName || !newParticipant.lastName) {
      setIsCompiled(false);
      return;
    }
    setIsCompiled(true);
    setParticipants([
      ...participants,
      {
        ...newParticipant,
        id: participants.length + 1,
      },
    ]);

    setNewParticipant({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      fiscalCode: "",
    });
  };

  const handleRemoveParticipant = (id) => {
    setParticipants(
      participants.filter((participant) => participant.id !== id),
    );
  };

  const handleForm = (e) => {
    e.preventDefault();

    const tripId = {
      ...newTrip,
      id: trips.length + 1,
      participants: participants,
    };

    addTrip(tripId);
    setSaved(true);
    console.log("Creo il viaggio:", tripId);

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col">
            {step === 1 && (
                <FormTripData handleNextStep={handleNextStep} newTrip={newTrip} handleChange={handleChange} />
            )}

            {step === 2 && (
              <FormParticipantsData handleAddParticipant={handleAddParticipant} newParticipant={newParticipant} handleParticipantChange={handleParticipantChange} newTrip={newTrip} participants={participants} saved={saved} isCompiled={isCompiled} handleForm={handleForm} handleRemoveParticipant={handleRemoveParticipant} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
