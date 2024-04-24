import { createContext } from 'react';
import Aunty from '../Aunty/Aunty';
import Dad from '../Dad/Dad';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

export const AssetContext = createContext('gold');

const Grandpa = () => {
    const asset = 'diamond';
    return (
        <div className="grandpa">
            <h3>Grandpa</h3>
            <AssetContext.Provider value='gold'>
                <section className='flex'>
                    <Dad asset={asset}></Dad>
                    <Uncle></Uncle>
                    <Aunty asset={asset}></Aunty>
                </section>
            </AssetContext.Provider>
        </div>
    );
};

export default Grandpa;