
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const FoodDetails = () => {
    const [food, setFood] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const getFood = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/food/${id}`);
            setFood(data);
        };
        getFood();
    }, [id]);

    if (!food) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto py-10">
            <div className="card lg:card-side bg-base-100 shadow-sm">
                <figure>
                    <img
                        className="w-[300px]"
                        src={food.image}
                        alt={food.name}
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{food.name}</h2>
                    <p>{food.description}</p>
                    <p>{food.rating}</p>
                    <p>{food.location}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;
