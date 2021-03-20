import {
  toDateText,
  deleteSourceFromTitle
} from '../../fetchers/newsapi/utils'

describe('NewsAPI JSON article to Article object', () => {
  it('Converts date properly', () => {
    const sample = '2021-02-16T00:39:38Z'
    const sample2 = '2021-02-15T23:27:31+00:00'

    const date = toDateText(sample)
    const date2 = toDateText(sample2)

    expect(date).toBe('February 16, 2021')
    expect(date2).toBe('February 15, 2021')
  })

  it('Deletes source at the end of title', () => {
    const sample = 'Blablablabla - Fox News'
    const sample2 = 'Blablabla - Blablabla --- Blablabla - Blabla - Fox News'

    const noSource = deleteSourceFromTitle(sample)
    const noSource2 = deleteSourceFromTitle(sample2)

    expect(noSource).toBe('Blablablabla')
    expect(noSource2).toBe('Blablabla - Blablabla --- Blablabla - Blabla')
  })
})
