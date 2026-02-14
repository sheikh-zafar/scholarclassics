import React from "react";

export default function Products({ tafseer }) {
    return (
        <div className="space-y-8 py-6">
            {tafseer.map((qurantafseer, index) => (
                <section key={qurantafseer.id || index} className="w-full flex justify-center">
                    <div className="container px-4">
                        {/* Card Container */}
                        <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">

                            {/* Card Header */}
                            <div className="bg-gray-50 border-b border-gray-200 p-6 text-center">
                                <div className="text-2xl font-semibold text-gray-800">
                                    {qurantafseer.arabictitle}
                                </div>
                                <p className="text-lg text-gray-600 mt-2 font-light">
                                    {qurantafseer.englishtitle}
                                </p>
                            </div>

                            {/* Card Body */}
                            <div className="p-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                                    {/* Listen Button */}
                                    <a
                                        href={qurantafseer.archive}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 py-3 px-4 rounded-md transition-transform active:scale-95 text-white"
                                        style={{ backgroundColor: "#2e856e", fontFamily: "Righteous" }}
                                    >
                                        <i className="fa fa-headphones"></i> Listen
                                    </a>

                                    {/* Download Button */}
                                    <a
                                        href={qurantafseer.drive}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 py-3 px-4 rounded-md transition-transform active:scale-95 text-white"
                                        style={{ backgroundColor: "#2e856e", fontFamily: "Righteous" }}
                                    >
                                        <i className="fa fa-download"></i> Download
                                    </a>

                                    {/* Watch Button */}
                                    <a
                                        href={qurantafseer.youtube}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center justify-center gap-2 py-3 px-4 rounded-md transition-transform active:scale-95 text-white"
                                        style={{ backgroundColor: "#2e856e", fontFamily: "Righteous" }}
                                    >
                                        <i className="fa fa-youtube-play"></i> Watch
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
}