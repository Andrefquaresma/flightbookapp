import {useForm} from "react-hook-form";

function OneWayComponent() {
    const {register, formState: {errors} } = useForm();

    return(
        <div>
            <div className="flex items-center space-x-2">
                <input 
                type="radio"
                className="w-6 h-6"
                value="OWT"
                {...register("tripType",{ required: {
                    value:true,
                    message:'Trip Type is required'
                }})}
                />
                <p className="text-x1 font-bold">One Way</p>
            </div>    
        </div>   
    );
}

export default OneWayComponent;