import ProfileOverviewBox from "./ProfileOverviewBox";
import NewsFeed from "./NewsFeed";
import RecommendationBox from "./RecommendationBox";

import profileImg from "/src/assets/images/Prasanna.jpg";

function HomePage() {
    return (
        <>
            <div className="w-[100vw] md:w-[90vw] flex justify-between gap-4 mx-auto p-4">
                <ProfileOverviewBox profileSrc={profileImg} />
                <NewsFeed profileSrc={profileImg} />
                <RecommendationBox />
            </div>
        </>
    );
}

export default HomePage;