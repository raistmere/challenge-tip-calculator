import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

// Arrange
const ren = render(<App />);
const user = userEvent.setup();
const billTotalElement: HTMLInputElement = ren.getByLabelText("Bill",{selector: "input"}) as HTMLInputElement;
const numOfPeopleElement: HTMLInputElement = ren.getByLabelText("Number of People", {selector: "input"}) as HTMLInputElement;
const fivePercentButton: HTMLElement = ren.getByRole("button", {name:"5%"});
const tenPercentButton: HTMLElement = ren.getByRole("button", {name:"10%"});
const tipAmountElement: HTMLElement = ren.getByText("$0.00");
const totalAmountElement: HTMLElement = ren.getByText("$00.00");

describe("Percentage Buttons", () => {
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

describe("Calculating tip amount", () => {
    test("Check tip amount and total amount per person is correct", async () => {
        // Act
        await(user.type(billTotalElement, "100"));
        await(user.click(tenPercentButton));
        await(user.type(numOfPeopleElement, "5"));
        // Assert
        expect(tipAmountElement.textContent).toBe("$2")
        expect(totalAmountElement.textContent).toBe("$22");
    })
});