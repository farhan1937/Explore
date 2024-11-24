import Swal from 'sweetalert2'


const AddTouristsSport = () => {

    const handleAddTouristsSport = e =>{
        e.preventDefault()

        const from = e.target;

        const photo = from.photo.value
        const name = from.name.value
        const country_Name = from.country_Name.value
        const location = from.location.value
        const short_description = from.short_description.value
        const average_cost = from.average_cost.value
        const seasonality = from.seasonality.value
        const travel_time = from.travel_time.value
        const totaVisitorsPerYear = from.totaVisitorsPerYear.value
        const User_Email = from.User_Email.value
        const user_name = from.user_name.value

        const addSport = {photo, name, country_Name, location, short_description, average_cost, seasonality, travel_time, totaVisitorsPerYear, user_name, User_Email}

        console.log(addSport);

        fetch('https://asia-explor-server-qjno2xnvl-farhans-projects-4f0ac41d.vercel.app//tourists',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addSport)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'User added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div className="bg-[#daf8f9] ">
            <h2 className="text-4xl text-center font-semibold">Add Tourists Sport</h2>
            <form onSubmit={handleAddTouristsSport} className="max-w-7xl mx-auto">
                    {/*from PhotoURL */}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <label className="input-group">

                                <input className="input input-bordered w-full" type="text" name="photo" placeholder="PhotoURL" id="" />

                            </label>

                        </div>

                    </div>
                {/*from name and quantity */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Tourists spot Name</span>
                        </label>
                        <label className="input-group">

                            <input className="input input-bordered w-full" type="text" name="name" placeholder="tourists_spot_name" id="" />

                        </label>

                    </div>
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">country Name</span>
                        </label>
                        <label className="input-group">

                            <input className="input input-bordered w-full ml-4" type="text" name="country_Name" placeholder="Available Quality" id="" />

                        </label>

                    </div>
                </div>
                {/*from  location and short description */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> location</span>
                        </label>
                        <label className="input-group">

                            <input className="input input-bordered w-full" type=" location" name="location" placeholder=" location" id="" />

                        </label>

                    </div>
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>short description
                        <label className="input-group">

                            <input className="input input-bordered w-full ml-4" type="text" name="short_description" placeholder="Taste" id="" />

                        </label>

                    </div>
                </div>
                {/*from average_cost and seasonality */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Average cost</span>
                        </label>
                        <label className="input-group">

                            <input className="input input-bordered w-full" type="text" name="average_cost" placeholder="average_cost" id="" />

                        </label>

                    </div>
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">seasonality</span>
                        </label>
                        <label className="input-group">

                            <input className="input input-bordered w-full ml-4" type="text" name="seasonality" placeholder="seasonality" id="" />

                        </label>

                    </div>
                </div>
                {/*from average_cost and seasonality */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Travel time</span>
                        </label>
                        <label className="input-group">

                            <input className="input input-bordered w-full" type="text" name="travel_time" placeholder="travel_time" id="" />

                        </label>

                    </div>
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Tota Visitors PerYear</span>
                        </label>
                        <label className="input-group">

                            <input className="input input-bordered w-full ml-4" type="text" name="totaVisitorsPerYear" placeholder="totaVisitorsPerYear" id="" />

                        </label>

                    </div>
                </div>
                {/*from  User Email and seasonality */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> User Email</span>
                        </label>
                        <label className="input-group">

                            <input className="input input-bordered w-full" type="email" name="User_Email" placeholder=" User-Email" id="" />

                        </label>

                    </div>
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <label className="input-group">

                            <input className="input input-bordered w-full ml-4" type="text" name="user_name" placeholder="user_name" id="" />

                        </label>

                    </div>
                </div>

                <input type="submit" value="Add" className="btn btn-block bg-slate-400" />
            </form>
        </div>
    );
};

export default AddTouristsSport;