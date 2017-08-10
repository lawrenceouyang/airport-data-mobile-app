import { sortTransform, filterTransform } from '../../App/Transforms/SubsetTransforms'

test('sort data transform', () => {
  const data = [
    {too: 'dar', foo: 'car'},
    {too: 'sar', foo: 'bar'},
    {too: 'ear', foo: 'zar'},
    {too: 'zar', foo: 'far'},
    {too: 'err', foo: 'ear'}
  ]

  const sortedTooData = [
    {too: 'dar', foo: 'car'},
    {too: 'ear', foo: 'zar'},
    {too: 'err', foo: 'ear'},
    {too: 'sar', foo: 'bar'},
    {too: 'zar', foo: 'far'}
  ]

  const sortedFooData = [
    {too: 'sar', foo: 'bar'},
    {too: 'dar', foo: 'car'},
    {too: 'err', foo: 'ear'},
    {too: 'zar', foo: 'far'},
    {too: 'ear', foo: 'zar'}
  ]

  expect(sortTransform(data, 'too')).toEqual(sortedTooData)
  expect(sortTransform(data, 'foo')).toEqual(sortedFooData)
})

test('filter data transform', () => {
  const data = [
    {too: 'dar', foo: 'car'},
    {too: 'car', foo: 'bar'},
    {too: 'dar', foo: 'zar'},
    {too: 'zar', foo: 'far'},
    {too: 'err', foo: 'zar'}
  ]

  const filteredTooDarData = [
    {too: 'dar', foo: 'car'},
    {too: 'dar', foo: 'zar'}
  ]

  const filteredFooZarData = [
    {too: 'dar', foo: 'zar'},
    {too: 'err', foo: 'zar'}
  ]

  expect(filterTransform(data, 'too', 'dar')).toEqual(filteredTooDarData)
  expect(filterTransform(data, 'foo', 'zar')).toEqual(filteredFooZarData)
})
