import React, { useState } from "react";
import profilePic from "../assets/profile.png";
import profileCover from "../assets/cover.jpg";

function CalendarDropdown({ calendar }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full px-4 py-3 mt-2 rounded-[10px] bg-white overflow-hidden">

            <div
                className="rounded-[12px] flex justify-between items-center cursor-pointer"
                onClick={() => setOpen(!open)}
            >
                <div>
                    <p className="text-[16px] font-[600] text-[#333333]">
                        {calendar.title}
                    </p>
                    <p className="text-[14px] text-[#737A91]">
                        {calendar.subtitle}
                    </p>
                </div>

                <svg
                    className={`w-5 h-5 text-[#333333] transition-transform duration-200 ${open ? "rotate-180" : ""
                        }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 9l6 6 6-6"
                    />
                </svg>
            </div>

            {open && (
                <div className="mt-3 border-t border-[#E5E7EB] pt-3">
                    <p className="text-[14px] text-[#737A91]">
                        No upcoming interviews
                    </p>
                </div>
            )}
        </div>
    );
}

export default function ProfileCard({
    profile = {
        name: "Albert Flores",
        title: "Senior Product Designer | UI/UX Designer | Graphic Designer | Web Developer",
        location: "Clinton, Maryland",
        avatar: profilePic,
        coverImage: profileCover,
    },
    stats = {
        profileVisitors: 140,
        resumeViewers: 20,
        myJobs: 88,
    },
}) {
    return (
        <div className="w-full lg:max-w-[350px] md:w-full">
            <div className=" rounded-[10px] bg-white overflow-hidden ">
                <div className="relative h-[120px]">
                    <img
                        src={profile.coverImage}
                        alt="Cover"
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute left-1/2 -bottom-[40px] -translate-x-1/2">
                        <img
                            src={profile.avatar}
                            alt="Avatar"
                            className="w-[86px] h-[86px] rounded-full border-2 border-white object-cover"
                        />
                    </div>
                </div>

                <div className="pt-[56px] pb-4 px-15 text-center">
                    <h2 className="text-[18px] font-[600] text-[#333333]">
                        {profile.name}
                    </h2>

                    <p className="mt-1 text-[14px] font-[500] text-[#333333] leading-[1.4] line-clamp-2">
                        {profile.title}
                    </p>

                    <p className="mt-1 text-[12px] text-[#585D6E]">
                        {profile.location}
                    </p>
                </div>
            </div>

            <div className=" mt-2 rounded-[10px] bg-white overflow-hidden ">
                <div className="border-t border-gray-200">
                    <StatRow label="Profile Visitors" value={stats.profileVisitors} />
                    <StatRow label="Resume Viewers" value={stats.resumeViewers} />
                    <StatRow label="My Jobs" value={stats.myJobs} />
                </div>
            </div>

            <CalendarDropdown
                calendar={{
                    title: "My calendar",
                    subtitle: "Upcoming Interviews",
                }}
            />
        </div>
    );
}

function StatRow({ label, value }) {
    return (
        <div className="border-b border-gray-200 flex justify-between items-center px-4 py-3 text-[14px]">
            <span className="text-[#333333] text-[14px]">{label}</span>
            <span className="text-[#0154AA] font-[500] text-[16px]">{value}</span>
        </div>
    );
}
