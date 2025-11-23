import { createPinia } from 'pinia'

import players from './modules/players'
import session from './modules/session'

const pinia = createPinia()

export { players, session }

export default pinia
