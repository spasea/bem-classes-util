# This is a utility to manage classnames with convenience based on BEM methodology

## Creating instance
You can create an instance of the classnames and pass the base classname
```javascript
  import Classes from 'bem-classes-util'

  const SW = new Classes({ baseClass: 'site-wrapper' })
```

There is an option to configure modifications symbol and elements symbol
```javascript
  const SW = new Classes({ 
    baseClass: 'site-wrapper', 
    elementSym: '__',
    modificationSym: '--' 
  })
```

## Elements
If you need only to add an element you can simply pass a string to this method
```javascript
  SW.result('element') // --> { className: 'site-wrapper__element' }
```

You can pass an object of elements or an array as well
```javascript
  SW.result([ 'element1', 'element2' ]) // --> { className: 'site-wrapper__element1 site-wrapper__element2' }
  SW.result({ 'element1': true, 'element2': true, 'element3': false }) // --> { className: 'site-wrapper__element1 site-wrapper__element2' }
```


## Modifiers
Then you can add modifiers to the base class and receive object with className
```javascript
  SW.result({ m: 'index' }) // --> { className: 'site-wrapper site-wrapper--index' }
```

Modifiers can be also passed as array and as object
```javascript
  SW.result({ m: ['modifier1', 'modifier2'] }) // --> { className: 'site-wrapper site-wrapper--modifier1 site-wrapper--modifier2' }
  SW.result({ m: { 'modifier1': true, 'modifier2': false } }) // --> { className: 'site-wrapper site-wrapper--modifier1' }
```

The same is about the element modifiers
```javascript
  SW.result({ 'element': true , m: ['modifier1', 'modifier2'] }) // --> { className: 'site-wrapper__element site-wrapper__element--modifier1 site-wrapper__element--modifier2' }
  SW.result({ 'element': true , m: { 'modifier1': true, 'modifier2': false } }) // --> { className: 'site-wrapper__element site-wrapper__element--modifier1' }
```

## Static methods
If you need just to concat classnames from the array or an object with statements
```javascript
  Classes.resultList({ 'class1': true, 'class2': false }) // --> { className: 'class1' }
  Classes.resultList([ 'class1' ]) // --> { className: 'class1' }
```

If you need just a list with classnames from the array or an object with statements
```javascript
  Classes.getClassesList({ 'class1': true, 'class2': false }) // --> 'class1'
  Classes.getClassesList([ 'class1' ]) // --> 'class1'
```