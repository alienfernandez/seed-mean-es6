import angular from 'angular';
let injector = angular.element(document.body).injector()
let _ = injector.get('lodash');

class List extends Array {

  /**
   * Retorna un elemento a traves de su posicion
   *
   * @param index
   * @returns {*}
   */
  get(index) {
    return this[index];
  }

  /**
   * Agrega un elemento a traves de una posicion
   *
   * @param index
   * @param value
   * @returns {List}
   */
  set(index, value) {
    this[index] = value;
    return this;
  }

  /**
   * Verifica si un elemento existe en la lista
   *
   * @param element
   * @returns {boolean}
   */
  contains(element) {
    for (var e of this) {
      if (element === e) {
        return true;
      }
    }
    return false;
  }

  /**
   * Permite agregar elementos a la lista
   *
   * @param elements
   * @returns {List}
   */
  add(elements) {
    if (!Array.isArray(elements) && !(elements instanceof List)) {
      elements = [ elements ];
    }
    elements.forEach(e => {
      this.push(e);
    });
    return this;
  }

  /**
   * Verifica si la lista esta vacia
   *
   * @returns {boolean}
   */
  isEmpty() {
    return !this.length;
  }

  /**
   * Permite validar si la lista actual es similar a otra lista
   *
   * @param list
   * @returns {boolean}
   */
  equals(list) {
    if (this.length !== list.length) {
      return false;
    }
    for (var i = 0; i < this.length; i++) {
      if (this[i] !== list[i]) {
        return false;
      }
    }
    return true;
  }

  /**
   * Permite clonar la lista, devolviendo una nueva instancia
   * @returns {List}
   */
  clone () {
    var list = new List;
    return list.add(this);
  }

  /**
   * Permite remover un elemento a travez de su posicion
   *
   * @param index
   * @returns {boolean}
   */
  remove(index) {
    if (~index) {
      this.splice(index, 1);
      return true;
    }
    return false;
  }

  /**
   * Permite remover un elemento especifico
   *
   * @param element
   * @returns {boolean}
   */
  removeElement(element) {
    return this.remove(this.indexOf(element));
  }

  /**
   * Permite remover elementos que se encuentran en otra lista
   *
   * @param list
   * @returns {boolean}
   */
  removeAll(list) {
    var result = false;
    list.forEach(e => result |= this.removeElement(e));
    return result;
  }

  /**
   * Remplaza todos los elementos de la lista por otra lista
   *
   * @param list
   */
  replaceAll(list) {
    this.clear();
    this.add(list);
  }

  /**
   * Remueve todos los elementos de la lista
   */
  clear() {
    this.length = 0;
  }

  /**
   * Permite obtener un array con todos los elementos en el mismo orden
   *
   * @returns {Array}
   */
  toArray() {
    var arr = [];
    this.forEach(e => arr.push(e));
    return arr;
  }

  /**
   * Retorna el primer elemento de la lista
   *
   * @param [n]
   * @returns {*}
   */
  first(n) {
    return _.first(this, n);
  }

  /**
   * Returns everything but the last entry of the list
   *
   * @param [n]
   * @returns {List}
   */
  initial(n) {
    var list = new List;
    return list.add(_.initial(this, n));
  }

  /**
   * Retorna el ultimo elemento de la lista
   *
   * @param [n]
   * @returns {*}
   */
  last(n) {
    return _.last(this, n);
  }

  /**
   * Retorna el resto de elementos de la lista
   *
   * @param index
   * @returns {*}
   */
  rest(index) {
    var list = new List;
    return list.add(_.rest(this, index));
  }

  /**
   * Returns a new list with the false values removed
   *
   * @returns {List}
   */
  compact() {
    var list = new List;
    return list.add(_.compact(this));
  }

  /**
   * Returns a new list flattened
   *
   * @returns {List}
   */
  flatten() {
    var list = new List;
    return list.add(_.flatten(this));
  }

  /**
   * Returns a new list without the specified values
   *
   * @returns {List}
   */
  without() {
    var list = new List;
    return list.add(_.without(this, ...arguments));
  }

  /**
   * Split the list into two arrays
   *
   * @param predicate
   * @returns {Array}
   */
  partition(predicate) {
    var lists = [];
    var arrays = _.partition(this, predicate);
    arrays.forEach(arr => {
      var list = new List;
      lists.push(list.add(arr));
    });
    return lists;
  }

  /**
   * Returns the list joined with the arrays specified, the join is unique
   *
   * @returns {List}
   */
  union() {
    var list = new List;
    return list.add(_.union(this, ...arguments));
  }

  /**
   * Returns the list intercepted with the arrays specified, the intersection is unique
   *
   * @returns {List}
   */
  intersection() {
    var list = new List;
    return list.add(_.intersection(this, ...arguments));
  }

  /**
   * Returns the list minus the arrays specified, the difference is unique
   *
   * @returns {List}
   */
  difference() {
    var list = new List;
    return list.add(_.difference(this, ...arguments));
  }

  /**
   * Returns a list with the duplicated values removed
   *
   * @param {boolean} isSorted
   * @param iterator
   * @returns {List}
   */
  unique(isSorted, iterator) {
    var list = new List;
    return list.add(_.uniq(this, isSorted, iterator));
  }

  /**
   * Alias for unique
   *
   * @param {boolean} isSorted
   * @param iterator
   * @returns {List}
   */
  uniq(isSorted, iterator) {
    return this.unique(isSorted, iterator);
  }

  /**
   *
   * @returns {List}
   */
  zip() {
    var list = new List;
    return list.add(_.zip(this, ...arguments));
  }

  /**
   *
   * @param values
   * @returns {List}
   */
  object(values) {
    var list = new List;
    return list.add(_.object(this, values));
  }

  /**
   * Returns the index at which the value should be inserted into the list
   *
   * @param value
   * @param iterator
   * @param context
   * @returns {Number}
   */
  sortedIndex(value, iterator, context) {
    return _.sortedIndex(this, value, iterator, context);
  }

  /**
   * alias for forEach
   *
   * @returns {List.forEach}
   */
  each() {
    return this.forEach.apply(this, arguments);
  }

  /**
   * Returns a new list with each value mapped through a transformation
   *
   * @param iterator
   * @param context
   * @returns {List}
   */
  map(iterator, context) {
    var list = new List;
    return list.add(_.map(this, iterator, context));
  }

  /**
   * Returns a new list with the occurrences that passes the test
   *
   * @param predicate
   * @param context
   * @returns {List}
   */
  filter(predicate, context) {
    var list = new List;
    return list.add(_.filter(this, predicate, context));
  }

  /**
   *
   * @param properties
   * @returns {*}
   */
  where(properties) {
    return _.where(this, properties);
  }

  /**
   *
   * @param properties
   * @returns {*}
   */
  findWhere(properties) {
    return _.findWhere(this, properties);
  }

  /**
   *
   * @param predicate
   * @param context
   * @returns {List}
   */
  reject(predicate, context) {
    var list = new List;
    return list.add(_.reject(this, predicate, context));
  }

  /**
   *
   * @param methodName
   * @returns {List}
   */
  invoke(methodName) {
    var list = new List;
    return list.add(_.invoke(this, ...arguments));
  }

  /**
   *
   * @param propertyName
   * @returns {*}
   */
  pluck(propertyName) {
    return _.pluck(this, propertyName);
  }

  /**
   * Returns the maximum value in list
   *
   * @param iterator
   * @param context
   * @returns {*}
   */
  max(iterator, context) {
    return _.max(this, iterator, context);
  }

  /**
   * Returns the minimum value in list
   *
   * @param iterator
   * @param context
   * @returns {*}
   */
  min(iterator, context) {
    return _.min(this, iterator, context);
  }

  /**
   * Returns a new list with the values sorted
   *
   * @param iterator
   * @param context
   * @returns {List}
   */
  sortBy(iterator, context) {
    var list = new List;
    return list.add(_.sortBy(this, iterator, context));
  }

  /**
   *
   * @param iterator
   * @param context
   * @returns {*}
   */
  groupBy(iterator, context) {
    return _.groupBy(this, iterator, context);
  }

  /**
   *
   * @param iterator
   * @param context
   * @returns {*}
   */
  indexBy(iterator, context) {
    return _.indexBy(this, iterator, context);
  }

  /**
   *
   * @param iterator
   * @param context
   * @returns {*}
   */
  countBy(iterator, context) {
    return _.countBy(this, iterator, context);
  }

  /**
   * Returns a shuffled copy of the list, using a version of the Fisher-Yates shuffle
   *
   * @link http://en.wikipedia.org/wiki/Fisher–Yates_shuffle
   * @returns {List}
   */
  shuffle() {
    var list = new List;
    return list.add(_.shuffle(this));
  }

  /**
   * Returns a random sample from the list.
   *
   * @param n
   * @returns {*}
   */
  sample(n) {
    return _.sample(this, n);
  }

  /**
   * Returns the length of the list
   *
   * @returns {Number}
   */
  size() {
    return this.length;
  }
}

export default List;
