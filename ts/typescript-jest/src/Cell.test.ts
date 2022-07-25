import { Cell } from "./Cell"

describe("Cell", () => {
	it("is dead on instantiation", () => {
		const cell = new Cell()
		expect(cell.isAlive()).toBeFalsy()
	})
})
