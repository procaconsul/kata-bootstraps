export class Cell {
	public isAlive() {
		return false
	}
  
  public next(aliveNeighbours: number): Cell {
    return new Cell()
  }
}
