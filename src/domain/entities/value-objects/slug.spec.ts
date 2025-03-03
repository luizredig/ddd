import { Slug } from './slug'

test('Create a slug from a string', () => {
  const slug = Slug.createFromString('How to create a slug')

  expect(slug.value).toEqual('how-to-create-a-slug')
})
