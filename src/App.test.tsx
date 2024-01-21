import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App component", () => {
	render(<App />);
	const textElement = screen.getByText(/The Plant Stand/i);
	expect(textElement).toBeInTheDocument();
});
