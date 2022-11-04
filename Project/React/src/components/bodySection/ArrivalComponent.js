import {FaPlaneArrival} from "react-icons/fa";

function ArrivalComponent() {
    return(
        <div>
            <div>
                <div className="relative">
                    <p className="font-bold text-xl uppercase">Flying To</p>
                    <select className="w-full h-16 rounded-lg text-2xl pl-20">
                    <option value='' selected disabled hidden>--Select Airport--</option>
                    <option value='OPOPT'>Oporto International Airport</option>
                    <option value='LISPT'>Lisbon International Airport</option>
                    <option value='LND'> London International Airport</option>
                    <option value='SVL'> Sevilla International Airport</option>
                    <option value='BCN'> Barcelona International Airport</option>
                    </select>
                    <FaPlaneArrival className="text-4xl absolute left-5 top-10"/>
                </div>
            <div>Error</div>
        </div>
    </div>
    )
}

export default ArrivalComponent;