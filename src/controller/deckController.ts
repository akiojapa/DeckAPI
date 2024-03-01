import deckService from "../services/deckService";
import { Request, Response } from 'express'

class deckController{   

    public async createDeck(req: Request, res: Response): Promise<any> {

        const deck: any = await deckService.createDeck();
        return res.status(200).json(deck)
    }

    public async getCommander(req: Request, res: Response): any {
        const commander =  await deckService.getCommander("'Atraxa, Praetors' Voice'");
        console.log(commander);
        return res.status(200).json(commander)
    }

    public async getCardsByColor(req: Request, res: Response): any {
        const cards =await deckService.getCardsByColor(["B","G","U","W"], "Double Masters");
        return res.status(200).json(cards)
    }

}

export default new deckController();


