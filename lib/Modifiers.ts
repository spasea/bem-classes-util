import { ModifiersInterface } from '../interfaces/Modifiers.interface'

class Modifiers implements ModifiersInterface {
  private readonly modificationSymbol: string

  constructor (modificationSymbol: string) {
    this.modificationSymbol = modificationSymbol
  }

  modifiersObjectMap (modifiers: object): string[] {
    let classNames = []

    Object.keys(modifiers).map(modifier => modifiers[modifier]
      && classNames.push(modifier))

    return classNames
  }

  elementModifiersFactory (modifiers: object | string | string[]): string[] {
    if (!modifiers) {
      return []
    }

    if (typeof modifiers === 'object' && !Array.isArray(modifiers)) {
      return this.modifiersObjectMap(modifiers)
    }

    if (typeof modifiers === "string") {
      return [modifiers]
    }

    return modifiers
  }

  addModifiersToElement (modifiers: object | string | string[], element: string, commonArray: string[]): string[] {
    let workingArray = [...commonArray]

    if (!workingArray.includes(element)) {
      workingArray.push(element)
    }

    let elementModifiers = this.elementModifiersFactory(modifiers)
      .map(modifier => [element, modifier].join(this.modificationSymbol))

    if (elementModifiers.length) {
      workingArray.push(...elementModifiers)
    }

    return workingArray
  }
}

export default Modifiers