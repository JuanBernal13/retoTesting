import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Like from "../likes";

describe("Cantidad like 0", () => {
  it("Cantidad de likes inicial =0", () => {
    render(<Like />);
    expect(screen.getByText("Likes: 0")).toBeInTheDocument();
  });

  it("Incrementa valor 1", () => {
    render(<Like />);
    const likeButton = screen.getByText("Like");
    fireEvent.click(likeButton);
    expect(screen.getByText("Likes: 1")).toBeInTheDocument();
  });

  it("Decrementa cuando hay dislike en 1", () => {
    render(<Like />);
    const dislikeButton = screen.getByText("Dislike");
    fireEvent.click(dislikeButton);
    expect(screen.getByText("Likes: -1")).toBeInTheDocument();
  });
});
    