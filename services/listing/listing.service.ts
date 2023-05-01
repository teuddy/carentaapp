
//este es el que busca en el modelo

import { ListingModel } from "../../models/listingModel";
import { connect } from "../../utils/dbConnection";
//import  ListingModel  from "../../models/listingModel"


// Listing.find({})
const createListing = async (data) =>{
    connect()
    try{
        const createNewListing = await ListingModel.create(data);
        return createNewListing;
    } catch (err) {
        console.log("err", err);
        return({ error: err})
    }
}



const getAllListingService = async () =>{
    connect()
    // ListingModel.find()
    //     .then(allListing => {
    //         console.log('listing', allListing)
    //         return allListing
    //     })
    //     .catch(err =>{
    //         

    //     })
    try {
        const allListings = await ListingModel.find();
        return allListings;
    } catch (err) {
        console.log("err", err);
        return({ error: err})
    }
}

const putListingService = async (id, body) => {
    connect()

    try{
        const putListing = await ListingModel.findOneAndUpdate({_id:id}, body,{ new: true});
        return putListing;
    }catch (err){
        console.log("err", err);
        return({error: err})
    }
}

const deleteOneListingService = async (id)=> {
    connect()
    try{
        const deleteListing = await ListingModel.deleteOne({ _id:id});
        return deleteListing;
    }catch (err){
        console.log("err", err);
        return({error: err})
    }
}

export { getAllListingService, putListingService, createListing, deleteOneListingService }


