import { fireEvent, render, screen } from "@testing-library/react";

import App from "./App";
import React from "react";

test("renders Gulrez Bawa portfolio", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { name: /gulrez bawa/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByText(/senior software engineer \| frontend architecture/i),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", {
      name: /staff-level scope, measurable impact/i,
    }),
  ).toBeInTheDocument();
  expect(screen.getByText("~40%")).toBeInTheDocument();
});

test("shows a helpful message when EmailJS is not configured", async () => {
  const envNames = [
    "REACT_APP_EMAILJS_SERVICE_ID",
    "REACT_APP_EMAILJS_TEMPLATE_ID",
    "REACT_APP_EMAILJS_PUBLIC_KEY",
  ] as const;
  const previousValues = envNames.map((name) => process.env[name]);
  envNames.forEach((name) => {
    process.env[name] = "";
  });

  try {
    render(<App />);
    fireEvent.change(screen.getByLabelText(/your name/i), {
      target: { value: "Ada Lovelace" },
    });
    fireEvent.change(screen.getByLabelText(/email \/ phone/i), {
      target: { value: "ada@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: "Hello!" },
    });
    const form = screen.getByRole("button", { name: /send/i }).closest("form");
    expect(form).not.toBeNull();
    fireEvent.submit(form!);

    expect(await screen.findByRole("alert")).toHaveTextContent(
      /contact form is not configured/i,
    );
  } finally {
    envNames.forEach((name, index) => {
      const previousValue = previousValues[index];
      if (previousValue === undefined) {
        delete process.env[name];
      } else {
        process.env[name] = previousValue;
      }
    });
  }
});
