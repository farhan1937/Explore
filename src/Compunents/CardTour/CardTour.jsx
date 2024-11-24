import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CardTour = ({ tour }) => {

    const { _id, photo, name, country_Name, location, short_description, average_cost, seasonality, travel_time, totaVisitorsPerYear, user_name, User_Email } = tour;

    const handleDelete = id => {  // Changed _id to id here to avoid confusion
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5002/tourists/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    });
            }
        });
    };

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl border-2 mb-2 p-3">
                <figure><img className="w-96 h-96 rounded-lg" src={photo} alt="Tour" /></figure>
                <div className="card-body">
                    <h2><span className="font-semibold">Country Name:</span> {country_Name}</h2>
                    <h2 className="font-semibold"><span>Tourist Spot Name:</span> {name}</h2>
                 
                    <p><span className="font-semibold">Location:</span> {location}</p>
                    <p><span className="font-semibold">Cost:</span> {average_cost}</p>
                    <p><span className="font-semibold">Season:</span> {seasonality}</p>
                    <p><span className="font-semibold">Travel Time:</span> {travel_time}</p>
                    
                    

                    <div className="card-actions justify-center">
                        <button className="btn bg-orange-300">View</button>
                        <Link to={`/updateTourists/${_id}`}><button className="btn bg-green-400">Edit</button></Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn bg-red-500">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardTour;
