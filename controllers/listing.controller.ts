import type { NextApiRequest, NextApiResponse } from 'next'
import { createListingService, updateListingService, deleteOneListingService, getListingService, searchListingAvailable } from "../services/listing/listing.service";
import { listingSchema } from '../validations/listing.valdiation';
import { SearchListing } from '../interfaces/SearchListing';


// POST: api/listing // endpoint to create a listing
export const createListing = 
    async (req: NextApiRequest, res: NextApiResponse) => {

    console.log("req.body: ", req.body)

    const newListingData =  req.body
    // Validate request data - listing input
    const {error } = listingSchema.validate( newListingData )
    if (error) {
        return (
            res.status(400).json({
                message: error.details[0].message
            })
        )
    }

    const { status, code, message, listing } = await createListingService( newListingData )

    res.status( code ).send({ status, code, message, listing })
}

// Search for available vehicles for the preferences selected by the user
export const searchListing = 
    async ( req: NextApiRequest , res: NextApiResponse ) => {
    
    const searchListing: SearchListing = {
        type: req.query.type,
        location: req.query.location,
        pickUp: req.query.pickUp,
        dropOff: req.query.dropOff,
        price_per_day: req.query.price_per_day,
        minPrice: req.query.minPrice,
        maxPrice: req.query.maxPrice,
        startDate: req.query.startDate,
        endDate: req.query.endDate
    } 
    // console.log("searchListing: ", searchListing);

    const resultSearchListing = await searchListingAvailable( searchListing )
    
    console.log("resultSearchListing: ", resultSearchListing);

    // const resultListing = resultSearchListing.available_listing.map(listing => resultSearchListing.available_listing)
    // console.log("resultListing: ", resultListing);
    res.send(resultSearchListing)
}



export const getListing = async (req: NextApiRequest, res: NextApiResponse) => {

    // id to identify the "listing" to return
    const listingId = req.query.id
    // Getting "listing"
    const { status, code, message, listing } = await getListingService(listingId) 

    console.log("listing: ", listing)

    res.status( code ).send({ status, code, message, listing })
}

// Update the data of a vehicle by id
export const updateListing = async ( req: NextApiRequest, res: NextApiResponse) => {
    // id to indentify the vehicle to update
    const listingId = req.query.id
    // Information to update
    const newDataListing = req.body
   // console.log(newDataListing)

    const { status, code, message, listing } = await updateListingService(listingId, newDataListing)

    res.status( code).send({ status, code, message, listing })
}

export const deleteListing = async ( req: NextApiRequest, res: NextApiResponse)=>{
    
    const deleteId = req.query.id
    const deleteCarBody = req.query.body
    console.log()
    const deleteOneCar= await deleteOneListingService(deleteId, deleteCarBody)
    res.send({deleteOneCar})
}