import type { NextApiRequest, NextApiResponse } from 'next'
import { createListing, getAllListingService, putListingService,deleteOneListingService, getListingService } from "../services/listing/listing.service";
import { listingSchema } from '../validations/listing.valdiation';


// POST: api/listing // endpoint para crear un listing
export const create = async (req : NextApiRequest, res : NextApiResponse) =>{
    console.log("req.body:" ,req.body)
    const {error } = listingSchema.validate(req.body)
    if (error) return res.status(400).json({message: error.details[0].message})
    const newListing = await createListing(req.body) 
    res.send({newListing})
}

export const getAllListing = async (req : NextApiRequest ,res : NextApiResponse) =>{
   // res.status(200).json(getAllListingService())
    const allListing =  await getAllListingService()
   //if (error) return res.status(400).json({message: error})
    res.send({ list: allListing })
}


export const getListing = async (req : NextApiRequest ,res : NextApiResponse) =>{
    // res.status(200).json(getAllListingService())
  //  const allListing =  await getAllListingService()
    //if (error) return res.status(400).json({message: error})
    const listingId = req.query.id
    const listing = await getListingService(listingId) 
   // console.log("imprimiendo", req.query.id)
    res.send(listing)
}

export const putListing = async (req: NextApiRequest , res: NextApiResponse) =>{
    
    const listingId = req.query.id
    //console.log(listingId)
    //const putListing = await putListingService(query.id, req.body)
    const newDataListing = req.body
   // console.log(newDataListing)
    const listingUpdated = await putListingService(listingId, newDataListing)
    res.send(listingUpdated)
}

export const deleteListing = async ( req: NextApiRequest, res: NextApiResponse)=>{
    
    const deleteId = req.query.id
    const deleteCarBody = req.query.body
    console.log()
    const deleteOneListing = await deleteOneListingService(deleteId, deleteCarBody)
    res.send({deleteOneListing})
}


