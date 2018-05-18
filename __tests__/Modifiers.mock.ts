import { ModifiersInterface } from "../interfaces/Modifiers.interface"

class ModifiersMock implements ModifiersInterface {
  addModifiersToElement(modifiers: object | string | string[], element: string, commonArray: string[]): string[] {
    return ['elem'];
  }

  elementModifiersFactory(modifiers: object | string | string[]): string[] {
    return undefined;
  }

  modifiersObjectMap(modifiers: object): string[] {
    return undefined;
  }
}

export default ModifiersMock
