export interface ModifiersInterface {
  modifiersObjectMap(modifiers: object): string[]
  elementModifiersFactory(modifiers: object | string | string[]): string[]
  addModifiersToElement(modifiers: object | string | string[], element: string, commonArray: string[]): string[]
}