
import { Router } from 'express'
import deckController from './controller/deckController'

const routes = Router()



routes.get('/deck/createDeck', deckController.createDeck)
routes.get('/deck/getCommander', deckController.getCommander)
routes.get('/deck/getCardsByColor', deckController.getCardsByColor)



export default routes