import { ModifiersInterface } from "../interfaces/Modifiers.interface"

const addModifiersToElem = jest.fn()
addModifiersToElem
  // classList single element
  // - check with modifier
  .mockReturnValueOnce(['search search--mod'])

  // - check string
  .mockReturnValueOnce(['elem'])

  // - check array
  .mockReturnValueOnce(['elem'])

  // - check object wo modifiers
  .mockReturnValueOnce(['elem'])

  // - check object with modifiers as array
  .mockReturnValueOnce(['elem', 'elem--mod-1', 'elem--mod-2'])

  // - check object with modifiers as object and no element
  .mockReturnValueOnce(['elem', 'elem--mod'])

  // - check object with modifiers as string
  .mockReturnValueOnce(['elem', 'elem--mod'])

  // - check object with modifiers as object
  .mockReturnValueOnce(['elem', 'elem--mod'])

  // classList multiple elements
  // - check elements as array
  .mockReturnValueOnce(['element1', 'element2'])
  .mockReturnValueOnce(['element1', 'element2'])

  // - check elements as object
  .mockReturnValueOnce(['element1', 'element2'])

  // result
  // - check object with modifiers as object
  .mockReturnValueOnce(['elem', 'elem--mod'])

  // multi blocks
  // - check multiClasses
  .mockReturnValueOnce(['element-1'])
  .mockReturnValueOnce(['element-2'])

  // - check multiList
  .mockReturnValueOnce(['element-1'])
  .mockReturnValueOnce(['element-2'])

class ModifiersMock implements ModifiersInterface {
  addModifiersToElement(modifiers: object | string | string[], element: string, commonArray: string[]): string[] {
    this.elementModifiersFactory(modifiers)
    this.modifiersObjectMap(modifiers)

    return addModifiersToElem()
  }

  elementModifiersFactory(modifiers: object | string | string[]): string[] {
    return undefined
  }

  modifiersObjectMap(modifiers: object): string[] {
    return undefined
  }
}

export default ModifiersMock
