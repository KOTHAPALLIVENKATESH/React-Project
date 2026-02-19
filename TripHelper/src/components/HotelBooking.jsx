import { useState } from "react";
import "./hotelbook.css";

const HotelBooking = () => {
  const [step, setStep] = useState("landing");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("");

  // 🔹 HOTEL DATA
  const hotels = [
    {
      id: 1,
      name: "Taj Residency",
      place: "Hyderabad",
      price: 3200,
      rating: 4.6
    },
    {
      id: 2,
      name: "Novotel",
      place: "Hyderabad",
      price: 2800,
      rating: 4.4
    },
    {
      id: 3,
      name: "ITC Grand",
      place: "Chennai",
      price: 3500,
      rating: 4.7
    }
  ];

  const resetAll = () => {
    setStep("landing");
    setLocation("");
    setDate("");
    setSelectedHotel(null);
    setPaymentMethod("");
  };

  return (
    <div className="booking-container">

      {/* ✅ LANDING CARD */}
      {step === "landing" && (
        <div className="landing-screen">
          <div
            className="explore-card"
            onClick={() => setStep("search")}
          >
            <h1>🏨 Explore Hotels</h1>
            <p>Rooms • Homes • Family Stay</p>
          </div>
        </div>
      )}

      {/* ✅ SEARCH (LOCATION REQUIRED) */}
      {step === "search" && (
        <div className="search-bar">

          <button
              className="back-btn"
              onClick={() => setStep("landing")}
            >
              ← Back
          </button>
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
            Search Hotels
          </button>
        </div>
      )}

      {/* ✅ HOTEL LIST */}
      {step === "list" && (
        <div className="vehicle-list">
          <button className="back-btn" onClick={() => setStep("search")}>
            ← Back
          </button>

          {hotels
            .filter((h) =>
              h.place.toLowerCase().includes(location.toLowerCase())
            )
            .map((hotel) => (
              <div key={hotel.id} className="vehicle-card hotel-card">
                <div>
                  <h3>{hotel.name}</h3>
                  <p>📍 {hotel.place}</p>
                  <p>⭐ {hotel.rating}</p>
                </div>

                <div>
                  <p className="price">₹ {hotel.price}</p>
                  <button
                    onClick={() => {
                      setSelectedHotel(hotel);
                      setStep("payment");
                    }}
                  >
                    Book Room
                  </button>
                </div>
              </div>
            ))}

          {/* no results */}
          {hotels.filter((h) =>
            h.place.toLowerCase().includes(location.toLowerCase())
          ).length === 0 && (
            <p style={{ textAlign: "center", marginTop: "30px" }}>
              ❌ No hotels found in this location
            </p>
          )}
        </div>
      )}

      {/* ✅ PAYMENT */}
      {step === "payment" && (
        <div className="payment-screen">
          <button className="back-btn" onClick={() => setStep("list")}>
            ← Back
          </button>

          <h2>Booking Summary</h2>
          <p><strong>Hotel:</strong> {selectedHotel.name}</p>
          <p><strong>City:</strong> {selectedHotel.place}</p>
          <p><strong>Date:</strong> {date}</p>
          <p><strong>Total:</strong> ₹ {selectedHotel.price}</p>

          <div className="payment-methods">
            <button
              className={paymentMethod === "UPI" ? "active-pay" : ""}
              onClick={() => setPaymentMethod("UPI")}
            >
              UPI
            </button>

            <button
              className={paymentMethod === "Card" ? "active-pay" : ""}
              onClick={() => setPaymentMethod("Card")}
            >
              Card
            </button>
          </div>

          {paymentMethod && (
            <button
              className="pay-btn"
              onClick={() => setStep("success")}
            >
              Pay Now
            </button>
          )}
        </div>
      )}

      {/* ✅ SUCCESS */}
      {step === "success" && (
        <div className="success-screen">

          <button
              className="back-btn"
              onClick={resetAll}
            >
              ← Home
          </button>
          <h1>✅ Hotel Booked Successfully!</h1>
          <p>{selectedHotel.name} is confirmed.</p>
          <p>Booking ID: HTL{Math.floor(Math.random() * 100000)}</p>
          <button onClick={resetAll}>Book Another Hotel</button>
        </div>
      )}
    </div>
  );
};

export default HotelBooking;


