import sanijCover from "/src/assets/images/sanijCover.jpg";

function ProfileOverviewBox({ profileSrc }) {
    const profileInfo = {
        dimension: "100px",
        userName: "Prasanna Shrestha",
        bioInfo: "Attended Asia Pacific University of Technology and Innovation (APU/APIIT)",
    };

    return (
        <div className="hidden lg:w-[40vw] lg:block h-[fit-content] bg-[#f9f9f9] rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.1)] p-4 text-center font-sans overflow-hidden">

            <img src={sanijCover} alt="Cover Picture" className="w-full rounded-lg" />
            <div className="relative top-[-40px] mb-4">
                <img src={profileSrc} alt="Profile Picture" className="w-[90px] h-[90px] rounded-full border-4 border-[#4c9aff] mx-auto cursor-pointer" />
            </div>

            <div className="cursor-pointer mb-4">
                <h4 className="text-[18px] font-semibold text-[#333] mb-2">{profileInfo.userName}</h4>
                <p className="text-[14px] text-[#777]">{profileInfo.bioInfo}</p>
            </div>

            <div className="mt-3 text-[14px] text-[#555]">
                <div className="flex justify-between mb-1">
                    <span className="font-medium">Profile viewers</span>
                    <span className="font-bold text-[#4c9aff]">23</span>
                </div>
                <div className="flex justify-between mb-1">
                    <span className="font-medium">Post impressions</span>
                    <span className="font-bold text-[#4c9aff]">201</span>
                </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#ddd] text-left text-[#555]">
                <h6 className="text-[14px] my-2 text-[#0073b1] cursor-pointer hover:underline">
                    Strengthen your profile with AI writing assistant
                </h6>
                <h6 className="text-[14px] my-2 text-[#0073b1] cursor-pointer hover:underline">
                    Try Premium for $0
                </h6>
                <h6 className="text-[14px] my-2 text-[#0073b1] cursor-pointer hover:underline">
                    Saved items
                </h6>
            </div>
        </div>
    );
}

export default ProfileOverviewBox;