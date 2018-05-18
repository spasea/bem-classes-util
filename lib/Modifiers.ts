class Modifiers {
  private readonly modificationSymbol: string

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
  resolveElementModifiers (modifiers, element) {
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

  /**
   *
   * @param element
   * @param modifiers
   * @param commonArray
   * @returns {Array}
   */
  addModifiersToElement (element, modifiers, commonArray) {
    let workingArray: any = [...commonArray]

    if (!workingArray.includes(element)) {
      workingArray.push(element)
    }

    let elementModifiers = this.resolveElementModifiers(modifiers, element)

    if (elementModifiers.length) {
      workingArray.push(...elementModifiers)
    }

    return workingArray
  }
}

export default Modifiers