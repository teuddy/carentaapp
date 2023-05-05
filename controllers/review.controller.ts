import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllReviewService } from "../services/listing/listing.service";
import { listingSchema } from '../validations/listing.valdiation';


// POST: api/listing // endpoint para crear un listing
const create = (req : NextApiRequest, res : NextApiResponse) =>{
    const {error } = listingSchema.validate(req.body)
    if (error) return res.status(400).json({message: error.details[0].message})
    res.send("data de listing correcta")
    
}


const getAllReviews = async(req : NextApiRequest ,res : NextApiResponse) =>{
    res.status(200).json(getAllReviewService())
    const allReviews = await getAllReviews
}
