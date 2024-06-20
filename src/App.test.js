import App from './App';
import {render, screen, waitFor} from "@testing-library/react";
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

  test('it does substract a unit each second when pressing start', async () => {
    render(<App />);
    const plusButton = screen.getByRole("button", {name: "+"});
    await userEvent.click(plusButton);
    await userEvent.click(plusButton);
    const startButton = screen.getByRole("button", {name: "start"});
    await userEvent.click(startButton);
    await screen.findByText("2");
    await screen.findByText("1");
    expect(await screen.findByText("0")).toBeInTheDocument();
  });

  test.each([
      ['+'],
      ['-'],
      ['start']
  ])('it disables %s button when the countdown starts', async (disabledButtonText) => {
    render(<App/>);
    const plusButton = screen.getByRole("button", {name: "+"});
    await userEvent.click(plusButton);
    await userEvent.click(plusButton);
    await userEvent.click(screen.getByRole("button", {name: "start"}));
    expect(screen.getByRole("button", {name: disabledButtonText})).toBeDisabled();
  });

  test.each([
    ['+'],
    ['-'],
    ['start']
  ])('it enables %s button when the countdown finishes', async (enabledButtonText) => {
    render(<App/>);
    const plusButton = screen.getByRole("button", {name: "+"});
    await userEvent.click(plusButton);
    await userEvent.click(plusButton);
    await userEvent.click(screen.getByRole("button", {name: "start"}));
    await screen.findByText("2");
    await screen.findByText("1");
    await screen.findByText("0");
    await waitFor(() => expect(screen.getByRole("button", {name: enabledButtonText})).toBeEnabled());
  });
});

