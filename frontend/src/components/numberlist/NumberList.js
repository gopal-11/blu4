// frontend/src/components/numberlist
import './index.css';

// To show the output array fetched from server
const NumberList = ({ title, list, className }) => {
  return (
    <div className={className}>
      <h5>{title}</h5>
      <div>
        {list.map((currElement, index) => (
          <div key={index} className="element">
            {currElement}{' '}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumberList;
