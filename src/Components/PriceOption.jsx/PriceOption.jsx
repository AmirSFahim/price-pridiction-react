import PropTypes from 'prop-types';
import Features from '../Features/Features';

const PriceOption = ({option}) => {
    const {name, price,features}=option
    return (
        <div className='bg-blue-500 rounded-lg p-4 text-white flex flex-col'>
            <h2 className='text-center'>  
                <span className='text-4xl font-bold'>{price}</span> 
            <span className='text-xl'>/mon</span>
            </h2>
            <h4 className='text-xl text-center my-6'>{name}</h4>
            <div className='pl-6 flex-grow'>
            {
                features.map((feature,idx)=> <Features
                key={idx}
                feature={feature}
                ></Features>)

            }
            </div>
            <button className='mt-10 bg-green-600 w-full py-2 font-bold round hover:bg-green-900'>Buy now</button>
        </div>
    );
};
PriceOption.propTypes={
    option: PropTypes.object
}
export default PriceOption;