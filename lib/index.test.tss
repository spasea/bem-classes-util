import Classes from './index'

describe('Base class testing', () => {
  it('get base name', () => {
    const cl = new Classes({ baseClass: 'search' })

    expect(cl.result()).toEqual({ className: 'search' })
  })

  it('get base name from list', () => {
    const cl = new Classes({ baseClass: 'search' })

    expect(cl.classList()).toBe('search')
  })

  it('get base name with modifier', () => {
    const cl = new Classes({ baseClass: 'search' })

    expect(cl.result({ m: 'test' })).toEqual({ className: 'search search--test' })
  })
})

describe('Element testing', () => {
  it('element name', () => {
    const cl = new Classes({ baseClass: 'search' })

    expect(cl.result('element')).toEqual({ className: 'search__element' })
  })

  it('not element name with modifiers object', () => {
    const cl = new Classes({ baseClass: 'search' })

    expect(cl.result({
      'element': false,
      m: {
        'one-modifier': true,
        'second': true,
        'third': false,
      }
    }))
      .toEqual({ className: '' })
  })
})

describe('Static methods testing', () => {
  it('getting classlist with the concating method from array', () => {
    expect(Classes.getClassesList(['class1', 'class2'])).toBe('class1 class2')
  })

  it('getting classlist object with the concating method from object', () => {
    expect(Classes.resultList({
      'class1': true,
      'class2': true,
      'class3': false
    })).toEqual({ className: 'class1 class2' })
  })
})

describe('Modifiers testing', () => {
  it('element name with modifier', () => {
    const cl = new Classes({ baseClass: 'search' })

    expect(cl.result({
      'element': true,
      m: 'one-modifier'
    }))
      .toEqual({ className: 'search__element search__element--one-modifier' })
  })

  it('element name with modifiers array', () => {
    const cl = new Classes({ baseClass: 'search' })

    expect(cl.result({
      'element': true,
      m: ['one-modifier', 'second']
    }))
      .toEqual({ className: 'search__element search__element--one-modifier search__element--second' })
  })

  it('element name with modifiers object', () => {
    const cl = new Classes({ baseClass: 'search' })

    expect(cl.result({
      'element': true,
      m: {
        'one-modifier': true,
        'second': true,
        'third': false,
      }
    }))
      .toEqual({ className: 'search__element search__element--one-modifier search__element--second' })
  })
})