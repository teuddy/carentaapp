import type { NextApiRequest, NextApiResponse } from 'next'
import { createListing, getAllListingService, putListingService,deleteOneListingService } from "../services/listing/listing.service";
import { listingSchema } from '../validations/listing.valdiation';


// POST: api/listing // endpoint para crear un listing
const create = async (req : NextApiRequest, res : NextApiResponse) =>{
    const {error } = listingSchema.validate(req.body)
    if (error) return res.status(400).json({message: error.details[0].message})
    const newListing = await createListing(req.body) 
    res.send({newListing})
}

const getAllListing = async (req : NextApiRequest ,res : NextApiResponse) =>{
   // res.status(200).json(getAllListingService())
    const allListing =  await getAllListingService()
   //if (error) return res.status(400).json({message: error})
    res.send({ list: allListing })
}

const putListing = async (req: NextApiRequest , res: NextApiResponse) =>{
    const putListing = await putListingService(req.query.id, req.body)
    res.send({putListing})
}

const deleteListing = async ( req: NextApiRequest, res: NextApiResponse)=>{
    const deleteOneListing = await deleteOneListingService(req.query.id)
    res.send({deleteOneListing})
}

export {
    create,
    getAllListing,
    putListing,
    deleteListing
};