import Son from "../Son/Son";


const Dad = ({asset}) => {
    return (
        <div>
            <h3>Dad</h3>
            <Son asset={asset}></Son>
        </div>
    );
};

export default Dad;