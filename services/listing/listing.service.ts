import { SearchListing } from "../../interfaces/SearchListing";
import ListingModel, { Listing } from "../../models/listingModel";


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

export  const  searchListingAvailable = async ( query: SearchListing ) => {

    // The minimun data (start and end date) for a query is evaluated, without this data the request is rejected
    if ( query.startDate === undefined ||  query.endDate === undefined ) {
        return {
            status: "Query Error",
            code: 400,
            message: "There is no enough data selected in the query, please select start and end date"
        }
    }

    const{ type, location, price_per_day, minPrice, maxPrice, startDate, endDate } = query
    // Getting the list of available vehicles to display to the user
    const resultListing = await ListingModel.find({
        type: type,
        location: location,
        price_per_day: { $lte: maxPrice, $gte: minPrice },
    }, {
        type: 1,
        location: 1,
        price_per_day: 1,
    });

    // Response when no options available
    if(resultListing.length === 0) {
        return{
            status: "Query completed successfully",
            code: 200,
            message: "No options available for selected options"
        }
    }
    // Response with available vehicles
    return {
        status: "Query completed successfully",
        code: 200,
        available_listing: resultListing
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


