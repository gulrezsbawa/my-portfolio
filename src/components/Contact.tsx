import "../assets/styles/Contact.scss";

import React, { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSending, setIsSending] = useState<boolean>(false);
  const [submitFeedback, setSubmitFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    const hasNameError = trimmedName.length === 0;
    const hasEmailError = trimmedEmail.length === 0;
    const hasMessageError = trimmedMessage.length === 0;

    setNameError(hasNameError);
    setEmailError(hasEmailError);
    setMessageError(hasMessageError);
    setSubmitFeedback(null);

    if (hasNameError || hasEmailError || hasMessageError) {
      return;
    }

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitFeedback({
        type: "error",
        message:
          "The contact form is not configured yet. Please email me directly.",
      });
      return;
    }

    setIsSending(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
        },
        publicKey,
      );
      setName("");
      setEmail("");
      setMessage("");
      setSubmitFeedback({
        type: "success",
        message:
          "Your message was sent successfully. Thank you for reaching out!",
      });
    } catch {
      setSubmitFeedback({
        type: "error",
        message:
          "Your message could not be sent. Please email me directly or try again later.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            Got a project waiting to be realized? Let's collaborate and make it
            happen!
          </p>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={sendEmail}
          >
            <div className="form-flex z-50">
              <TextField
                required
                id="contact-name"
                label="Your Name"
                sx={{
                  "& .MuiInputBase-input": {
                    zIndex: 50,
                  },
                }}
                className="z-50"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setNameError(false);
                  setSubmitFeedback(null);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                id="contact-email"
                className="z-50"
                sx={{
                  "& .MuiInputBase-input": {
                    zIndex: 50,
                  },
                }}
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(false);
                  setSubmitFeedback(null);
                }}
                error={emailError}
                helperText={
                  emailError ? "Please enter your email or phone number" : ""
                }
              />
            </div>
            <TextField
              required
              id="contact-message"
              sx={{
                "& .MuiInputBase-input": {
                  zIndex: 50,
                },
              }}
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form z-50"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                setMessageError(false);
                setSubmitFeedback(null);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            {submitFeedback && (
              <p
                className={`contact-feedback ${submitFeedback.type}`}
                role={submitFeedback.type === "error" ? "alert" : "status"}
                aria-live="polite"
              >
                {submitFeedback.message}{" "}
                {submitFeedback.type === "error" && (
                  <a href="mailto:bawagulrez@gmail.com">bawagulrez@gmail.com</a>
                )}
              </p>
            )}
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send"}
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
