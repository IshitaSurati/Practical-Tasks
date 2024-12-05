const express=require("express");
const { Signup, Login, Logout, authCheck } = require("../controllers/auth.controller");
const protectRoute = require("../middleware/protectRoute");

const Auth_router=express.Router();

Auth_router.post("/signup",Signup )
Auth_router.post("/login",Login )
Auth_router.post("/logout",Logout )
Auth_router.get("/authCheck", protectRoute, authCheck);

module.exports=Auth_router;