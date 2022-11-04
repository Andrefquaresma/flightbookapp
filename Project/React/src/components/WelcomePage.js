import React from "react";
import DepartureComponent from "./bodySection/DepartureComponent";
import ArrivalComponent from "./bodySection/ArrivalComponent";
import HeaderComponent from "./HeaderComponent";
import RoundTripComponent from "./tripTypeComponents/RoundTripComponent";
import OneWayComponent from "./tripTypeComponents/OneWayComponent";
import DepartureDateComponent from "./dateComponents/DepartureDateComponent";
import ReturnDateComponent from "./dateComponents/ReturnDateComponent";
import BabyComponent from "./passengerComponents/BabyComponent";
import YoungsterComponent from "./passengerComponents/YoungsterComponent";
import AdultComponent from "./passengerComponents/AdultComponent";


const FlightApp = () => {
    return (
        <React.Fragment>
            <section>
                <form>
                    <div className="bg-white w-auto h-auto pb-10 mt-5 mx-5 px-5 rounded-lg">
                        {/* header section */}
                        <HeaderComponent></HeaderComponent>

                        {/*body section*/}
                        <div>
                            <div className="grid justify-center space-y-5 bg-indigo-50 pb-10">
                                <div className="flex space-x-8 mt-5">
                                    <RoundTripComponent></RoundTripComponent>
                                    <div>Error
                                    </div>
                                    <div/>
                                    <OneWayComponent></OneWayComponent>
                                    <div/>
                                    <div>Error</div>
                                </div>

                                {/*departure section*/}
                                <DepartureComponent></DepartureComponent>

                                {/*arrival section*/}
                                <ArrivalComponent></ArrivalComponent>

                                {/*date section*/}

                                <div className="flex space-x-2">

                                    {/*departure date section*/}
                                <div className="w-full">
                                    <div>
                                        <DepartureDateComponent></DepartureDateComponent>
                                        <div>Error</div>
                                    </div>
                                </div>

                                {/*return date section*/}
                                <div className="w-full">
                                    <div>
                                        <ReturnDateComponent></ReturnDateComponent>
                                        <div>Error</div>
                                    </div>
                                </div>
                                </div>

                                {/* passenger section */}
                                <div className="flex space-x-3">

                                    {/*<2 y section*/}
                                <div className="w-full">
                                    <div>
                                        <BabyComponent></BabyComponent>
                                        <div>Error</div>
                                    </div>
                                </div>
                                {/*>2 && <9 section*/}
                                <div className="w-full">
                                    <div>
                                        <YoungsterComponent></YoungsterComponent>
                                        <div>Error</div>
                                    </div>
                                </div>
                                {/*>9 section*/}
                                <div className="w-full">
                                    <div>
                                        <AdultComponent></AdultComponent>
                                        <div>Error</div>
                                    </div>
                                </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </React.Fragment>
    );
};

export default FlightApp;