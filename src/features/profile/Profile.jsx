import ProfileCard from "./components/ProfileCard"
import RequestAndConnectionCard from "./components/RequestAndConnectionCard"


const Profile = () => {
    return (
        <main className="grid items-start grid-cols-6 w-full gap-5">
            <ProfileCard />
            <div className="col-span-2 space-y-5">
            <RequestAndConnectionCard />
            <RequestAndConnectionCard />
            </div>
        </main>
    )
}

export default Profile