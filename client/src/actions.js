import { CALL_API } from './middlewares/api'

export const getEvents = () => ({
    type: 'GET_EVENTS',
    [CALL_API]: {
      endpoint: '/events'
    }
  })


export const createEvent = (title, venue, date) => ({
  type: 'CREATE_EVENT',
  [CALL_API]: {
    endpoint: '/events',
    method: 'POST',
    data: {
      title,
      venue,
      date
    }
  }
})
