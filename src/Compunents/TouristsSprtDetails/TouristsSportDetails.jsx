import { Link, useLoaderData, useParams } from "react-router-dom";

const TouristsSportDetails = () => {
    const data = useLoaderData();
    const { id } = useParams(); // Destructure id directly
    const newSportId = parseInt(id, 10);

    // Log the fetched data and the parsed id
    console.log('Fetched data:', data);
    console.log('Parsed sport ID:', newSportId);

    // Flatten the tourist spots data from all countries
    const touristSpots = data.flatMap(country => country.tourist_spots);

    // Check if touristSpots is an array
    if (!Array.isArray(touristSpots)) {
        console.error("touristSpots is not an array", touristSpots);
        return <div>Data is not available or in an incorrect format</div>;
    }

    // Find the sport by ID
    const sports = touristSpots.find(sport => sport.id === newSportId);

    // Check if the sport is found
    if (!sports) {
        console.warn(`No sport found with id ${newSportId}`);
        return <div>Sport not found</div>;
    }

    const { image, name, average_cost, total_visitors_per_year, travel_time, seasonality } = sports;

    return (
        <div className="card max-w-6xl p-5 mx-auto justify-center lg:card-side bg-base-100 shadow-xl gap-10 lg:mt-14">
            <figure><img className="w-full" src={image} alt={name} /></figure>
            <div className="text-start space-y-8">
                <h2 className="card-title text-3xl">{name}</h2>
                <h3 className="font-semibold text-xl">Price: <span className="text-[#3cf817b5]">{average_cost}</span></h3>
                <p className="font-semibold">Total Visitors Per Year: <span className="text-[#3d3d3db5]">{total_visitors_per_year}</span></p>
                <p className="font-semibold">Travel Time: <span className="text-[#3d3d3db5]">{travel_time}</span></p>
                <p className="font-semibold">Seasonality: <span className="text-[#3d3d3db5]">{seasonality}</span></p>
                <div className="mt-6">
                    <button className="btn bg-[#1DD100] p-4">Buy Now</button>
                    <Link to='/'><button className="btn bg-[#daf8f9] text-black ml-2 p-4">Home</button></Link>
                    
                </div>
            </div>
        </div>
    );
};

export default TouristsSportDetails;
