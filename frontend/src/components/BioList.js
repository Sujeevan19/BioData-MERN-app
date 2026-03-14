import { useEffect, useState } from "react";
import API from "../services/api";

function BioList() {
  const [bios, setBios] = useState([]);

  const getBios = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const res = await API.get("/bio-api");
    setBios(res.data);
  };

  useEffect(() => {
    getBios();
  }, []);

  const del = async (id) => {
    await API.delete("/bio-api/" + id);
    getBios();
  };

  if (!bios.length) {
    return <p className="muted-text">No bios found yet.</p>;
  }

  return (
    <div className="bio-list">
      {bios.map((b) => (
        <div className="bio-card" key={b._id}>
          <div className="bio-card-main">
            <h3>{b.name}</h3>
            <p className="bio-meta">
              <span>{b.age} years</span>
              {b.gender && <span>• {b.gender}</span>}
            </p>
            {b.phone && <p className="bio-detail">📞 {b.phone}</p>}
            {b.address && <p className="bio-detail">📍 {b.address}</p>}
          </div>
          <button
            className="btn btn-danger btn-small"
            onClick={() => del(b._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default BioList;

