import { ClassesOptionsInterface } from '../interfaces/Classes.interface'
import { ModifiersInterface } from '../interfaces/Modifiers.interface'

import Modifiers from './Modifiers'

/**
 * @param {Object} options
 *        {string} options.elementSymbol = '__'
 *        {string} options.modificationSymbol = '--'
 *        {string} options.baseClass = ''
 */
class Classes {
  private readonly baseClass: string
  private readonly elementSymbol: string
  private modificationSymbol: string
  private classesArr: string[]
  private Modifiers: ModifiersInterface

  constructor (options: ClassesOptionsInterface) {
    options = {
      elementSymbol: '__',
      modificationSymbol: '--',
      baseClass: '',
      Modifiers: new Modifiers('--'),
      ...options
    }

    this.baseClass = options.baseClass
    this.elementSymbol = options.elementSymbol
    this.modificationSymbol = options.modificationSymbol
    this.classesArr = []

    this.Modifiers = options.Modifiers
  }

  /**
   *
   * @param {Array|Object|String} options
   *        options.m {Array|Object|String|null}
   * @returns {String}
   */
  classList (options: string[] | object | string | undefined = undefined) {
    if (options === undefined) {
      return this.baseClass
    }

    const isElement = Object.keys(options)[0] !== 'm'

    this.classesArr = []

    options = Classes.optionsFactory(options)

    options.forEach(className => {
      let element = Object.keys(className)[0]
      let modifiers = className.m

      if (!isElement) {
        this.classesArr = this.Modifiers.addModifiersToElement(modifiers, this.baseClass, this.classesArr)

        return
      }

      if (!className[element]) return

      this.classesArr = this.Modifiers.addModifiersToElement(modifiers, element, this.classesArr)
        .map(element => [this.baseClass, element].join(this.elementSymbol))
    })

    return this.classesArr.join(' ').trim()
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

    return {className: this.classList(options)}
  }

  /**
   *
   * @param options
   * @returns {Array}
   */
  static optionsFactory (options: string | string[] | object) {
    if (typeof options === "object" && !Array.isArray(options)) {
      options = [options]
    }

    if (typeof options === "string") {
      options = [{
        [options]: true
      }]
    }

    return options
  }

  static getClassesList (list: string[] | object) {
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
