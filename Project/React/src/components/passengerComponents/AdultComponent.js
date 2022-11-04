import {GiPerson} from "react-icons/gi";

function AdultComponent() {
    return(
        <div className="relative">
            <p className="font-bold text-xl uppercase">
                {" "}
                Adult (9+)
            </p>
            <select className="w-full h-16 rounded-lg text-2xl pl-20">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            <GiPerson className="text-4xl absolute left-5 top-10"/>
        </div>
    );
}

export default AdultComponent;