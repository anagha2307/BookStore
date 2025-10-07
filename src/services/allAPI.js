import commonAPI from "./commonAPI"
import serverUrl from "./serverUrl"

//guset user

//register api - called by Auth component when register btn is clicked, content-type:"application-json"
export const registerAPI = async (reqBody) =>{
    return await commonAPI("POST",`${serverUrl}/register`,reqBody)
}

//login api
//home page books api
//all career api

//authorised user api - user

// view all books 
// view single book
// upload book
// profile update
// purchased book
// appove books

//authorised user api - admin

// add career
// update admin
// list books
//  
