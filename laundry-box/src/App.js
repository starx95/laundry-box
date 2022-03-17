import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Forgotpassword from "./pages/Forgotpassword";
import Home from "./pages/customer/Home";
import Login from "./pages/login";
import MyProfile from "./pages/customer/MyProfile";
import Otp from "./pages/Otp";
import Register from "./pages/Register";
import Support from "./pages/Support";
import UnlockLocker from "./pages/UnlockLocker";
import Welcome from "./pages/Welcome";
import WelcomePage from "./pages/WelcomePage";
import Inbox from "./pages/customer/Inbox";
import Myorder from "./pages/customer/Myorder";
import WashingAndIron from "./pages/customer/WashingAndIron";
import PickupSchedule from "./pages/customer/PickupSchedule";
import OrderDetails from "./pages/customer/Order-Details";
import Payment from "./pages/customer/Payment";
import Success from "./pages/customer/Success";
import OrderPlaced from "./pages/customer/OrderPlaced";
import Track from "./pages/customer/Track";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/forgot-password" element={<Forgotpassword />} />
        <Route exact path="/unlock-locker" element={<UnlockLocker />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/otp" element={<Otp />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/support" element={<Support />} />
        <Route exact path="/myprofile" element={<MyProfile />} />
        <Route exact path="/inbox" element={<Inbox />} />
        <Route exact path="/myorder" element={<Myorder />} />
        <Route exact path="/washingandiron" element={<WashingAndIron />} />
        <Route exact path="/PickupSchedule" element={<PickupSchedule />} />
        <Route exact path="/order-details" element={<OrderDetails />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/success" element={<Success />} />
        <Route exact path="/order-placed" element={<OrderPlaced />} />
        <Route exact path="/track" element={<Track />} />
        <Route exact path="/MyOrder" element={<Myorder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
