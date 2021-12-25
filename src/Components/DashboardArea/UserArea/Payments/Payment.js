import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "./Checkout";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51KAbKYLw4TLiAeYIBiItBU3jI72o3dLChB7SJt316H9hOqycd9lQPGPuWa0tXhZiyRJQq0wnaESmyu0nhaJbCqGV001OLi8dWl"
);

const Payment = () => {
  const { appointmentId } = useParams();
  const [payAppointment, setPayAppointment] = useState({});

  // console.log(appointmentId)

  useEffect(() => {
    fetch(`http://localhost:5000/appointments/${appointmentId}`)
      .then((res) => res.json())
      .then((data) => setPayAppointment(data));
  }, [appointmentId]);

  return (
    <div style={{ marginTop: 30 }}>
      <div style={{ textAlign: "center" }}>
        <h4 className=" text-center">
          Hello!!{" "}
          <span className="text-primary text-center">
            {payAppointment.patient_name}
          </span>
        </h4>

        <h6>
          <span>Please Pay Amount Total:</span> {payAppointment.price}
        </h6>
      </div>

      {payAppointment?.price && (
        <Elements stripe={stripePromise}>
          <Checkout payAppointment={payAppointment} />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
