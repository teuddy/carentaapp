import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllReviewService,  createReview } from "../services/review/review.service";
import { reviewSchema } from '../validations/review.validation';


// POST: api/review // endpoint para crear un review
export const create = async (req : NextApiRequest, res : NextApiResponse) =>{
    console.log("req.body:" ,req.body)
    const {error } = reviewSchema.validate(req.body)
    if (error) return res.status(400).json({message: error.details[0].message})
    const newReview = await createReview(req.body) 
    res.send({newReview})
}

export const 

const getAllReviews = async(req : NextApiRequest ,res : NextApiResponse) =>{
    res.status(200).json(getAllReviewService())
    const allReviews = await getAllReviews
}
