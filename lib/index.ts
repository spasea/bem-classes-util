class Test {
  private readonly _name: object;

  constructor (name) {
    this._name = name;
  }

  result () {
    return { className: this._name.baseClass }
  }
}

export default Test
