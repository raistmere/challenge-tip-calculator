import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Percentage Buttons", () => {
    // Arrange
    const ren = render(<App />);
    const user = userEvent.setup();
    const fivePercentButton = ren.getByRole("button", {name:"5%"});
    const tenPercentButton = ren.getByRole("button", {name:"10%"});

    test("Check if percentage button gets selected", async () => {
        // Act
        await (user.click(fivePercentButton));
        // Assert
        expect(fivePercentButton.classList.contains("selected")).toBe(true);
    });
    
    test("Check if percentage button gets deselected", async () => {
        // Act
        await(user.click(tenPercentButton));
        // Assert
        expect(fivePercentButton.classList.contains("selected")).toBe(false);
        expect(tenPercentButton.classList.contains("selected")).toBe(true);
    });
});