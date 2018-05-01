/**
 * @param {Object} options
 *        {string} options.elementSym = '__'
 *        {string} options.modificationSym = '--'
 *        {string} options.baseClass = ''
 */
class Classes {
  constructor (options) {
    options = {
      elementSym: '__',
      modificationSym: '--',
      baseClass: '',
      ...options
    }

    this.baseClass = options.baseClass
    this.elementSym = options.elementSym
    this.modificationSym = options.modificationSym
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
    const isString = typeof options === "string"
    const isArray = options.length === undefined

    this.classesArr = []

    if (isArray) {
      options = [options]
    }

    if (isString) {
      options = [{
        [options]: true
      }]
    }

    options.forEach(item => {
      let keys = Object.keys(item)
      let element = keys[0]
      let modifiers = item.m

      if (isElement) {
        if (!item[element]) {
          return
        }

        this.classesArr.push(element)

        let resultingModifiers = this.solveModifiers(modifiers, element)

        if (resultingModifiers.length) {
          this.classesArr.push(...resultingModifiers)
        }

        this.classesArr = this.classesArr.map(item => [this.baseClass, item].join(this.elementSym))

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
        Object.keys(modifiers).map(inner => modifiers[inner]
          ? classesArr.push([element, inner].join(this.modificationSym))
          : null
        )

        return classesArr
      }

      if (typeof modifiers === "string") {
        modifiers = [modifiers]
      }

      this.classesArr.push(...modifiers.map(item => [element, item].join(this.modificationSym)))
    }

    return classesArr
  }

  getClassesList (list) {
    let classesArr = []

    if (Array.isArray(list)) return list.join(' ')

    for (let key in list) {
      if (list[key]) classesArr.push(key)
    }

    return classesArr.join(' ')
  }

  resultList (list) {
    return {className: this.getClassesList(list)}
  }
}

export default Classes

export const cls = new Classes()
