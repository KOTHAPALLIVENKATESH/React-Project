import { useState } from "react";
// import "./guide.css";

const TripGuideBooking = () => {
  const [step, setStep] = useState("landing");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [bookingDone, setBookingDone] = useState(false);

  // 🔹 GUIDE DATA
  const guides = [
    {
      id: 1,
      name: "Ravi Kumar",
      place: "Hyderabad",
      languages: "English, Hindi, Telugu",
      experience: "5 Years",
      price: 1500,
      rating: 4.6
    },
    {
      id: 2,
      name: "Suresh Patel",
      place: "Hyderabad",
      languages: "English, Hindi",
      experience: "8 Years",
      price: 1800,
      rating: 4.8
    },
    {
      id: 3,
      name: "Arun Sharma",
      place: "Chennai",
      languages: "English, Tamil",
      experience: "6 Years",
      price: 1400,
      rating: 4.5
    },
    {
      id: 4,
      name: "venkatesh",
      place: "vizag",
      languages: "English, Telugu",
      experience: "4 Years",
      price: 1500,
      rating: 4.4
    },
     {
      id: 5,
      name: "sai kumar",
      place: "Bangalore",
      languages: "English, kannada",
      experience: "5 Years",
      price: 1600,
      rating: 4.5
    },
     {
      id: 6,
      name: "Peter",
      place: "Goa",
      languages: "English, Tamil,spanish",
      experience: "6.5 Years",
      price: 2200,
      rating: 4.5
    },
     {
      id: 7,
      name: "Raj Sharma",
      place: "Mumbai",
      languages: "English, Hindi",
      experience: "7 Years",
      price: 1800,
      rating: 4.5
    },
    
  ];

  const resetAll = () => {
    setStep("landing");
    setLocation("");
    setDate("");
    setSelectedGuide(null);
    setBookingDone(false);
  };

  return (
    <div className="booking-container guide-right">

      {/* ✅ LANDING */}
      {step === "landing" && (
        <div className="landing-screen">
          <div
            className="explore-card"
            onClick={() => setStep("search")}
          >
            <h1>🧭 Explore Tourist Guides</h1>
            <p>Local Experts • Verified Guides • Easy Booking</p>
          </div>
        </div>
      )}

      {/* ✅ SEARCH */}
      {step === "search" && (
        <>
          <button className="back-btn" onClick={() => setStep("landing")}>
            ← Back
          </button>

          <div className="search-bar">
            <input
              placeholder="Enter City (Required)"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            <button
              disabled={!location || !date}
              onClick={() => setStep("list")}
            >
              Search Guides
            </button>
          </div>
        </>
      )}

      {/* ✅ GUIDE LIST */}
      {step === "list" && (
        <div className="vehicle-list">
          <button className="back-btn" onClick={() => setStep("search")}>
            ← Back
          </button>

          {guides
            .filter((g) =>
              g.place.toLowerCase().includes(location.toLowerCase())
            )
            .map((guide) => (
              <div key={guide.id} className="vehicle-card guide-card">
                <div>
                  <h3>{guide.name}</h3>
                  <p>📍 {guide.place}</p>
                  <p>🗣️ {guide.languages}</p>
                  <p>🎯 {guide.experience}</p>
                  <p>⭐ {guide.rating}</p>
                </div>

                <div>
                  <p className="price">₹ {guide.price}</p>
                  <button
                    onClick={() => {
                      setSelectedGuide(guide);
                      setStep("summary");
                    }}
                  >
                    Book Guide
                  </button>
                </div>
              </div>
            ))}

          {guides.filter((g) =>
            g.place.toLowerCase().includes(location.toLowerCase())
          ).length === 0 && (
            <p style={{ textAlign: "center", marginTop: 30 }}>
              ❌ No guides available
            </p>
          )}
        </div>
      )}

      {/* ✅ SUMMARY */}
      {step === "summary" && (
        <div className="payment-screen">
          <button className="back-btn" onClick={() => setStep("list")}>
            ← Back
          </button>

          <h2>Guide Booking Summary</h2>
          <p><strong>Name:</strong> {selectedGuide.name}</p>
          <p><strong>City:</strong> {selectedGuide.place}</p>
          <p><strong>Date:</strong> {date}</p>
          <p><strong>Amount:</strong> ₹ {selectedGuide.price}</p>

          {!bookingDone ? (
            <button
              className="pay-btn"
              onClick={() => setBookingDone(true)}
            >
              Confirm Booking
            </button>
          ) : (
            <button className="status-btn">
              ✅ Booking Confirmed
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default TripGuideBooking;