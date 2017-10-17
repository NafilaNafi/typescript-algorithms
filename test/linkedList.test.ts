import LinkedList from '../src/linkedList'

describe('LinkedList', () => {
  const list = new LinkedList()

  test('should add an element to the LinkedList', () => {
    list.add(1)
    expect(list.head.value).toBe(1)
  })

  test('should remove the last element of the LinkedList', () => {
    expect(list.delete()).toBe(1)
    expect(list.delete()).toBeUndefined()
  })

  test('should run all over the LinkedList', () => {
    let index = 0
    const aux = [1, 2, 3, 4, 5]
    aux.map(x => list.add(x))
    for (const item of list.values()) {
      expect(item).toBe(aux[index])
      index++
    }
  })
})
