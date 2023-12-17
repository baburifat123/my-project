import { IoSearch } from "react-icons/io5";
import PropTypes from 'prop-types';

const SerchValue = ({ filter }) => {
    console.log(Data);
  return (
    <div>
    
    <div>
        {filter !== null && filter.map((bal, id) => (
        <div className="text-white" key={id}>{bal.name}</div>
      ))}
   </div>
    </div>
  );
};

SerchValue.propTypes = {
  filter: PropTypes.array,
  search: PropTypes.func,
};

export default SerchValue;
