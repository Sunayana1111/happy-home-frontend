// import HomeCareDashbaordImg from "../../assets/images/oldladies.jpg";
import CarouselImage from "../../components/CarouselImage";
import './style.scss'

const Dashboard = () => {
    return <div className="row dashboard-container gx-5">
        <div className="col-md-7 dashboard-container__image">
            {/* <img src={HomeCareDashbaordImg} className="rounded float-end" alt="happy-home-dashboard-img" height={500} /> */}
            <CarouselImage />
        </div>
        <div className="col-md-5 dashboard-container__introduction d-flex flex-column justify-content-center">
            <h1>Happy Home</h1>
            <h2>A closer look at your satisfaction</h2>
            <p>

                Welcome to Happy Home Elderly Care, where compassion meets comfort.
                Our mission is to provide unparalleled care and support,
                ensuring our beloved seniors enjoy their golden years with joy,
                dignity, and peace of mind.
            </p>
            <p>
                At Happy Home, we understand the unique needs and desires of the elderly,
                and we are committed to creating a nurturing environment that feels like home.
            </p>
        </div>
    </div>
}

export default Dashboard;