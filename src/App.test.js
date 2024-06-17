import App from './App';
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('a stopwatch', () => {
  test('renders a counter at 0 seconds', () => {
    render(<App />);
    const counterElement = screen.getByText("0");
    expect(counterElement).toBeInTheDocument();
  });

  test('it adds a unit to the counter when + is clicked', async () => {
    render(<App />);
    const plusButton = screen.getByRole("button", {name: "+"});
    await userEvent.click(plusButton);
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test('it substracts a unit to the counter when - is clicked', async () => {
    render(<App />);
    const plusButton = screen.getByRole("button", {name: "+"});
    await userEvent.click(plusButton);
    const minusButton = screen.getByRole("button", {name: "-"});
    await userEvent.click(minusButton);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  test('it does not substract to less than 0 when - is clicked', async () => {
    render(<App />);
    const minusButton = screen.getByRole("button", {name: "-"});
    await userEvent.click(minusButton);
    expect(screen.getByText("0")).toBeInTheDocument();
  });
});

