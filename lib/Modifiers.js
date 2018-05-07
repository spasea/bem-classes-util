class Modifiers {
  constructor (modificationSymbol) {
    this.modificationSymbol = modificationSymbol
  }

  /**
   *
   * @param modifiers
   * @param element
   * @returns {Array}
   */
  modifiersObjectMap(modifiers, element) {
    let classNames = []

    Object.keys(modifiers).map(modifier => modifiers[modifier]
      ? classNames.push([element, modifier].join(this.modificationSymbol))
      : null
    )

    return classNames
  }

  /**
   *
   * @param modifiers
   * @param element
   * @returns {Array}
   */
  solveModifiers (modifiers, element) {
    if (!modifiers) {
      return []
    }

    if (modifiers.length === undefined) {
      return this.modifiersObjectMap(modifiers, element)
    }

    if (typeof modifiers === "string") {
      modifiers = [modifiers]
    }

    return modifiers.map(modifier => [element, modifier].join(this.modificationSymbol))
  }
}

export default Modifiers