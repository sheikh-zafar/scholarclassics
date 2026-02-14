"use client"
import React from "react";

export const taweeldata = [
    {
        arabictitle: "الأربعون النَوايَة",
        englishtitle: "Al Arba'oona Nawawiyyah",
        archive: "./comingsoon",
        drive:
            "https://drive.google.com/drive/u/1/folders/1azueqYmaJAcOntjy9hxks029gnVIGyky",
        youtube:
            "https://www.youtube.com/c/ZafarulHasan/playlists",
    },
    {
        arabictitle: "شرح السنة",
        englishtitle: "Sharh As-Sunnah",
        archive: "https://archive.org/embed/sharh-as-sunnah-barbaharee-zafarulhasan-madani&playlist=1&list_height=550",
        drive:
            "https://drive.google.com/drive/u/0/folders/1FHmnB17RfmCYfZdjSpuyQ6XCt1zELR-o",
        youtube:
            "https://www.youtube.com/playlist?list=PLmZP1KIsC-hnmXQn8oulAyQDd3l8xjyDo",
    },
    {
        arabictitle: "بلوغ المرام",
        englishtitle: "Bulugh al-Maram",
        archive: "https://archive.org/embed/sharh-bulugh-al-maram-zafarulhasan-madani&playlist=1&list_height=550",
        drive:
            "https://drive.google.com/drive/u/0/folders/1dt9ClL2vhPPiz9UtfzwRyWNvFpHOj1dw",
        youtube:
            "https://www.youtube.com/playlist?list=PLmZP1KIsC-hltNDJamXol6XA04VzJKIng",
    },
    {
        arabictitle: "كتاب التوحيد",
        englishtitle: "Kitab at-Tawheed",
        archive: "./comingsoon",
        drive:
            "https://drive.google.com/drive/u/0/folders/1msQrFTXsWmG2M76nb373wHtJFeFgl85Y",
        youtube:
            "https://www.youtube.com/c/ZafarulHasan/featured",
    },
    {
        arabictitle: "الأصول الثلاثة",
        englishtitle: "Usool al-Thalatha",
        archive: "https://archive.org/embed/3-fundamental-principles-zafarulhasan-madani&playlist=1&list_height=550",
        drive:
            "https://drive.google.com/drive/u/0/folders/1b_iM6DBbrbbMP7p7-KzuRVeH-wZDPwts",
        youtube:
            "https://www.youtube.com/playlist?list=PLmZP1KIsC-hlVgAZOuDvaowaj9uPKoYWL",
    },
    {
        arabictitle: "الشمائل المحمدية",
        englishtitle: "Shamail al-Muhammadiyah",
        archive: "https://archive.org/embed/sharh-shamail-muhammadiyah-zafarulhasan-madani&playlist=1&list_height=550",
        drive:
            "https://drive.google.com/drive/u/0/folders/1SNvR6J81FrBQjwmWofW5U3PLeCQKEIvN",
        youtube:
            "https://www.youtube.com/playlist?list=PLmZP1KIsC-hk_6GGFntSM-IwahZs_cJb6",
    }
]

export default function taweel() {

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
                    {taweeldata.map((taweel, index) => (
                        <section key={taweel.id || index} className="w-full flex justify-center">
                            <div className="container px-4">
                                {/* Card Container */}
                                <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">

                                    {/* Card Header */}
                                    <div className="bg-gray-50 border-b border-gray-200 p-6 text-center">
                                        <div className="text-2xl font-semibold text-gray-800">
                                            {taweel.arabictitle}
                                        </div>
                                        <p className="text-lg text-gray-600 mt-2 font-light">
                                            {taweel.englishtitle}
                                        </p>
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-6">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                                            {/* Listen Button */}
                                            <a
                                                href={taweel.archive}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 py-3 px-4 rounded-md transition-transform active:scale-95 text-white"
                                                style={{ backgroundColor: "#2e856e", fontFamily: "Righteous" }}
                                            >
                                                <i className="fa fa-headphones"></i> Listen
                                            </a>

                                            {/* Download Button */}
                                            <a
                                                href={taweel.drive}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 py-3 px-4 rounded-md transition-transform active:scale-95 text-white"
                                                style={{ backgroundColor: "#2e856e", fontFamily: "Righteous" }}
                                            >
                                                <i className="fa fa-download"></i> Download
                                            </a>

                                            {/* Watch Button */}
                                            <a
                                                href={taweel.youtube}
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