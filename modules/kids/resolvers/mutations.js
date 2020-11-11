const Kid = require("../../../models/Kid");
const checkAuth = require("../../../utils/check-auth");

const { generated } = require("../../../utils/generator");
const e = require("express");


const createKid = async (
  _,
  { kidInput: { name, nickName, birthdate, profileImageUrl } },
  context
) => {
  const user = checkAuth(context);

  const code = await generated(10);
  // console.log("code", code);
  try {
    const kid = new Kid({
      name,
      nickName,
      birthdate,
      profileImageUrl,
      userId: user.userId,
      code,
      familyMembers: [],
    });

    const result = await kid.save();

    return { ...result._doc };
  } catch (err) {
    throw err;
  }
};


const addKidProfileImage = async (_, {id, imageUrl }, context) =>{
  
  const user = checkAuth(context);

  try{
    if (!user) {
      console.log("User not authenticated!")
      throw new Error("User not authenticated") 
    }

    if(!id) {
      console.log("Please provide kid Id")
      throw new Error("Please provide kid Id") 
    }
    
    const kid = await Kid.findById(id);
    console.log("kidDate:", kid)

    if (!kid) {
      throw new Error(`Couldn’t find Kid with id ${id}`); 
    }
    
    kid.profileImageUrl = imageUrl
    console.log("updated:", kid)
    
    const result = await kid.save();

    return {...result._doc} ;

  }
  catch(error){
    console.log("addKidProfile mutation error:",error)
    throw error
  }
}

module.exports = { createKid, addKidProfileImage };
