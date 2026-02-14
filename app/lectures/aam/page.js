"use client"
import React from "react";

export const aamduroos = [
    {
        arabictitle: "إستقامت",
        englishtitle: "Isteqamat",
        archive: "https://archive.org/embed/istiqamah-zafarulhasan-madani&playlist=1&list_height=550",
        drive:
            "https://drive.google.com/drive/folders/1LVbol0FZAEe8Y2efbnV9jNJLbQN95fkT",
        youtube:
            "https://www.youtube.com/playlist?list=PLmZP1KIsC-hmd_vS2BTCk6n43tGG5IaIr",
    },
    {
        arabictitle: "أعمال القلوب",
        englishtitle: "Dil-ke-Aamaal",
        archive: "https://zafarulhasan.com/#/comingsoon",
        drive:
            "https://drive.google.com/drive/u/1/folders/1rgVlY1adu7MNnOIdl2B4fk7wCiOup-qC",
        youtube:
            "https://www.youtube.com/playlist?list=PLmZP1KIsC-hk9I9izzkKXm2DO05-5-YsY",
    }
]

export default function aam() {

    return (
        <div className="min-h-screen">
            <section className="py-12 px-4">
                <div className="container mx-auto">
                    <div className="text-center">
                        <h5 className="text-2xl font-bold mb-2">عام دروس</h5>
                        <p
                            className="text-xl text-gray-600"
                            style={{ fontFamily: "Fredoka One" }}
                        >
                            Aam Duroos
                        </p>
                        <hr className="mt-6 border-gray-200" />
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4">
                <div className="space-y-8 py-6">
                    {aamduroos.map((aam, index) => (
                        <section key={aam.id || index} className="w-full flex justify-center">
                            <div className="container px-4">
                                {/* Card Container */}
                                <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">

                                    {/* Card Header */}
                                    <div className="bg-gray-50 border-b border-gray-200 p-6 text-center">
                                        <div className="text-2xl font-semibold text-gray-800">
                                            {aam.arabictitle}
                                        </div>
                                        <p className="text-lg text-gray-600 mt-2 font-light">
                                            {aam.englishtitle}
                                        </p>
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-6">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                                            {/* Listen Button */}
                                            <a
                                                href={aam.archive}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 py-3 px-4 rounded-md transition-transform active:scale-95 text-white"
                                                style={{ backgroundColor: "#2e856e", fontFamily: "Righteous" }}
                                            >
                                                <i className="fa fa-headphones"></i> Listen
                                            </a>

                                            {/* Download Button */}
                                            <a
                                                href={aam.drive}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 py-3 px-4 rounded-md transition-transform active:scale-95 text-white"
                                                style={{ backgroundColor: "#2e856e", fontFamily: "Righteous" }}
                                            >
                                                <i className="fa fa-download"></i> Download
                                            </a>

                                            {/* Watch Button */}
                                            <a
                                                href={aam.youtube}
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