"use client";
import React from "react";
import sendMail from "../app/utils/mail";

const ContactHero = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const { name, email, message } = e.currentTarget
      .elements as typeof e.currentTarget.elements & {
      name: HTMLInputElement;
      email: HTMLInputElement;
      message: HTMLTextAreaElement;
    };

    try {
      // Send email
      await sendMail(email.value, name.value, message.value);
      // Optionally: Show success feedback
      alert("Message sent successfully!");
    } catch (error) {
      // Handle error (Optional)
      alert("Failed to send message. Please try again later.");
    } finally {
      // Clear form fields
      form.reset();
    }
  };

  return (
    <div className=" responsive hero bg-inherit min-h-screen">
      <div className="hero-content flex-col lg:w-3/5 lg:flex-col">
        <div className="text-center">
          <h1 className="text-5xl text-contrast font-bold">
            Let's Work Together
          </h1>
          <p className="text-gray-600 text-xl py-6">
            Always excited to collaborate. Reach out and let's get started.
          </p>
        </div>
        <div className="card bg-base-100 w-full shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                  name="name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                  name="email"
                />
              </div>
            </div>

            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                placeholder="Message"
                className="textarea textarea-bordered h-24"
                required
                name="message"
              ></textarea>
            </div>

            <div className="flex justify-center mt-6">
              <button className="btn btn-outline">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
