import { ModifiersInterface } from "../interfaces/Modifiers.interface"

const addModifiersToElem = jest.fn()
addModifiersToElem
  .mockReturnValueOnce(['search search--mod'])
  .mockReturnValueOnce(['elem'])
  .mockReturnValueOnce(['elem'])
  .mockReturnValueOnce(['elem'])
  .mockReturnValueOnce(['elem', 'elem--mod-1', 'elem--mod-2'])
  .mockReturnValueOnce(['elem', 'elem--mod'])
  .mockReturnValueOnce(['elem', 'elem--mod'])
  .mockReturnValueOnce(['elem', 'elem--mod'])
  .mockReturnValueOnce(['element1', 'element2'])
  .mockReturnValueOnce(['elem', 'elem--mod'])

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
