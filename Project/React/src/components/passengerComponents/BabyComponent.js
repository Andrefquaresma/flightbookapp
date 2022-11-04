import {MdChildFriendly} from "react-icons/md";

function BabyComponent() {
    return(
        <div className="relative">
            <p className="font-bold text-xl uppercase">
                {" "}
                Baby (2-)
            </p>
            <select className="w-full h-16 rounded-lg text-2xl pl-20">
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            </select>
            <MdChildFriendly className="text-4xl absolute left-5 top-10"/>
        </div>
    );
}

export default BabyComponent;