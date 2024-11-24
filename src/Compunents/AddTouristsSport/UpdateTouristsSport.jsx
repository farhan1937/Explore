import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateTouristsSport = () => {
    const sport = useLoaderData();

    const { _id, photo, name, country_Name, location, short_description, average_cost, seasonality, travel_time, totaVisitorsPerYear, user_name, User_Email } = sport;

    const handleUpdateTouristsSport = e => {
        e.preventDefault();

        const from = e.target;

        const photo = from.photo.value;
        const name = from.name.value;
        const country_Name = from.country_Name.value;
        const location = from.location.value;
        const short_description = from.short_description.value;
        const average_cost = from.average_cost.value;
        const seasonality = from.seasonality.value;
        const travel_time = from.travel_time.value;
        const totaVisitorsPerYear = from.totaVisitorsPerYear.value;
        const User_Email = from.User_Email.value;
        const user_name = from.user_name.value;

        const updateSport = { photo, name, country_Name, location, short_description, average_cost, seasonality, travel_time, totaVisitorsPerYear, user_name, User_Email };

        console.log(updateSport);

        fetch(`https://asia-explor-server-q4t6ep2pc-farhans-projects-4f0ac41d.vercel.app/tourists/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateSport)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Update successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                }
            });
    };

    return (
        <div className="bg-[#daf8f9]">
            <h2 className="text-4xl text-center font-semibold">Update Tourists Sport</h2>
            <form onSubmit={handleUpdateTouristsSport} className="max-w-7xl mx-auto">
                {/* PhotoURL */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" type="text" name="photo" defaultValue={photo} placeholder="PhotoURL" id="" />
                        </label>
                    </div>
                </div>
                {/* Name and Country Name */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Tourist Spot Name</span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" type="text" name="name" defaultValue={name} placeholder="Tourist Spot Name" id="" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Country Name</span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" type="text" name="country_Name" defaultValue={country_Name} placeholder="Country Name" id="" />
                        </label>
                    </div>
                </div>
                {/* Location and Short Description */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" type="text" name="location" defaultValue={location} placeholder="Location" id="" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" type="text" name="short_description" defaultValue={short_description} placeholder="Short Description" id="" />
                        </label>
                    </div>
                </div>
                {/* Average Cost and Seasonality */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Average Cost</span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" type="text" name="average_cost" defaultValue={average_cost} placeholder="Average Cost" id="" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Seasonality</span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" type="text" name="seasonality" defaultValue={seasonality} placeholder="Seasonality" id="" />
                        </label>
                    </div>
                </div>
                {/* Travel Time and Total Visitors Per Year */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Travel Time</span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" type="text" name="travel_time" defaultValue={travel_time} placeholder="Travel Time" id="" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Total Visitors Per Year</span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" type="text" name="totaVisitorsPerYear" defaultValue={totaVisitorsPerYear} placeholder="Total Visitors Per Year" id="" />
                        </label>
                    </div>
                </div>
                {/* User Email and User Name */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" type="email" name="User_Email" defaultValue={User_Email} placeholder="User Email" id="" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" type="text" name="user_name" defaultValue={user_name} placeholder="User Name" id="" />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Update" className="btn btn-block bg-slate-400" />
            </form>
        </div>
    );
};

export default UpdateTouristsSport;
