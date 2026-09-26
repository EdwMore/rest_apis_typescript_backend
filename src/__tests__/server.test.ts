import db from '../config/db'
import { connectDB } from '..'

jest.mock('../config/db')

describe('connectDB', () => {
  it('Should handle database connection error', async () => {
    jest
      .spyOn(db, 'authenticate')
      .mockRejectedValueOnce(new Error('Ocurrio un Error'))
    const consoleSpy = jest.spyOn(console, 'log')

    await connectDB()

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('Ocurrio un Error'),
    )
  })
})
