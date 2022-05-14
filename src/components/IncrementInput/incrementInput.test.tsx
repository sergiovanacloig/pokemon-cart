import IncrementInput, { IncrementInputProps } from "./IncrementInput";
import { render, screen } from "../../../__tests__/test-utils";
import userEvent from "@testing-library/user-event";

describe("IncrementInput", () => {
  const props: IncrementInputProps = {
    onChange: jest.fn(),
  };

  it("displays initial value correctly", () => {
    render(<IncrementInput {...props} />);

    expect(screen.getByText(0)).toBeVisible();
    expect(screen.getByText("+")).toBeVisible();
    expect(screen.getByText("-")).toBeVisible();
  });

  it("displays a passed value", () => {
    render(<IncrementInput {...props} value={24} />);

    expect(screen.getByText(24)).toBeVisible();
  });

  it("increments the value", () => {
    render(<IncrementInput {...props} />);

    expect(screen.getByText(0)).toBeVisible();
    userEvent.click(screen.getByText("+"));
    expect(screen.getByText(1)).toBeVisible();
  });

  it("decrements the value", () => {
    render(<IncrementInput {...props} value={17} />);

    expect(screen.getByText(17)).toBeVisible();
    userEvent.click(screen.getByText("-"));
    expect(screen.getByText(16)).toBeVisible();
  });

  it("calls 'onChange' when the value gets updated", () => {
    render(<IncrementInput {...props} />);

    expect(screen.getByText(0)).toBeVisible();
    userEvent.click(screen.getByText("+"));
    expect(props.onChange).toHaveBeenCalled();
    expect(screen.getByText(1)).toBeVisible();
    userEvent.click(screen.getByText("-"));
    expect(props.onChange).toHaveBeenCalled();
    expect(screen.getByText(0)).toBeVisible();
  });
});
