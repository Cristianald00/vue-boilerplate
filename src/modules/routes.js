import { routes as auth } from './auth'
import { routes as cart } from './cart'
import { routes as about } from './about'
import { routes as users } from './users'
import { routes as profile } from './profile'
import { routes as landing } from './landing'
import { routes as products } from './products'
import { routes as dashboard } from './dashboard'

// Thus a new array is created, containing all objects that match the routes.
export default [...auth, ...dashboard, ...landing, ...profile, ...users, ... products, ... cart, ... about]
