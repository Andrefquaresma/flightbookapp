import React from "react";
import {useForm} from "react-hook-form";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";

const Welcome = () => {


    function fetchOriginHandler() {
        fetch('http://localhost:8080/flights')
            .then(response =>{
                console.log(response);
                return response.json();
        })

    

    
      }

    //handle event

    const {register, handleSubmit, watch, formState: {errors} } = useForm();

    //handle submit

    //const onSubmit = data => alert(JSON.stringify(data));

    return (
        <React.Fragment>
            <section>
                <form>
                    <div className="bg-white-100 w-auto h-auto pb-10 mt-5 mx-5 px-5 rounded-lg">

                        {/* header section */}
                        
                        <div className="h-24 flex justify-center items-center shadow">
                            <p className="uppercase font-bold text-4xl text-center"> welcome to the flight booking app</p>
                        </div>
                        <div className="h-24 flex justify-center items-center">
                            <p className="font-bold text-3xl text-center"> Please enter your departure location:</p>
                        </div>
                    
                    </div>

                    <div>
                        <div className="relative">
                            <p className="font-bold text-xl uppercase">Flying From</p>
                            <select 
                            className={`w-4xl h-16 rounded-lg text-2xl pl-20  ${errors.departure &&
                                        "focus:border-red-500 focus:ring-red-500 border-red-500"}`}
                            {...register("departure", {required: {
                            value: true,
                            message:"Select Your Starting Point"
                            }})}
                            >
                            <option value='' defaultValue disabled hidden>--Select Airport--</option>
                            </select>
                            <FaPlaneDeparture className="text-4xl absolute left-5 top-10"/>
                        </div>
                        <div>
                            {errors.departure && <span className="text-sm text-red-500">{errors.departure.message}</span>}    
                        </div>
                    </div>

                    <div>
                        <div className="relative">
                            <p className="font-bold text-xl uppercase">Flying To:</p>
                            <select 
                            className={`w-4xl h-16 rounded-lg text-2xl pl-20  ${errors.arrival &&
                                        "focus:border-red-500 focus:ring-red-500 border-red-500"}`}
                            {...register("arrival", {required: {
                            value: true,
                            message:"Select Your Destination Point"
                            }})}
                            >
                            <option value='' defaultValue disabled hidden>--Select Airport--</option>
                            </select>
                            <FaPlaneArrival className="text-4xl absolute left-5 top-10"/>
                        </div>
                        <div>
                            {errors.arrival && <span className="text-sm text-red-500">{errors.arrival.message}</span>}    
                        </div>
                    </div>

                    <div>

                            <button onClick={fetchOriginHandler} className="w-4lx h-16 font-bold text-3xl uppercase rounded-lg bg-red-100 hover:bg-white">SEARCH</button>
                            
                    </div>

                </form>
            </section>

        </React.Fragment>

    )

};

export default Welcome; 