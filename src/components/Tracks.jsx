import "../styles/tracks.css";

const Tracks = ({ tracks }) => {
  return (
    <section className="tracks-section mb-12">
      <h2 className="text-2xl font-bold mb-3">// Tracks</h2>

      <ul className="tracks-section-unordered-list flex gap-5 flex-col md:grid grid-cols-2 lg:flex lg:flex-1 lg:flex-row">
        {tracks.map((track) => (
          <li
            className="tracks-section-list-item p-2"
            style={{ color: track.color, border: `1px solid ${track.color}` }}
            key={track.id}
          >
            <h3 className="font-bold mb-2">{track.name}</h3>
            <p className="font-extralight">{track.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Tracks;
