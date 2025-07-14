import { Link } from "react-router-dom";


const FoodCard = ({food}) => {
    const {_id, name,location,image,category} = food;
    return (
        <Link to={`/food/${_id}`} className="py-2">
            <img className="w-65 h-65" src={image} alt="" />
            <h1>Name : {name}</h1>
            <p>Location : {location}</p>
            <p>Category : {category}</p>
        </Link>
    );
};

export default FoodCard;