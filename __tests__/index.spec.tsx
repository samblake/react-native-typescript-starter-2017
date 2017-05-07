import 'react-native'
import Index from '../src/index'
import React from 'react'
import renderer from 'react-test-renderer'

test('Index is rendered', () => {
  const tree = renderer.create(
    <Index />
  )
  expect(tree).toBeDefined();
})