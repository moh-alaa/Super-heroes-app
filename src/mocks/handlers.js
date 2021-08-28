import {rest} from 'msw'
import mockData from './mock-data.json';

export const handlers = [
  rest.get('/api/search/:search', (req, res, ctx) => {
    const { search } = req.params

    return res(
      ctx.status(200),
      ctx.json({
        response: 'success',
        results: mockData.filter(hero => {
          return hero.name.toLowerCase()
            .search(search.trim().toLowerCase()) !== -1
        }),
      })
    )
  }),
  rest.get('/api/:id', (req, res, ctx) => {
    const { id } = req.params
    const hero = mockData.find(hero => hero.id === id);
    if (!hero) {
      res(
        ctx.status(404)
      )
    }

    return res(
      ctx.status(200),
      ctx.json(hero)
    )
  }),
]
