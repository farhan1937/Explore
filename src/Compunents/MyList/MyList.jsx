import { useLoaderData } from "react-router-dom";
import CardTour from "../CardTour/CardTour";

const MyList = () => {
    const tourists = useLoaderData()
    return (
        <div>
            <h2 className="text-3xl text-center font-bold underline mb-10" >My List</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-7xl mx-auto border-2 p-4">
                {
                    tourists.map(tour => <CardTour key={tour._id} tour={tour}></CardTour>)
                }
            </div>
            
        </div>
    );
};

export default MyList;