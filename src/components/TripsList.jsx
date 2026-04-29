import { Link } from 'react-router-dom'

export default function TripsList({ trip }) {
  return (
    <Link className='text-decoration-none text-black' to={`/singletrip/${trip.id}`}>
    <li
      className="list-group-item d-md-flex justify-content-between align-items-center d-block m-md-0 py-3"
      key={trip.id}>
        <span className="fw-bold">{trip.destination}</span>
      <div>
        <span className="badge bg-success rounded-pill  fw-medium px-4 py-2 me-3 mx-md-5 mt-3 mt-md-0 custom_pill">
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
