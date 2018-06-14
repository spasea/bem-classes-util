import Classes from '../lib/index'

const addModifiersToElement = jest.fn()

// const cl2 = new Classes({ baseClass: 'header', Modifiers: new Modifiers() })

beforeEach(() => {
  addModifiersToElement.mockClear()
})

describe('classList single element', () => {
  it.only('check undefined', () => {
    const ModifiersMock = jest.fn().mockImplementation(() => ({
      addModifiersToElement: addModifiersToElement
    }))

    const cl = new Classes({ baseClass: 'search', Modifiers: new ModifiersMock() })

    expect(cl.classList()).toBe('search')
    expect(addModifiersToElement.mock.calls.length).toBe(0)
  })

  it.only('check with modifier', () => {
    const ModifiersMock = jest.fn().mockImplementation(() => ({
      addModifiersToElement: addModifiersToElement
        .mockReturnValueOnce(['search search--mod'])
    }))

    const cl = new Classes({ baseClass: 'search', Modifiers: new ModifiersMock() })

    expect(cl.classList({ m: 'mod' })).toBe('search search--mod')

    expect(addModifiersToElement.mock.calls.length).toBe(1)
    expect(addModifiersToElement.mock.calls[0][0]).toBe('mod')
    expect(addModifiersToElement.mock.calls[0][1]).toBe('search')
    expect(addModifiersToElement.mock.calls[0][2]).toEqual([])
  })

  it('check string', () => {
    const cl = new Classes({ baseClass: 'search', Modifiers: new Modifiers() })

    expect(cl.classList('elem')).toBe('search__elem')
  })

  it('check array', () => {
    const cl = new Classes({ baseClass: 'search', Modifiers: new Modifiers() })

    expect(cl.classList(['elem'])).toBe('search__elem')
  })

  it('check object wo modifiers', () => {
    const cl = new Classes({ baseClass: 'search', Modifiers: new Modifiers() })

    expect(cl.classList({ elem: true })).toBe('search__elem')
  })

  it('check object with modifiers as array', () => {
    const cl = new Classes({ baseClass: 'search', Modifiers: new Modifiers() })

    expect(cl.classList({ elem: true, m: ['mod-1', 'mod-2'] }))
      .toBe('search__elem search__elem--mod-1 search__elem--mod-2')
  })

  it('check object with modifiers as object and no element', () => {
    const cl = new Classes({ baseClass: 'search', Modifiers: new Modifiers() })

    expect(cl.classList({ elem: false, m: {'mod': true, 'mod-2': false} })).toBe('')
  })

  it('check object with modifiers as string', () => {
    const cl = new Classes({ baseClass: 'search', Modifiers: new Modifiers() })

    expect(cl.classList({ elem: true, m: 'mod' }))
      .toBe('search__elem search__elem--mod')
  })

  it('check object with modifiers as object', () => {
    const cl = new Classes({ baseClass: 'search', Modifiers: new Modifiers() })

    expect(cl.classList({ elem: true, m: {'mod': true, 'mod-2': false} }))
      .toBe('search__elem search__elem--mod')
  })
})

describe('classList multiple elements', () => {
  it('check elements as array', () => {
    const cl = new Classes({ baseClass: 'search', Modifiers: new Modifiers() })

    expect(cl.classList(['element1', 'element2']))
      .toBe('search__element1 search__element2')
  })

  it('check elements as object', () => {
    const cl = new Classes({ baseClass: 'search', Modifiers: new Modifiers() })

    expect(cl.classList([{'element1': true}, {'element2': true}]))
      .toBe('search__element1 search__element2')
  })
})

describe('result', () => {
  it('check object with modifiers as object', () => {
    const cl = new Classes({ baseClass: 'search', Modifiers: new Modifiers() })

    expect(cl.result({ elem: true, m: {'mod': true, 'mod-2': false} }))
      .toEqual({ className: 'search__elem search__elem--mod' })
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

describe('multi blocks', () => {
  it('check multiClasses', () => {
    const cl = new Classes({ baseClass: 'search', Modifiers: new Modifiers() })
    const cl2 = new Classes({ baseClass: 'header', Modifiers: new Modifiers() })

    expect(Classes.multiClasses([ cl.classList('element-1'), cl2.classList('element-2') ]))
      .toBe('search__element-1 header__element-2')
  })

  it('check multiList', () => {
    const cl = new Classes({ baseClass: 'search', Modifiers: new Modifiers() })
    const cl2 = new Classes({ baseClass: 'header', Modifiers: new Modifiers() })

    expect(Classes.multiList([ cl.classList('element-1'), cl2.classList('element-2') ]))
      .toEqual({ className: 'search__element-1 header__element-2' })
  })
})
