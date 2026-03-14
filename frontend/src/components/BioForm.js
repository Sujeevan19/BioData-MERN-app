import { useState } from "react";
import API from "../services/api";

function BioForm() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await API.post("/bio-api", form);
      alert("Bio added");
      setForm({
        name: "",
        age: "",
        gender: "",
        phone: "",
        address: "",
      });
    } catch (err) {
      console.error(err);
      alert("Failed to add bio. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="form" onSubmit={submit}>
      <div className="form-grid">
        <div className="form-field">
          <label>Name</label>
          <input
            className="input"
            placeholder="Full name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>

        <div className="form-field">
          <label>Age</label>
          <input
            className="input"
            type="number"
            placeholder="Age"
            value={form.age}
            onChange={(e) => setForm({ ...form, age: e.target.value })}
            required
          />
        </div>

        <div className="form-field">
          <label>Gender</label>
          <input
            className="input"
            placeholder="Gender"
            value={form.gender}
            onChange={(e) => setForm({ ...form, gender: e.target.value })}
          />
        </div>

        <div className="form-field">
          <label>Phone</label>
          <input
            className="input"
            placeholder="Phone number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>
      </div>

      <div className="form-field">
        <label>Address</label>
        <input
          className="input"
          placeholder="Address"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />
      </div>

      <button className="btn btn-primary" disabled={loading}>
        {loading ? "Saving..." : "Add Bio"}
      </button>
    </form>
  );
}

export default BioForm;