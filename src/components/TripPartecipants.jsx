import { useState } from "react";
import PartecipantsModal from "./ParticipantsModal";

export default function TripPartecipants({ participant, onSelect }) {
  return (
    <div className="col-md-4 mb-4" key={participant.id}>
      <div
        className="card custom-card h-100 text-center border-0 custom_pointer"
        onClick={() => onSelect(participant)}
      >
        <div className="card-body border rounded-2">
          <div className="avatar mb-3">{participant.firstName?.charAt(0)}</div>

          <h5 className="fw-bold mb-1">
            {participant.firstName} {participant.lastName}
          </h5>

          <p className="text-muted small">Partecipante</p>
        </div>
      </div>
    </div>
  );
}
