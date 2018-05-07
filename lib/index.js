/**
 *
 * @param options
 * @returns {*}
 */
const resolveOptions = options => {
  const isString = typeof options === "string"
  const isArray = options.length === undefined

  if (isArray) {
    options = [options]
  }

  if (isString) {
    options = [{
      [options]: true
    }]
  }

  return options
}

/**
 * @param {Object} options
 *        {string} options.elementSymbol = '__'
 *        {string} options.modificationSymbol = '--'
 *        {string} options.baseClass = ''
 */
class Classes {
  constructor (options) {
    options = {
      elementSymbol: '__',
      modificationSymbol: '--',
      baseClass: '',
      ...options
    }

    this.baseClass = options.baseClass
    this.elementSymbol = options.elementSymbol
    this.modificationSymbol = options.modificationSymbol
    this.classesArr = []
  }

  /**
   *
   * @param {Array|Object|String} options
   *        options.m {Array|Object|String|null}
   * @returns {{className: string}}
   */
  result (options = undefined) {
    if (options === undefined) {
      return {className: this.baseClass}
    }

    const isElement = Object.keys(options)[0] !== 'm'

    this.classesArr = []

    options = resolveOptions(options)

    options.forEach(className => {
      let keys = Object.keys(className)
      let element = keys[0]
      let modifiers = className.m

      if (isElement) {
        if (!className[element]) {
          return
        }

        this.classesArr.push(element)

        let resultingModifiers = this.solveModifiers(modifiers, element)

        if (resultingModifiers.length) {
          this.classesArr.push(...resultingModifiers)
        }

        this.classesArr = this.classesArr.map(item => [this.baseClass, item].join(this.elementSymbol))

        return
      }

      if (!this.classesArr.includes(this.baseClass)) {
        this.classesArr.push(this.baseClass)
      }

      let resultingModifiers = this.solveModifiers(modifiers, this.baseClass)

      if (resultingModifiers.length) {
        this.classesArr.push(...resultingModifiers)
      }
    })

    return {className: this.classesArr.join(' ').trim()}
  }

  solveModifiers (modifiers, element) {
    let classesArr = []

    if (modifiers) {
      if (modifiers.length === undefined) {
        Object.keys(modifiers).map(modifier => modifiers[modifier]
          ? classesArr.push([element, modifier].join(this.modificationSymbol))
          : null
        )

        return classesArr
      }

      if (typeof modifiers === "string") {
        modifiers = [modifiers]
      }

      this.classesArr.push(...modifiers.map(modifier => [element, modifier].join(this.modificationSymbol)))
    }

    return classesArr
  }

  static getClassesList (list) {
    let classesArr = []

    if (Array.isArray(list)) return list.join(' ')

    for (let key in list) {
      if (list[key]) classesArr.push(key)
    }

    return classesArr.join(' ')
  }

  static resultList (list) {
    return {className: Classes.getClassesList(list)}
  }
}

export default Classes

export const cls = new Classes()
