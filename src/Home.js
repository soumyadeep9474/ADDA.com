import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import conf from '../src/assets/conf.jpg'
import Navbar from "./components/Navbar";

const Home = () => {
    const [RoomCode, setRoomCode] = useState("");
    console.log(RoomCode);

    const navigate = useNavigate();

    const submitCode = (e) => {
        e.preventDefault();
        navigate(`/room/${RoomCode}`);
    }

    return (
        <div className="">
            {/*Navbar*/}
            <Navbar />
            {/*Hero */}
            <div className="relative h-[90vh]">
                {/*Image */}
                <div className="absolute h-[90vh] w-full flex overflow-hidden">
                    <img src={conf} className="object-cover w-full h-full" />
                </div>
                <div className="absolute h-[90vh] w-full flex overflow-hidden bg-black/40"></div>
                {/*Hero info */}
                <div className="relative z=10 px-6 md:max-w-[90vw] mx-auto flex flex-col justify-start items-center h-full pt-36">
                    {/*Mian */}
                    <div className="pb-8 ">
                        <h1 className="text-[56px] text-white font-bold">ADDA </h1>
                        <p className="text-[28px] text-white -mt-2 font ">with Homies</p>
                    </div>
                    {/*Enter Code */}
                    <form
                        onSubmit={submitCode}
                        className="text-white flex flex-col items-center justify-center">
                        <div className="flex flex-col justify-center gap-2">
                            <label className="text-[27px] font-bold">Enter Room Code</label>
                            <input type="text"
                                required
                                placeholder="type room code here"
                                value={RoomCode}
                                onChange={(e) => setRoomCode(e.target.value)}
                                className="bg-blue-500 placeholder:text-white py-2 w-[14rem] rounded-full pl-8 mt-2" />
                        </div>
                        <button type="submit"
                            className="bg-green-500 rounded-[3rem] mt-4 py-1.5 px-4 font-bold"
                        >OK</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Home;