const express=require("express");
const router=express.Router();
const { newOrder, 
    getOneOrder, 
    myOrders, 
    allOrders,
    updateOrder,
    deleteOrder
} = require("../controllers/orderController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/order/new").post(newOrder)
router.route("/order/:id").get(getOneOrder)
router.route("/orders/me").get(myOrders)


//rutas de admin
router.route("/admin/orders").get(allOrders)
router.route("/admin/order/:id").put(updateOrder)
router.route("/admin/order/:id").delete(deleteOrder)


module.exports=router;