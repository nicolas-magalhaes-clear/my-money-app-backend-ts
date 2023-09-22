import express, {Express, Router, Request, Response} from 'express'

//Database imports
import billingCycleModel from '../models/billingCycles'



const router : Router = express.Router()


router.get('/', async(req: Request, res: Response) =>{

    const result = await billingCycleModel.find({});
    res.send(result)

})

router.post('/', async(req: Request, res: Response) =>{

    

})
router.put('/', async(req: Request, res: Response) =>{

    

})
router.delete('/', async(req: Request, res: Response) =>{

    

})

export default router;