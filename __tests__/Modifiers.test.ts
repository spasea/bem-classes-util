import Modifiers from '../lib/Modifiers'

const mod = new Modifiers('--')

describe('elementModifiersFactory', () => {
  it('check object', () => {
    expect(mod.elementModifiersFactory({ new: true })).toEqual(["new"])
  })

  it('check string', () => {
    expect(mod.elementModifiersFactory('new')).toEqual(["new"])
  })

  it('check array', () => {
    expect(mod.elementModifiersFactory(['new'])).toEqual(["new"])
  })
})

describe('addModifiersToElement', () => {
  it('check object', () => {
    expect(mod.addModifiersToElement({ new: true, old: false }, 'elem', [])).toEqual(["elem", "elem--new"])
  })

  it('check string', () => {
    expect(mod.addModifiersToElement('new', 'elem', [])).toEqual(["elem", "elem--new"])
  })

  it('check array', () => {
    expect(mod.addModifiersToElement(['new'], 'elem', [])).toEqual(["elem", "elem--new"])
  })
})