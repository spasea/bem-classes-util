import Classes from '../lib/index'
import ModifiersMock from './Modifiers.mock'

const cl = new Classes({ baseClass: 'search', Modifiers: new ModifiersMock() })

describe('classList single element', () => {
  it('check undefined', () => {
    expect(cl.classList()).toBe('search')
  })

  it('check with modifier', () => {
    expect(cl.classList({ m: 'mod' })).toBe('search search--mod')
  })

  it('check string', () => {
    expect(cl.classList('elem')).toBe('search__elem')
  })

  it('check array', () => {
    expect(cl.classList(['elem'])).toBe('search__elem')
  })

  it('check object wo modifiers', () => {
    expect(cl.classList({ elem: true })).toBe('search__elem')
  })

  it('check object with modifiers as array', () => {
    expect(cl.classList({ elem: true, m: ['mod-1', 'mod-2'] })).toBe('search__elem search__elem--mod-1 search__elem--mod-2')
  })

  it('check object with modifiers as object and no element', () => {
    expect(cl.classList({ elem: false, m: {'mod': true, 'mod-2': false} })).toBe('')
  })

  it('check object with modifiers as string', () => {
    expect(cl.classList({ elem: true, m: 'mod' })).toBe('search__elem search__elem--mod')
  })

  it('check object with modifiers as object', () => {
    expect(cl.classList({ elem: true, m: {'mod': true, 'mod-2': false} })).toBe('search__elem search__elem--mod')
  })
})

describe('classList multiple elements', () => {
  const cls = new Classes({ baseClass: 'search' })

  it('check elements as array', () => {
    expect(cls.classList(['element1', 'element2'])).toBe('search__element1 search__element2')
  })

  it('check elements as object', () => {
    expect(cls.classList([{'element1': true}, {'element2': true}])).toBe('search__element1 search__element2')
  })
})

describe('result', () => {
  it('check object with modifiers as object', () => {
    expect(cl.result({ elem: true, m: {'mod': true, 'mod-2': false} })).toEqual({ className: 'search__elem search__elem--mod' })
  })
})

describe('optionsFactory', () => {
  it('check options as a string', () => {
    expect(Classes.optionsFactory('option')).toEqual([{ option: true }])
  })

  it('check options as an object', () => {
    expect(Classes.optionsFactory({ option: true })).toEqual([{ option: true }])
  })

  it('check options as an array', () => {
    expect(Classes.optionsFactory([{ option: true }])).toEqual([{ option: true }])
  })
})

describe('getClassesList', () => {
  it('check options as an object', () => {
    expect(Classes.getClassesList({'class': true, 'class2': false})).toBe('class')
  })

  it('check options as an array', () => {
    expect(Classes.getClassesList(['class', 'class2'])).toBe('class class2')
  })
})

describe('resultList', () => {
  it('check options as an object', () => {
    expect(Classes.resultList({'class': true, 'class2': false})).toEqual({className: 'class'})
  })
})