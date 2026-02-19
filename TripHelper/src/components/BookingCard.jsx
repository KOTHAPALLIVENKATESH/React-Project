
import { useState } from "react";
import "./Travel.css";
// import vehicles from './traveldata.js'

const TravelBooking = () => {
  const [showBooking, setShowBooking] = useState(false);
  const [step, setStep] = useState("search");
  const [type, setType] = useState("bus");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("");

  const vehicles = {
  bus: [
    { id: 1, name: "Orange Travels", time: "10:00 PM", price: 1200 },
    { id: 2, name: "VRL Travels", time: "09:30 PM", price: 1500 },
    { id: 3, name: "SRS Travels", time: "08:45 PM", price: 1100 },
    { id: 4, name: "Kaveri Travels", time: "11:15 PM", price: 1400 },
    { id: 5, name: "Morning Star", time: "07:30 PM", price: 1000 },
    { id: 6, name: "Green Line", time: "09:00 PM", price: 1350 },
    { id: 7, name: "National Travels", time: "10:45 PM", price: 1250 },
    { id: 8, name: "Jabbar Travels", time: "08:00 PM", price: 1150 },
    { id: 9, name: "SVR Travels", time: "06:30 PM", price: 950 },
    { id: 10, name: "Kesineni Travels", time: "11:50 PM", price: 1550 }
  ],

  train: [
    { id: 1, name: "Rajdhani Express", time: "06:00 AM", price: 2200 },
    { id: 2, name: "Shatabdi Express", time: "07:30 AM", price: 1800 },
    { id: 3, name: "Duronto Express", time: "09:15 AM", price: 2000 },
    { id: 4, name: "Garib Rath", time: "05:45 AM", price: 1500 },
    { id: 5, name: "Vande Bharat", time: "08:00 AM", price: 2500 },
    { id: 6, name: "Intercity Express", time: "02:30 PM", price: 1200 },
    { id: 7, name: "Superfast Express", time: "11:10 AM", price: 1700 },
    { id: 8, name: "Jan Shatabdi", time: "04:20 PM", price: 1600 },
    { id: 9, name: "Humsafar Express", time: "01:00 PM", price: 2100 },
    { id: 10, name: "Express Special", time: "03:45 PM", price: 1400 }
  ],

  cab: [
    { id: 1, name: "Swift Dzire", time: "Available Now", price: 1800 },
    { id: 2, name: "Toyota Innova", time: "Available Now", price: 2500 },
    { id: 3, name: "Hyundai Xcent", time: "Available Now", price: 1700 },
    { id: 4, name: "Maruti Ertiga", time: "Available Now", price: 2200 },
    { id: 5, name: "Honda Amaze", time: "Available Now", price: 1900 },
    { id: 6, name: "Mahindra Xylo", time: "Available Now", price: 2400 },
    { id: 7, name: "Kia Carens", time: "Available Now", price: 2600 },
    { id: 8, name: "Toyota Etios", time: "Available Now", price: 1750 },
    { id: 9, name: "Tata Indigo", time: "Available Now", price: 1650 },
    { id: 10, name: "SUV Premium", time: "Available Now", price: 3200 }
  ]
};

  const seats = ["A1","A2","A3","A4","B1","B2","B3","B4"];

  const resetAll = () => {
    setStep("search");
    setFrom("");
    setTo("");
    setDate("");
    setSelectedVehicle(null);
    setSelectedSeat(null);
    setPaymentMethod("");
  };

  return (
    <div className="booking-container">

      {/* LANDING CARD */}
    {!showBooking && (
      <div className="landing-screen">
        <div
          className="explore-card"
          onClick={() => setShowBooking(true)}
        >
          <h1>🚀 Explore Travel Options</h1>
          <p>Bus • Train • Cab • Easy Booking</p>
        </div>
      </div>
    )}

     {/* BOOKING SYSTEM */}
    {showBooking && (
      <>
        {/* STEP 1 — SEARCH */}
        {step === "search" && (
          <>
            <button
                  className="back-btn"
                  onClick={() => {
                    setShowBooking(false);
                    resetAll();
                  }}
                >
                  ← Back
              </button>
            <div className="search-bar">
              <input
                placeholder="From"
                value={from}
                onChange={(e)=>setFrom(e.target.value)}
              />
              <input
                placeholder="To"
                value={to}
                onChange={(e)=>setTo(e.target.value)}
              />
              <input
                type="date"
                value={date}
                onChange={(e)=>setDate(e.target.value)}
              />
              <button
                disabled={!from || !to || !date}
                onClick={()=>setStep("list")}
              >
                Search
              </button>
            </div>

            <div className="tabs">
              <button className={type==="bus"?"active":""} onClick={()=>setType("bus")}>Bus</button>
              <button className={type==="train"?"active":""} onClick={()=>setType("train")}>Train</button>
              <button className={type==="cab"?"active":""} onClick={()=>setType("cab")}>Cab</button>
            </div>

            
          </>
        )}

        {/* keep rest of your steps same (list, seat, payment, success) */}
      </>
    )}



      {/* STEP 2 — VEHICLE LIST */}
      {step === "list" && (
        <div className="vehicle-list">
          <button className="back-btn" onClick={()=>setStep("search")}>← Back</button>
          {vehicles[type].map(v => (
            <div key={v.id} className="vehicle-card">
              <div>
                <h3>{v.name}</h3>
                <p>{v.time}</p>
              </div>
              <div>
                <p className="price">₹ {v.price}</p>
                <button
                  onClick={()=>{
                    setSelectedVehicle(v);
                    if(type === "cab"){
                      setStep("payment");
                    } else {
                      setStep("seat");
                    }
                  }}
                >
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* STEP 3 — SEAT SELECTION */}
      {step === "seat" && (
        <div className="seat-screen">
          {/* <button className="back-btn" onClick={()=>setStep("list")}>← Back</button> */}

          <button
              className="back-btn"
              onClick={() => setStep("list")}
            >
              ← Back
          </button>
          <h3>Select Seat</h3>
          <div className="seat-grid">
            {seats.map(seat => (
              <div
                key={seat}
                className={`seat ${selectedSeat===seat?"selected":""}`}
                onClick={()=>setSelectedSeat(seat)}
              >
                {seat}
              </div>
            ))}
          </div>

          {selectedSeat && (
            <button
              className="next-btn"
              onClick={()=>setStep("payment")}
            >
              Continue
            </button>
          )}
        </div>
      )}

      {/* STEP 4 — PAYMENT */}
      {step === "payment" && (
        <div className="payment-screen">
          {/* <button className="back-btn" onClick={()=>setStep(type==="cab"?"list":"seat")}>← Back</button> */}
          <button
                className="back-btn"
                onClick={() =>
                  setStep(type === "cab" ? "list" : "seat")
                }
              >
                ← Back
          </button>

          <h2>Payment Summary</h2>
          <p><strong>From:</strong> {from}</p>
          <p><strong>To:</strong> {to}</p>
          <p><strong>Date:</strong> {date}</p>
          <p><strong>Vehicle:</strong> {selectedVehicle.name}</p>
          {selectedSeat && <p><strong>Seat:</strong> {selectedSeat}</p>}
          <p><strong>Total:</strong> ₹ {selectedVehicle.price}</p>

          <div className="payment-methods">
            <button
              className={paymentMethod==="UPI"?"active-pay":""}
              onClick={()=>setPaymentMethod("UPI")}
            >
              UPI
            </button>
            <button
              className={paymentMethod==="Card"?"active-pay":""}
              onClick={()=>setPaymentMethod("Card")}
            >
              Card
            </button>
          </div>

          {paymentMethod && (
            <button
              className="pay-btn"
              onClick={()=>setStep("success")}
            >
              Pay Now
            </button>
          )}
        </div>
      )}

      {/* STEP 5 — SUCCESS */}
      {step === "success" && (
        <div className="success-screen">

          <button
              className="back-btn"
              onClick={() => {
                setShowBooking(false);
                resetAll();
              }}
            >
              ← Home
          </button>
          <h1>✅ Payment Successful!</h1>
          <p>Your trip from {from} to {to} is confirmed.</p>
          <p>Booking ID: TRIP{Math.floor(Math.random()*100000)}</p>
          <button onClick={resetAll}>Book Another Trip</button>
        </div>
      )}

    </div>
  );
};

export default TravelBooking;