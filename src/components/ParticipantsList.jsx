import ParticipantItem from "./ParticipantItem";

export default function ParticipantsList({
  participants,
  handleRemoveParticipant,
}) {
  return (
    <div className="card p-4 mb-4 border-0 shadow-sm">
      <h5 className="fw-bold mb-3">Partecipanti ({participants.length})</h5>
      <ul className="list-group list-group-flush">
        {participants.map((participant) => (
          <ParticipantItem
            key={participant.id}
            participant={participant}
            handleRemoveParticipant={handleRemoveParticipant}
          />
        ))}
      </ul>
    </div>
  );
}
