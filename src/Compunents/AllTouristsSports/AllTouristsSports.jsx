import { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";


const AllTouristsSports = ({ cook }) => {
    // const { id,  image, name, average_cost, total_visitors_per_year, travel_time, seasonality } = cook;
console.log(cook);
const {tourist_spots} = cook;
useEffect(() => {
    Aos.init({
        duration: 800,
        easing: 'ease-in-out',
        offset: 200,
        delay: 100,
    });
}, []);
    return (
       <>
        {
            tourist_spots.map((sport,idx) => 
                <div 
            key={idx} data-aos="zoom-in" className="card bg-base-100 shadow-xl max-w-6xl mx-auto">
            <figure className="px-4 pt-4">
                <img src={sport.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2>{sport.country}</h2>
                <h2 className="card-title text-[#6dedf6] text-2xl"><span className="font-semibold text-black">Name :</span> {sport.name}</h2>
                <p className=" "><span className="font-semibold gap-4 ">Avarage-Cost :  </span>{sport.average_cost}</p>
                <p className="w-full text-[#333333a7]"><span className="font-semibold">Total Visitors :  </span>{sport.total_visitors_per_year}</p>
                <p className="w-full text-[#333333a7]"><span className="font-semibold">Teavel-time :  </span>{sport.travel_time}</p>
                <p className="w-full text-[#333333a7]"><span className="font-semibold">Seasonality : </span>{sport.seasonality}</p>
                <div className="card-actions"> 
                   <Link to={`/sportDetails/${sport.id}`}> <button className="btn btn-primary">View Property</button></Link>
                </div>
            </div>
        </div>)
        }
       </>
    );
};

export default AllTouristsSports;