export default function ParticipantItem({
  participant,
  handleRemoveParticipant,
}) 
{
  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <span>
        {participant.firstName} {participant.lastName}
      </span>
      <button
        className="btn btn-sm btn-outline-danger"
        onClick={() => handleRemoveParticipant(participant.id)}
      >
        <i className="bi bi-trash-fill"></i>
      </button>
    </li>
  );
}
