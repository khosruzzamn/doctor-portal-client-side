import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import "./ContactForm.css";

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send(
        "service_rlagmug",
        "template_1gxyblo",
        data,
        "user_fnZVL994ssVnkkJegj3hS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    axios
      .post("https://mysterious-bastion-18790.herokuapp.com/contact", data)

      .then((res) => {
        if (res.data.insertedId) {
          alert("Success");
          reset();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="contact my-5 py-5">
      <div className="container">
        <div className="section-header text-center text-white mb-5">
          <h5 className="text-primary">Contact</h5>
          <h1>Always connect with us</h1>
        </div>
        <div className="col-md-9 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input
                name="userName"
                {...register("userName")}
                required
                type="text"
                className="form-control"
                placeholder="Your Full Name *"
              />
            </div>
            <div className="form-group">
              <input
                name="userEmail"
                {...register("userEmail")}
                required
                type="email"
                className="form-control"
                placeholder="Email Address *"
              />
            </div>
            <div className="form-group">
              <input
                name="subject"
                {...register("subject")}
                required
                type="text"
                className="form-control"
                placeholder="Subject *"
              />
            </div>
            <div className="form-group">
              <textarea
                name="massage"
                {...register("massage")}
                required
                className="form-control"
                id=""
                cols="30"
                rows="10"
                placeholder="Message *"
              ></textarea>
            </div>
            <div className="form-group text-center">
              <button
                type="submit"
                className="mt-5 btn btn-secondary button-style"
              >
                {" "}
                Submit{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
