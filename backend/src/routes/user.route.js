import express from "express"
import { register, login } from "../controller/user.controller.js";
const router = express()

router.route("/register").post(register)

router.route("/login").post(login)

// router.route('/getCurrentUser').get(verifyJWT, currentUser)

// router.route('/logout').post(verifyJWT, logoutUser)

// router.route('/google/callback').get(verifyGoogleToken);

// router.route('/get-user-count').get(getUserCount);


export default router;