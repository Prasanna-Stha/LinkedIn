import ProfileOverviewBox from "./ProfileOverviewBox";
import RecommendationBox from "./RecommendationBox";
import sanijPic from "/src/assets/images/Sanij.jpg";

function Notification({ profileSrc }) {
    let notifications = [
        { notificationName: "Prasanna", notificationContent: "Speak better by incorporating these 3 practices." },
        { notificationName: "Sanij", notificationContent: "Would you want your boss's job? Here's why you need to consider." },
        { notificationName: "Dipesh", notificationContent: "Show your personality and get hired with these tips." },
        { notificationName: "Opportunity", notificationContent: "Speak better by incorporating these 3 practices." },
        { notificationName: "Internship", notificationContent: "Speak better by incorporating these 3 practices." },
    ];

    return (
        <div className="w-[100vw] sm:w-[90vw] flex justify-between gap-3 mx-auto p-4 rounded-lg min-h-screen border border-1 border-[#dfdeda]">
            <ProfileOverviewBox profileSrc={profileSrc} />

            <div className="w-full max-w-screen-sm bg-[#f9f9f9] p-6 rounded-lg border border-1 border-[#dfdeda]">
                {/* notification types */}
                <div className="flex justify-start gap-8 mb-6">
                    <h6 className="text-white text-sm cursor-pointer px-4 py-2 border rounded-[24px] w-[fit-content] bg-customGreen border-[rgb(178,178,178)]">All</h6>
                    <h6 className="text-gray-700 text-sm cursor-pointer px-4 py-2 border rounded-[24px] w-[fit-content] border-[rgb(178,178,178)]">Jobs</h6>
                    <h6 className="text-gray-700 text-sm cursor-pointer px-4 py-2 border rounded-[24px] w-[fit-content] border-[rgb(178,178,178)]">My posts</h6>
                    <h6 className="text-gray-700 text-sm cursor-pointer px-4 py-2 border rounded-[24px] w-[fit-content] border-[rgb(178,178,178)]">Mentions</h6>
                </div>

                {/* notification content */}
                <div className="w-[95%] mx-auto space-y-3 bg-[#d7e9fb] border rounded-md border-b border-[#dfdeda] cursor-pointer">
                    {notifications.map((notification, index) => (
                        <div key={index} className="w-full flex items-center justify-between p-4 border border-gray-200">
                            <div className="flex items-center gap-4 w-[70%]">
                                <div className="w-[50px] h-[50px]">
                                    <img src={sanijPic} alt="avatar" className="w-[50px] h-[50px] object-cover border" />
                                </div>

                                <div className="w-[100%]">
                                    <h5 className="text-[#0073b1] font-medium">{notification.notificationName}</h5>
                                    <p className="text-gray-600 text-sm">{notification.notificationContent}</p>
                                </div>
                            </div>

                            <div>
                                <button className="w-[fit-content] text-blue-600 text-sm font-medium rounded-md hover:bg-blue-100 border py-2 px-4">Mark as Read</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <RecommendationBox />
        </div>
    );
}

export default Notification;
