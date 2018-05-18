import { ModifiersInterface } from '../interfaces/Modifiers.interface'

class Modifiers implements ModifiersInterface {
  private readonly modificationSymbol: string

  constructor (modificationSymbol: string) {
    this.modificationSymbol = modificationSymbol
  }

  modifiersObjectMap (modifiers: object, element: string): string[] {
    let classNames = []

    Object.keys(modifiers).map(modifier => modifiers[modifier]
      ? classNames.push([element, modifier].join(this.modificationSymbol))
      : null
    )

    return classNames
  }

  resolveElementModifiers (modifiers: object | string | string[], element: string): string[] {
    if (!modifiers) {
      return []
    }

    if (typeof modifiers === 'object' && !Array.isArray(modifiers)) {
      return this.modifiersObjectMap(modifiers, element)
    }

    if (typeof modifiers === "string") {
      modifiers = [modifiers]
    }

    return modifiers.map(modifier => [element, modifier].join(this.modificationSymbol))
  }

  addModifiersToElement (modifiers: object | string | string[], element: string, commonArray: string[]): string[] {
    let workingArray = [...commonArray]

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