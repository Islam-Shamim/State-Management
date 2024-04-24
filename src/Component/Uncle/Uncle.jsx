import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";


const Uncle = () => {
    const gift = useContext(AssetContext);
    return (
        <div>
            <h3>Uncle</h3>
            <p>has : {gift}</p>
        </div>
    );
};

export default Uncle;