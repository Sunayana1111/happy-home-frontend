import HomeCareDashbaordImg from "../../assets/images/oldladies.jpg";
import './style.scss'

const Dashboard = () => {
    return <div className="row dashboard-container gx-5">
        <div className="col-md-6 dashboard-container__image">
            <img src={HomeCareDashbaordImg} className="rounded float-end" alt="happy-home-dashboard-img" height={500} />
        </div>
        <div className="col-md-5 dashboard-container__introduction d-flex flex-column justify-content-center">
            <h1>Happy Home</h1>
            <h2>A closer look at your satisfaction</h2>
            <p>
                Welcome to Happy Home Elderly Care, where compassion meets comfort. Our mission is simple:
                to provide unparalleled care and support to our beloved seniors, ensuring their golden years
                are filled with joy, dignity, and peace of mind.
            </p>
            <p>
                At Happy Home, we understand the unique needs and desires of the elderly,
                and we are committed to creating a nurturing environment that feels like home.
                From personalized care plans to engaging activities and heartfelt companionship,
                we prioritize the well-being and happiness of every resident.
            </p>
        </div>
    </div>
}

export default Dashboard;