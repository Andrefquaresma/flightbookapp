import React from "react";
import DepartureComponent from "./bodySection/DepartureComponent";
import ArrivalComponent from "./bodySection/ArrivalComponent";
import HeaderComponent from "./HeaderComponent";
import RoundTripComponent from "./tripTypeComponents/RoundTripComponent";
import OneWayComponent from "./tripTypeComponents/OneWayComponent";
import DepartureDateComponent from "./dateComponents/DepartureDateComponent";
import ReturnDateComponent from "./dateComponents/ReturnDateComponent";
import BabyComponent from "./passengerComponents/BabyComponent";
import ChildComponent from "./passengerComponents/ChildComponent";
import AdultComponent from "./passengerComponents/AdultComponent";
import FindFlightComponent from "./buttonComponents/FindFlightComponent";
import {useForm} from "react-hook-form";
import { FaChild, FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import { MdChildFriendly } from "react-icons/md";
import { GiPerson } from "react-icons/gi";


const FlightApp = () => {

    //handle event

    const {register, handleSubmit, watch, formState: {errors} } = useForm();

    //handle submit

    const onSubmit = data => alert(JSON.stringify(data));

    return (
        <React.Fragment>
            <section>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="bg-green-100 w-auto h-auto pb-10 mt-5 mx-5 px-5 rounded-lg">
                        
                        {/* header section */}
                        
                        <div className="h-24 flex justify-center items-center shadow">
                            <p className="uppercase font-bold text-4xl text-center"> flight booking app</p>
                        </div>

                        {/*body section*/}
                        <div>
                            <div className="grid justify-center space-y-5 bg-indigo-50 pb-10">
                                <div>
                                <div className="flex space-x-8 mt-5">
                                    <div className="flex items-center space-x-2">
                                        <input 
                                        type="radio"
                                        className={`w-6 h-6 ${errors.tripType &&
                                        "focus:border-red-500 focus:ring-red-500 border-red-500"}`}
                                        value="RT"
                                        {...register("tripType", {required: {
                                            value:true,
                                            message:"Trip Type is required"
                                        }})}
                                        />
                                        <p className="text-x1 font-bold">Round Trip</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <input 
                                        type="radio"
                                        className={`w-6 h-6 ${errors.tripType &&
                                        "focus:border-red-500 focus:ring-red-500 border-red-500"}`}
                                        value="OWT"
                                        {...register("tripType",{ required: {
                                            value:true,
                                            message:'Trip Type is required'
                                        }})}
                                        />
                                        <p className="text-x1 font-bold">One Way</p>
                                          
                                </div>
                                </div>
                                    <div>
                                        {errors.tripType && <span className="text-sm text-red-500">{errors.tripType.message}</span>}
                                    </div>
                                </div>
                            

                                {/*departure section*/}
                                <div>
                                    <div className="relative">
                                        <p className="font-bold text-xl uppercase">Flying From</p>
                                        <select 
                                        className={`w-full h-16 rounded-lg text-2xl pl-20 ${errors.departure &&
                                            "focus:border-red-500 focus:ring-red-500 border-red-500"}`}
                                        {...register("departure", {required: {
                                            value: true,
                                            message:"Select Your Starting Point"
                                        }})}
                                        >
                                        <option value='' selected disabled hidden>--Select Airport--</option>
                                        <option value='LISPT'>Lisbon-Portugal Airport</option>
                                        <option value='MADES'>Madrid-Spain Airport</option>
                                        <option value='LNDWK'>London International Airport</option>
                                        <option value='SVL'> Sevilla International Airport</option>
                                        <option value='BCN'> Barcelona International Airport</option>
                                        </select>
                                        <FaPlaneDeparture className="text-4xl absolute left-5 top-10"/>
                                    </div>
                                    <div>
                                        {errors.departure && <span className="text-sm text-red-500">{errors.departure.message}</span>}    
                                    </div>
                                </div>

                                {/*arrival section*/}
                                <div>
                                    <div className="relative">
                                        <p className="font-bold text-xl uppercase">Flying To</p>
                                        <select 
                                        className={`w-full h-16 rounded-lg text-2xl pl-20 ${errors.arrival &&
                                        "focus:border-red-500 focus:ring-red-500 border-red-500"}`}
                                        {...register("arrival", {required: {
                                            value:true,
                                            message:"Select Your Destination"
                                        }})}
                                        >
                                        <option value='' selected disabled hidden>--Select Airport--</option>
                                        <option value='OPOPT'>Oporto International Airport</option>
                                        <option value='LISPT'>Lisbon International Airport</option>
                                        <option value='LND'> London International Airport</option>
                                        <option value='SVL'> Sevilla International Airport</option>
                                        <option value='BCN'> Barcelona International Airport</option>
                                        </select>
                                        <FaPlaneArrival className="text-4xl absolute left-5 top-10"/>
                                    </div>
                                    <div>
                                        {errors.arrival && <span className="text-sm text-red-500">{errors.arrival.message}</span>}
                                    </div>
                                </div>
                                {/*date section*/}

                                <div className="flex space-x-2">

                                    {/*departure date section*/}
                                    <div className="w-full">
                                        <div>
                                            <div className="relative">
                                                <p className="font-bold text-xl uppercase">Departure Date</p>
                                                <input
                                                type="date"
                                                className={`w-full h-16 rounded-lg text-2xl ${errors.departureDate &&
                                                "focus:border-red-500 focus:ring-red-500 border-red-500"}`}
                                                {...register("departureDate", {required: {
                                                    value:true,
                                                    message:"Select Your Departure Day"
                                                }})}
                                                />
                                            </div>
                                            <div>
                                            {errors.departureDate && <span className="text-sm text-red-500">{errors.departureDate.message}</span>}
                                            </div>
                                        </div>
                                    </div>

                                    {/*return date section*/}
                                    <div className="w-full">
                                        <div>
                                            <div className="relative">
                                                <p className="font-bold text-xl uppercase">Return Date</p>
                                                <input
                                                type="date"
                                                className={`w-full h-16 rounded-lg text-2xl ${errors.arrivalDate &&
                                                    "focus:border-red-500 focus:ring-red-500 border-red-500"}`}
                                                    {...register("arrivalDate", {required: {
                                                        value:true,
                                                        message:"Select Your Arrival Day"
                                                    }})}
                                                />
                                            </div>
                                            <div>
                                            {errors.arrivalDate && <span className="text-sm text-red-500">{errors.arrivalDate.message}</span>}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                    {/* passenger section */}
                                <div className="flex space-x-3">

                                        {/*<2 y section*/}
                                    <div className="w-full">
                                        <div>
                                            <div className="relative">
                                                <p className="font-bold text-xl uppercase">
                                                {" "}
                                                Baby (2-)
                                                </p>
                                                <select className="w-full h-16 rounded-lg text-2xl pl-20"
                                                {...register("baby", {required: {
                                                    value:true,
                                                    message:""
                                                }})}>
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                </select>
                                                <MdChildFriendly className="text-4xl absolute left-5 top-10"/>
                                            </div>
                                            <div>Error</div>
                                        </div>
                                    </div>

                                        {/*>2 && <9 section*/}
                                    <div className="w-full">
                                        <div>
                                            <div className="relative">
                                                <p className="font-bold text-xl uppercase">
                                                {" "}
                                                Child (2-9)
                                                </p>
                                                <select className="w-full h-16 rounded-lg text-2xl pl-20"
                                                {...register("child", {required: {
                                                    value:true,
                                                    message:""
                                                }})}
                                                >
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                </select>
                                                <FaChild className="text-4xl absolute left-5 top-10"/>
                                            </div>
                                            <div>Error</div>
                                        </div>
                                    </div>

                                        {/*>9 section*/}
                                    <div className="w-full">
                                        <div>
                                            <div className="relative">
                                                <p className="font-bold text-xl uppercase">
                                                {" "}
                                                Adult (9+)
                                                </p>
                                                <select className="w-full h-16 rounded-lg text-2xl pl-20"
                                                {...register("adult", {required: {
                                                    value:true,
                                                    message:""
                                                }})}
                                                >
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                </select>
                                                <GiPerson className="text-4xl absolute left-5 top-10"/>
                                            </div>
                                            {/*<div>Error</div>*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* btn section*/}
                        <div>
                            <input
                            type="submit"
                            value="Find Flight"
                            className="w-full h-16 font-bold text-3xl uppercase rounded-lg bg-green-100 hover:bg-white"
                            />
                        </div>
                    </div>
                </form>
            </section>
        </React.Fragment>
    );
};

export default FlightApp;