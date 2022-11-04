import {useForm} from "react-hook-form";
import RoundTripComponent from "./RoundTripComponent";
import OneWayComponent from "./OneWayComponent";

function TripSeletcionComponent() {
    const {register, formState: {errors} } = useForm();

    return(
        <div>
            <div className="flex items-center space-x-2">
                <OneWayComponent></OneWayComponent>
                
                <RoundTripComponent></RoundTripComponent>
            
            </div>
        </div>
    )
}

export default TripSeletcionComponent;

