class Modifiers {
  constructor (modificationSymbol) {
    this.modificationSymbol = modificationSymbol
  }

  modifiersObject(modifiers, element) {
    return Object.keys(modifiers).map(modifier => modifiers[modifier]
      ? [element, modifier].join(this.modificationSymbol)
      : null
    ).filter(className => className)
  }

  solveModifiers (modifiers, element) {
    if (!modifiers) {
      return []
    }

    if (modifiers.length === undefined) {
      return this.modifiersObject(modifiers, element)
    }

    if (typeof modifiers === "string") {
      modifiers = [modifiers]
    }

    return modifiers.map(modifier => [element, modifier].join(this.modificationSymbol))
  }
}

export default Modifiers