import Modifiers from '../lib/Modifiers'

const mod = new Modifiers('--')

it('check resolveElementModifiers with object', () => {
  expect(mod.resolveElementModifiers({ new: true }, 'elem')).toEqual(["elem--new"])
})

it('check resolveElementModifiers with string', () => {
  expect(mod.resolveElementModifiers('new', 'elem')).toEqual(["elem--new"])
})

it('check resolveElementModifiers with array', () => {
  expect(mod.resolveElementModifiers(['new'], 'elem')).toEqual(["elem--new"])
})