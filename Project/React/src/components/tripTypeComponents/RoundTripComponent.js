import {useForm} from "react-hook-form";

function RoundTripComponent() {
    const {register, formState: {errors} } = useForm();
    return(
            <div className="flex items-center space-x-2">
                <input 
                type="radio"
                className="w-6 h-6"
                value="RT"
                {...register("tripType", {required: {
                    value:true,
                    message:"Trip Type is required"
                }})}
                />
                <p className="text-x1 font-bold">Round Trip</p>
            </div>
    );
}

export default RoundTripComponent;