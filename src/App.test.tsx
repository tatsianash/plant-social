import { render, screen } from "@testing-library/react";
import App from "./App";

xtest("renders App component", () => {
	render(<App />);
	const textElement = screen.getByText(/The Plant Stand/i);
	expect(textElement).toBeInTheDocument();
});
