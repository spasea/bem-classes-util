import Classes, { cls } from './index'

test('get base name', () => {
  const cl = new Classes({ baseClass: 'search' })

  expect(cl.result()).toEqual({ className: 'search' })
})

test('get base name with modifier', () => {
  const cl = new Classes({ baseClass: 'search' })

  expect(cl.result({ m: 'test' })).toEqual({ className: 'search search--test' })
})

test('element name', () => {
  const cl = new Classes({ baseClass: 'search' })

  expect(cl.result('element')).toEqual({ className: 'search__element' })
})

test('element name with modifier', () => {
  const cl = new Classes({ baseClass: 'search' })

  expect(cl.result({
    'element': true,
    m: 'one-modifier'
  }))
    .toEqual({ className: 'search__element search__element--one-modifier' })
})

test('element name with modifiers array', () => {
  const cl = new Classes({ baseClass: 'search' })

  expect(cl.result({
    'element': true,
    m: ['one-modifier', 'second']
  }))
    .toEqual({ className: 'search__element search__element--one-modifier search__element--second' })
})

test('element name with modifiers object', () => {
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


test('not element name with modifiers object', () => {
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

test('getting classlist with the concating method from array', () => {
  expect(cls.getClassesList(['class1', 'class2'])).toBe('class1 class2')
})

test('getting classlist object with the concating method from object', () => {
  expect(cls.resultList({
    'class1': true,
    'class2': true,
    'class3': false
  })).toEqual({ className: 'class1 class2' })
})