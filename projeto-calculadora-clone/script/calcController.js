class CalcController {
  #displayCalc
  #dataAtual
  constructor() {
    this.#displayCalc = "0";
    this.#dataAtual;
  }
  get displayCalc() {
    return this.#displayCalc;
  }
  set displayCalc(val) {
    this.#displayCalc = val;
  }
  get dataAtual() {
    const data = new Date();
    return data.toLocaleDateString();
  }
  set dataAtual(val) {
    this.#dataAtual = val;
  }
}
