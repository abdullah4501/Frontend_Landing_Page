import React, { useState } from 'react';
import { MapPin, Clock, ChevronDown, Bookmark } from 'lucide-react';
import ProfileCard from '../components/ProfileCard';
import Icon from "../assets/icon2.png";
import SearchW from "../assets/searchW.png";

const JobCard = ({ promoted = false }) => {
    const [isSaved, setIsSaved] = useState(false);
    return (
        <div className="job-card min-w-[180px] flex-shrink-0 bg-white rounded-[10px] px-5 py-2 border border-[#E1E1E1] text-[#333333]">
            {promoted && (
                <span className="text-[10px]  font-[600]">Promoted</span>
            )}

            <div className="flex items-start gap-2 mt-2">
                <div className="w-[40px] h-[40px] bg-[#FAFAFA] px-[8px] py-[6px] rounded-[10px] flex items-center justify-center flex-shrink-0">
                    <img src={Icon} alt="" className=' object-contain' />
                </div>
                <div className="min-w-0">
                    <h4 className="font-[500] text-[14px] ">UI/UX Designer</h4>
                    <p className="text-xs text-muted-foreground text-[14px]">Teams</p>
                </div>
            </div>

            <div className="mt-3 space-y-1">
                <div className="flex items-center text-xs text-[#585D6E]">
                    <MapPin className="w-3 h-3 flex-shrink-0 mr-1" />
                    <span className="truncate">Seattle, USA (Remote)</span>
                </div>
                <div className="flex items-center text-xs text-[#585D6E]">
                    <Clock className="w-3 h-3 flex-shrink-0 mr-1" />
                    <span>1 day ago</span>
                    <span className="mx-1">|</span>
                    <span className="text-[#0154AA]">22 applicants</span>
                </div>
            </div>

            <div className="flex items-center gap-2 mt-4">
                <button className="cursor-pointer hover:bg-[#02468b] flex-1 bg-[#0154AA] text-white py-2 px-4 rounded-[7px] text-[12px] font-[500] hover:bg-primary/90 transition-colors">
                    Apply Now
                </button>
                <button className="cursor-pointer" onClick={() => setIsSaved(!isSaved)}>
                    <Bookmark className="w-5 h-5 text-muted-foreground text-[#AAAAAA]"
                        style={{
                            color: isSaved ? "#0154AA" : "#AAAAAA",
                            fill: isSaved ? "#0154AA" : "none",
                        }}
                    />
                </button>
            </div>
        </div>
    );
};

const Index = () => {
    const filterTags = ['Frontend', 'Backend', 'Graphic Designer'];
    const [locationOpen, setLocationOpen] = useState(false);
    const [jobTypeOpen, setJobTypeOpen] = useState(false);


    return (
        <div className="min-h-screen">
            <div className="max-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-col lg:flex-row gap-6">
                    <ProfileCard />

                    <main className="w-full min-w-0 py-2">

                        <div>
                            <h1 className="text-[22px] font-[600] text-[#333333]">
                                Find your Dream Job, <span className="text-[#0154AA]">Albert!</span>
                            </h1>
                            <p className=" text-[14px] text-[#585D6E]">
                                Explore the latest job openings and apply for the best opportunities available today!
                            </p>
                        </div>

                        <div className="mt-6 bg-white rounded-[10px] py-4 px-5 h-[70px] flex items-center gap-6 relative">

                            <div className="flex flex-1 items-center gap-2 h-full">
                                <input
                                    placeholder="Job Title, Company, or Keywords"
                                    className="flex-1 text-sm outline-none"
                                />
                            </div>

                            <div
                                className="hidden md:flex items-center gap-2 border-l border-[#E9ECEF] pl-6 h-full cursor-pointer relative"
                                onClick={() => {
                                    setLocationOpen(!locationOpen);
                                    setJobTypeOpen(false);
                                }}
                            >
                                <span className="text-[14px] text-[#585D6E]">Select Location</span>
                                <ChevronDown className="w-4 h-4 text-[#585D6E]" />

                                {locationOpen && (
                                    <div className="absolute top-full mt-2 left-0 bg-white border border-[#E9ECEF] rounded-[8px] w-[180px] z-50">
                                        <div className="px-4 py-2 text-[14px] text-[#333333] hover:bg-[#F6F9FF] cursor-pointer"
                                        >
                                            No Locations
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div
                                className="hidden md:flex items-center gap-2 h-full border-l border-[#E9ECEF] pl-6 cursor-pointer relative"
                                onClick={() => {
                                    setJobTypeOpen(!jobTypeOpen);
                                    setLocationOpen(false);
                                }}
                            >
                                <span className="text-[14px] text-[#585D6E]">Job Type</span>
                                <ChevronDown className="w-4 h-4 text-[#585D6E]" />

                                {jobTypeOpen && (
                                    <div className="absolute top-full mt-2 left-0 bg-white border border-[#E9ECEF] rounded-[8px] w-[180px] z-50">
                                        <div className="px-4 py-2 text-[14px] text-[#333333] hover:bg-[#F6F9FF] cursor-pointer"
                                        >
                                            No Job Types
                                        </div>
                                    </div>
                                )}
                            </div>

                            <button className="cursor-pointer rounded-[8px] bg-[#0154AA] text-white text-[14px] xl:text-[16px] py-[8px] px-[26px] hover:bg-[#02468b] transition whitespace-nowrap flex items-center gap-2">
                                <img src={SearchW} alt="" />
                                Search
                            </button>
                        </div>

                        <div className="md:hidden mt-3 flex gap-2">

                            <div className="flex-1 relative">
                                <div
                                    className="bg-white rounded-[8px] p-3 flex justify-between items-center border border-[#E9ECEF]"
                                    onClick={() => setLocationOpen(!locationOpen)}
                                >
                                    <span className="text-[14px] text-[#585D6E]">Select Location</span>
                                    <ChevronDown className="w-4 h-4 text-[#585D6E]" />
                                </div>

                                {locationOpen && (
                                    <div className="absolute top-full mt-2 left-0 bg-white border border-[#E9ECEF] rounded-[8px] w-full z-50">
                                        <div className="px-4 py-2 text-[14px] text-[#333333] hover:bg-[#F6F9FF] cursor-pointer"
                                        >
                                            No Locations
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="flex-1 relative">
                                <div
                                    className="bg-white rounded-[8px] p-3 flex justify-between items-center border border-[#E9ECEF]"
                                    onClick={() => setJobTypeOpen(!jobTypeOpen)}
                                >
                                    <span className="text-[14px] text-[#585D6E]">Job Type</span>
                                    <ChevronDown className="w-4 h-4 text-[#585D6E]" />
                                </div>

                                {jobTypeOpen && (
                                    <div className="absolute top-full mt-2 left-0 bg-white border border-[#E9ECEF] rounded-[8px] w-full z-50">
                                        <div className="px-4 py-2 text-[14px] text-[#333333] hover:bg-[#F6F9FF] cursor-pointer"
                                        >
                                            No Job Types
                                        </div>
                                    </div>
                                )}
                            </div>

                        </div>


                        <div className="mt-4 flex items-center gap-3 text-sm">
                            <span className="text-[#737A91] text-[14px]">Similar:</span>
                            {filterTags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-[15px] py-[8px] border border-[#737A91] rounded-[5px] text-[#737A91] truncate whitespace-nowrap"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="mt-8">
                            <div className="flex items-center gap-4 mb-4">
                                <h2 className="text-[18px] font-[500] text-[#333333]">
                                    Featured Jobs
                                </h2>
                                <span className="text-[14px] text-[#0154AA] cursor-pointer underline font-[500] underline-offset-[2px]">
                                    See Featured Jobs
                                </span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                                {[1, 2, 3, 4, 5].map((_, idx) => (
                                    <JobCard key={idx} promoted />
                                ))}
                            </div>
                        </div>

                        <div className="mt-8">
                            <div className="flex items-center gap-4 mb-4">
                                <h2 className="text-[18px] font-[500] text-[#333333]">
                                    Recommended Jobs
                                </h2>
                                <span className="text-[14px] text-[#0154AA] cursor-pointer underline font-[500] underline-offset-[2px]">
                                    See Recommended Jobs
                                </span>
                            </div>

                            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, idx) => (
                                    <JobCard key={idx} />
                                ))}
                            </div>
                        </div>
                        <div className="mt-8">
                            <div className="flex items-center gap-4 mb-4">
                                <h2 className="text-[18px] font-[500] text-[#333333]">
                                    Latest Jobs
                                </h2>
                                <span className="text-[14px] text-[#0154AA] cursor-pointer underline font-[500] underline-offset-[2px]">
                                    See Latest Jobs
                                </span>
                            </div>

                            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, idx) => (
                                    <JobCard key={idx} />
                                ))}
                            </div>
                        </div>

                    </main>

                </div>
            </div>
        </div>
    );
};

export default Index;
