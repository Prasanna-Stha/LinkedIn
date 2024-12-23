import nimeshImg from "/src/assets/images/Nimesh.jpg";
import sanijImg from "/src/assets/images/Sanij.jpg";
import dipeshImg from "/src/assets/images/Dipesh.jpg";
import saphalImg from "/src/assets/images/Saphal.jpg";

import sanijPost from "/src/assets/images/SanijPost.jpg";
import nimeshPost from "/src/assets/images/nimeshPost.jpg";
import dipeshPost from "/src/assets/images/dipeshPost.jpg";
import saphalPost from "/src/assets/images/saphalPost.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faComment } from "@fortawesome/free-regular-svg-icons";
import { faShare, faImage, faCalendarAlt, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function NewsFeed({ profileSrc }) {
    const [userInfo, setUserInfo] = useState([
        {
            id: 100,
            name: "Nimesh Nepal",
            position: "CEO | Public Speaker",
            publishedDate: "2 days ago",
            caption: "Stepping forward with purpose and growth!",
            like: 0,
            showReactions: false,
            post: nimeshPost,
            imgSrc: nimeshImg
        },
        {
            id: 101,
            name: "Sanij Shrestha",
            position: "Flutter | Backend Developer",
            publishedDate: "1 week ago",
            caption: "I’m happy to share that I’ve obtained a new certification: Learn Python from Programiz!",
            like: 0,
            showReactions: false,
            post: sanijPost,
            imgSrc: sanijImg
        },
        {
            id: 102,
            name: "Dipesh Malla",
            position: "Software engineer | React JS",
            publishedDate: "5 days ago",
            caption: "Building skills, one day at a time.",
            like: 0,
            showReactions: false,
            post: dipeshPost,
            imgSrc: dipeshImg
        },
        {
            id: 103,
            name: "Saphal Maharzan",
            position: "Software engineer | React JS",
            publishedDate: "2 days ago",
            caption: "Stepping forward with purpose and growth!",
            like: 0,
            showReactions: false,
            post: saphalPost,
            imgSrc: saphalImg
        }
    ]);

    const handleReactionBox = (index, visible) => {
        const updatedUserInfo = [...userInfo];
        updatedUserInfo[index].showReactions = visible;
        setUserInfo(updatedUserInfo);
    };

    const handleReactionClick = (index, reaction) => {
        const updatedUserInfo = [...userInfo];
        updatedUserInfo[index].like += 1;
        updatedUserInfo[index].selectedReaction = reaction;
        setUserInfo(updatedUserInfo);
    };

    return (
        <div className="w-full max-w-screen-sm mx-auto p-1 md:p-4 bg-[#f9f9f9] rounded-lg shadow-lg">
            {/* Post creation box */}
            <div className="w-full p-4 border border-[#e0e0e0] rounded-lg bg-white shadow-md">
                <div className="flex items-center border w-full">
                    <div className="flex-shrink-0">
                        <img src={profileSrc} alt="Your Profile" className="w-12 h-12 rounded-full border-2 border-[#0073b1]"/>
                    </div>
                    <div className="flex-grow ml-3 w-full">
                        <a href="#" className="w-[60%] text-[#0073b1] font-medium px-4 py-2 rounded border-2 border-[#e0e0e0]">Start a post</a>
                    </div>
                </div>
                {/* type of media */}
                <div className="flex justify-around mt-3">
                    <div className="flex items-center gap-2 cursor-pointer py-2 px-3 rounded-md hover:bg-[#e8f5fe]">
                        <FontAwesomeIcon icon={faImage} className="text-[#0073b1]" />
                        <h6 className="hidden text-[#0073b1] md:text-sm md:block font-medium">Media</h6>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer py-2 px-3 rounded-md hover:bg-[#e8f5fe]">
                        <FontAwesomeIcon icon={faCalendarAlt} className="text-[#5f9b41]" />
                        <h6 className="hidden text-[#5f9b41] md:text-sm md:block font-medium">Event</h6>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer py-2 px-3 rounded-md hover:bg-[#e8f5fe]">
                        <FontAwesomeIcon icon={faNewspaper} className="text-[#e06847]" />
                        <h6 className="hidden text-[#e06847] md:text-sm md:block font-medium">Write article</h6>
                    </div>
                </div>
            </div>

            {/* Posts */}
            <div className="mt-6">
                {userInfo.map((user, index) => (
                    <div key={index} className="bg-white border border-[#e0e0e0] mb-3 rounded-lg shadow-md p-4">
                        <div className="flex gap-3 mb-3">
                            <img src={user.imgSrc} alt={`${user.name}'s profile`} className="w-12 h-12 rounded-full border-2 border-[#0073b1]"/>
                            <div>
                                <h5 className="text-[#0073b1] text-lg font-bold">{user.name}</h5>
                                <p className="text-[#666] text-sm">{user.position}</p>
                                <span className="text-[#999] text-xs">{user.publishedDate}</span>
                            </div>
                        </div>
                        <p className="text-[#444] text-sm mb-3">{user.caption}</p>
                        <div className="mb-3">
                            <img src={user.post} alt={user.name} className="w-full h-auto rounded-lg" />
                        </div>
                        <div className="flex justify-around text-[#666]">
                            <div className="flex items-center gap-2 cursor-pointer relative"
                                onMouseEnter={() => handleReactionBox(index, true)}
                                onMouseLeave={() => handleReactionBox(index, false)}>
                                <FontAwesomeIcon icon={faThumbsUp} className="text-xl" />
                                <span>
                                    {user.like} {user.like === 1 || user.like === 0 ? "like" : "likes"}
                                </span>
                                {user.showReactions && (
                                    <div className="absolute top-[-50px] left-[-30px] flex gap-2 p-2 bg-[#f0f0f0] rounded-lg shadow-md">
                                        {["👏", "👍", "💙", "😆", "💡", "👌"].map((reaction, i) => (
                                            <span key={i} onClick={() => handleReactionClick(index, reaction)}>
                                                {reaction} </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="flex items-center gap-2 cursor-pointer">
                                <FontAwesomeIcon icon={faComment} className="text-xl" />
                                <span>Comment</span>
                            </div>
                            <div className="flex items-center gap-2 cursor-pointer">
                                <FontAwesomeIcon icon={faShare} className="text-xl" />
                                <span>Share</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NewsFeed;
