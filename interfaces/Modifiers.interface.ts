export interface ModifiersInterface {
  modifiersObjectMap(modifiers: object, element: string): string[]
  resolveElementModifiers(modifiers: object | string | string[], element: string): string[]
  addModifiersToElement(modifiers: object | string | string[], element: string, commonArray: string[]): string[]
}