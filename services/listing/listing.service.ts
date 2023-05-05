
//este es el que busca en el modelo

import { get } from "http";
import ListingModel, { Listing } from "../../models/listingModel";
import { connect } from "../../utils/dbConnection";
//import  ListingModel  from "../../models/listingModel"


// Listing.find({})
export const createListing = async (data: Listing) =>{

    try{
        const createNewListing = await ListingModel.create(data);
        return createNewListing;
    } catch (err) {
        console.log("err", err);
        return({ error: err})
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

export const deleteOneListingService = async (id)=> {
    try{
        const deleteListing = await ListingModel.deleteOne({ _id:id});
        return deleteListing;
    }catch (err){
        console.log("err", err);
        return({error: err})
    }
}



