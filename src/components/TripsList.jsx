import { Link } from 'react-router-dom'

export default function TripsList({ trip }) {
  return (
    <Link className='text-decoration-none text-black' to={`/singletrip/${trip.id}`}>
    <li
      className="list-group-item d-flex justify-content-between align-items-center py-3"
      key={trip.id}>
        <span className="fw-bold">{trip.destination}</span>
      <div className="px-4">
        <span className="badge bg-success rounded-pill mx-4 fw-medium px-4 py-2 custom_pill">
          <span className="">Inizio:</span> {trip.startDate}
        </span>
        <span className="badge text-bg-primary rounded-pill fw-medium px-4 py-2 custom_pill">
          Fine: {trip.endDate}
        </span>
      </div>

    </li>
      </Link>
  );
}
