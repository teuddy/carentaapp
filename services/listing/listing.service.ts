import ListingModel, { Listing } from "../../models/listingModel";
import { connect } from "../../utils/dbConnection";
import { query } from "express";
import { clearScreenDown } from "readline";


// Register new listing in the DB
export const createListingService = async ( newListingData: Listing ) => {
    console.log( "newListingData: ", newListingData );
    try{
        // Check if the listing is already registerd in the DB to reject the register process
        const registeredListing = await ListingModel.findOne({ vin: newListingData.vin})

        if(registeredListing) {
            return {
                status: "Registration process failed",
                code: 400,
                message: "Listing has been registered"
            }
        }

        // Create listing in the DB
        const newListing = await ListingModel.create( newListingData )
        // Save listing in the DB
        await newListing.save()

        return {
            status: "Successful LISTING registration",
            code: 200,
            listing: newListing
        }

    } catch (error) {
        console.log("error: ", error);
        return (error)
    }
}

export  const  searchListingAvailable = async ( query: Listing) =>{

    const{type , location, price_per_day} = query
    console.log("type:" , type, "location:" , location, "price")
    //const resultListing = await ListingModel.find({type: type}, {location: location}, {price_per_day: price_per_day});
    
    //const resultListing = await ListingModel.find({_id:"64581515ad77bb8334ee8b0c"});
    const resultListing = await ListingModel.find({price_per_day: price_per_day});
    console.log("result",resultListing)
    return {
        resultListing
    }
}


export const getAllListingService = async () =>{
     // ListingModel.find()
    //     .then(allListing => {
    //         console.log('listing', allListing)
    //         return allListing
    //     })
    //     .catch(err =>{
    //         

    //     })

    try {
        const listingCar  =  
            {
        "make":"",
        "model":"",
        "year":"",
        "description":"",
        "location":"",
        "price_per_day":"",
        "is_available": true,
        "image_urls": ["https://acnews.blob.core.windows.net/imgnews/large/NAZ_ce0fb6a213d54ce6bc9e3d45299973d4.jpg"]
        }
        //const allListings = await ListingModel.find();
        return listingCar;
    } catch (err) {
        console.log("err", err);
        return({ error: err})
    }
}

export const getListingService = async ( listingId: string | string[] )  =>{
    console.log("getService", listingId )

    try {
        const getListing = await ListingModel.findById(listingId) 
        return getListing        
    } catch (err) {
        console.log("err", err);
        return({ error: err})
    }
}


export const putListingService = async (id: string | string[] , body: Listing) => {
    
    try{
        const putListing = await ListingModel.findByIdAndUpdate(id , body);
        //console.log("putlisting", putListing)
        return putListing;
    }catch (err){
        console.log("err", err);
        return({error: err})
    }
}

export const deleteOneListingService = async (id, body)=> {
    try{
        const deleteListing = await ListingModel.deleteOne(id, body);
        //console.log("deleteListing" , deleteListing)
        return deleteListing;
    }catch (err){
        console.log("err", err);
        return({error: err})
    }
}


