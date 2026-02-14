"use client"
import React from "react";

export const mukhtasardata = [
    {
        arabictitle: "رفع الملام",
        englishtitle: "Raf'ul Malam",
        archive: "https://archive.org/embed/raf-al-malam-an-al-aimmat-al-alam-zafarulhasan-madani&playlist=1&list_height=550",
        drive:
            "https://drive.google.com/drive/folders/1-lsbdF9fKIoVkT5l2HMBv_0jsD8VoapL",
        youtube:
            "https://www.youtube.com/playlist?list=PLmZP1KIsC-hn__yls0YW0POpbt-Hp4APZ",
    },
    {
        arabictitle: "تدوين السنة",
        englishtitle: "Tadween As Sunnah",
        archive: "https://archive.org/embed/tadween-as-sunnah-zafarulhasan-madani&playlist=1&list_height=550",
        drive:
            "https://drive.google.com/drive/folders/1Fx6WbJG3y2mmkrSuKSWXJZz3FBwd80mf",
        youtube:
            "https://www.youtube.com/playlist?list=PLmZP1KIsC-hn_EzJv5bmRNWRmC2eJSTvO",
    },
    {
        arabictitle: "الربعين النووى",
        englishtitle: "Al-Arba'oona An-Nawawi",
        archive: "https://archive.org/embed/40-ahaadeth-imaam-an-nawawi--zafarulhasan-madani&playlist=1&list_height=550",
        drive:
            "https://drive.google.com/drive/folders/1-lsbdF9fKIoVkT5l2HMBv_0jsD8VoapL",
        youtube:
            "https://zafarulhasan.com/comingsoon",
    }
]

export default function Mukhtasar() {

    return (
        <div className="min-h-screen">
            <section className="py-12 px-4">
                <div className="container mx-auto">
                    <div className="text-center">
                        <h5 className="text-2xl font-bold mb-2">تفسير القرآن</h5>
                        <p
                            className="text-xl text-gray-600"
                            style={{ fontFamily: "Fredoka One" }}
                        >
                            Tafseerul Qur'an
                        </p>
                        <hr className="mt-6 border-gray-200" />
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4">
                <div className="space-y-8 py-6">
                    {mukhtasardata.map((mukhtasar, index) => (
                        <section key={mukhtasar.id || index} className="w-full flex justify-center">
                            <div className="container px-4">
                                {/* Card Container */}
                                <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">

                                    {/* Card Header */}
                                    <div className="bg-gray-50 border-b border-gray-200 p-6 text-center">
                                        <div className="text-2xl font-semibold text-gray-800">
                                            {mukhtasar.arabictitle}
                                        </div>
                                        <p className="text-lg text-gray-600 mt-2 font-light">
                                            {mukhtasar.englishtitle}
                                        </p>
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-6">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                                            {/* Listen Button */}
                                            <a
                                                href={mukhtasar.archive}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 py-3 px-4 rounded-md transition-transform active:scale-95 text-white"
                                                style={{ backgroundColor: "#2e856e", fontFamily: "Righteous" }}
                                            >
                                                <i className="fa fa-headphones"></i> Listen
                                            </a>

                                            {/* Download Button */}
                                            <a
                                                href={mukhtasar.drive}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 py-3 px-4 rounded-md transition-transform active:scale-95 text-white"
                                                style={{ backgroundColor: "#2e856e", fontFamily: "Righteous" }}
                                            >
                                                <i className="fa fa-download"></i> Download
                                            </a>

                                            {/* Watch Button */}
                                            <a
                                                href={mukhtasar.youtube}
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