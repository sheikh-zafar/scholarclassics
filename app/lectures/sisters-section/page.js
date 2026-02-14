"use client"
import React from "react";

export const sisterssection = [
    {
        arabictitle: "النّساء",
        englishtitle: "Sister's section",
        archive: "https://zafarulhasan.com/comingsoon",
        drive:
            "https://drive.google.com/drive/folders/15fDSK6rNln1xfP5hPi13jsP4vFsc1LwU",
        youtube:
            "https://www.youtube.com/watch?v=VVTVdB6Rp7Q&list=PLmZP1KIsC-hnxbVOity71qHq_YqO6Ui5G",
    }
]

export default function sisters() {

    return (
        <div className="min-h-screen">
            <section className="py-12 px-4">
                <div className="container mx-auto">
                    <div className="text-center">
                        <h5 className="text-2xl font-bold mb-2">النّساء</h5>
                        <p
                            className="text-xl text-gray-600"
                            style={{ fontFamily: "Fredoka One" }}
                        >
                            Sisters Section
                        </p>
                        <hr className="mt-6 border-gray-200" />
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4">
                <div className="space-y-8 py-6">
                    {sisterssection.map((sisters, index) => (
                        <section key={sisters.id || index} className="w-full flex justify-center">
                            <div className="container px-4">
                                {/* Card Container */}
                                <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">

                                    {/* Card Header */}
                                    <div className="bg-gray-50 border-b border-gray-200 p-6 text-center">
                                        <div className="text-2xl font-semibold text-gray-800">
                                            {sisters.arabictitle}
                                        </div>
                                        <p className="text-lg text-gray-600 mt-2 font-light">
                                            {sisters.englishtitle}
                                        </p>
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-6">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                                            {/* Listen Button */}
                                            <a
                                                href={sisters.archive}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 py-3 px-4 rounded-md transition-transform active:scale-95 text-white"
                                                style={{ backgroundColor: "#2e856e", fontFamily: "Righteous" }}
                                            >
                                                <i className="fa fa-headphones"></i> Listen
                                            </a>

                                            {/* Download Button */}
                                            <a
                                                href={sisters.drive}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 py-3 px-4 rounded-md transition-transform active:scale-95 text-white"
                                                style={{ backgroundColor: "#2e856e", fontFamily: "Righteous" }}
                                            >
                                                <i className="fa fa-download"></i> Download
                                            </a>

                                            {/* Watch Button */}
                                            <a
                                                href={sisters.youtube}
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
            </div>

        </div>
    );
}