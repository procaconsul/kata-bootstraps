import { Cell } from "./Cell"

describe("Cell", () => {
	it("is dead on instantiation", () => {
		const cell = new Cell()
		expect(cell.isAlive()).toBeFalsy()
	})

	it("stays dead if no neighbours are alive", () => {
		const cell = new Cell()
    const nextCell = cell.next(0)
		expect(nextCell.isAlive()).toBeFalsy()
	})
})
