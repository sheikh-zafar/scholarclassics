import React from "react";

/* ===== DATA FOR 2019–2021 ===== */
const khutbahYears = [
    {
        year: 2021,
        hijri: "۱٤٤۱-۱٤٤۲",
        listen:
            "https://archive.org/details/2021-jumuah-khutbah-zafarulhasan-madani&playlist=1&list_height=550",
        download:
            "https://drive.google.com/drive/folders/1l9T-CQ1PCrhLlLAa5c3-aQAokT0jLyXh",
    },
    {
        year: 2020,
        hijri: "۱٤٤۱-۱٤٤۲",
        listen:
            "https://archive.org/embed/2020-jumuah-khutbah-zafarulhasan-madani&playlist=1&list_height=550",
        download:
            "https://drive.google.com/drive/folders/1WGuAmSMs0TVhFniVcLvjxWHZptcysHn7",
    },
    {
        year: 2019,
        hijri: "۱٤٤۰-۱٤٤۱",
        listen:
            "https://archive.org/embed/2019-jumuah-khutbah-zafarulhasan-madani&playlist=1&list_height=550",
        download:
            "https://drive.google.com/drive/u/0/folders/1Gqwi3Mbw00PHkcI3NWyakVe-zsr0M9HV",
    },
    {
        year: 2018,
        hijri: "۱٤۳۹ - ۱٤٤۰",
        listen:
            "https://archive.org/embed/2018-jumuah-khutbah-zafarulhasan-madani&playlist=1&list_height=550",
        download:
            "https://drive.google.com/drive/u/0/folders/1YPqmTZnpHKUANnFPNz21vDEmPis9dUno",
    }, {
        year: 2017,
        hijri: "۱٤۳۸ - ۱٤۳۹",
        listen:
            "https://archive.org/embed/2017-jumuah-khutbah-zafarulhasan-madani&playlist=1&list_height=550",
        download:
            "https://drive.google.com/drive/u/0/folders/15RHnNDUDY1cIYa6DtJLCuDPkCI36S21s",
    }, {
        year: 2016,
        hijri: "۱٤۳٦ - ۱٤۳۷",
        listen:
            "https://archive.org/embed/2016-jumuah-khutbah-zafarulhasan-madani&playlist=1&list_height=550",
        download:
            "https://drive.google.com/drive/u/0/folders/1LyS5vLN6BzwUn2Gx2dGSQ5nwpUVUxoOX",
    }, {
        year: 2015,
        hijri: "۱٤۳۷ - ۱٤۳۸",
        listen:
            "https://archive.org/embed/2015-jumuah-khutbah-zafarulhasan-madani&playlist=1&list_height=550",
        download:
            "https://drive.google.com/drive/u/0/folders/19x2wef8L4a6T0GNuHgEtSf5Ie-e3Ali4",
    }, {
        year: 2014,
        hijri: "۱٤۳٦ - ۱٤۳۷",
        listen:
            "https://archive.org/embed/2014-jumuah-khutbah-zafarulhasan-madani&playlist=1&list_height=550",
        download:
            "https://drive.google.com/drive/u/0/folders/1VKkGtyDWXiImGgyP2gG1IiB_NFGtE7Fq",
    }, {
        year: 2013,
        hijri: "۱٤۳٥ - ۱٤۳٦",
        listen:
            "https://archive.org/embed/2013-jumuah-khutbah-zafarulhasan-madani&playlist=1&list_height=550",
        download:
            "https://drive.google.com/drive/u/0/folders/1I25CEplT11AHxIfeg1zTJxl6uwAXcnnn",
    }, {
        year: 2012,
        hijri: "۱٤۳۲ - ۱٤۳۳",
        listen:
            "https://archive.org/embed/2012-jumuah-khutbah-zafarulhasan-madani&playlist=1&list_height=550",
        download:
            "https://drive.google.com/drive/u/0/folders/1Q6Ex1u-JthpGDZ3G4NAxDY2iPdrvYJMg",
    }, {
        year: 2011,
        hijri: "۱٤۳٤ - ۱٤۳٥",
        listen:
            "https://archive.org/embed/2011-jumuah-khutbah-zafarulhasan-madani&playlist=1&list_height=550",
        download:
            "https://drive.google.com/drive/folders/1U20FC1YKlrugtiMVTUAi27JZRkqRLZso",
    }, {
        year: 2010,
        hijri: "۱٤۳۳ - ۱٤۳٤",
        listen:
            "https://archive.org/embed/2010-jumuah-khutbah-zafarulhasan-madani&playlist=1&list_height=550",
        download:
            "https://drive.google.com/drive/folders/1J21s8KS8baM6W0wqJdw58VZae9puvfrq",
    }, {
        year: 2009,
        hijri: "۱٤۳۲ - ۱٤۳۳",
        listen:
            "https://archive.org/embed/2009-jumuah-khutbah-zafarulhasan-madani&playlist=1&list_height=550",
        download:
            "https://drive.google.com/drive/folders/1yMPYX3DjUItz5P-xKL57ISAqSeXjc122",
    }, {
        year: 2008,
        hijri: "۱٤۳۱ - ۱٤۳۲",
        listen:
            "https://archive.org/embed/2008-jumuah-khutbah-zafarulhasan-madani&playlist=1&list_height=550",
        download:
            "https://drive.google.com/drive/folders/1BDGm9FORnaAab_BIyYck4PdYXVW5PSwV",
    }, {
        year: 2007,
        hijri: "۱٤۳۰ - ۱٤۳۱",
        listen:
            "https://archive.org/embed/2007-jumuah-khutbah-zafarulhasan-madani&playlist=1&list_height=550",
        download:
            "https://drive.google.com/drive/u/0/folders/1MkU2NBaWv1JoybsyJf1nh7Ehu5vRArrs",
    }
];

export default function JummuahKhutbah() {
    return (
        <div className="space-y-8 max-w-5xl mx-auto px-4 pb-12">
            {/* ===== TITLE ===== */}
            <section className="text-center space-y-2 mt-10">
                <h5 className="text-2xl font-bold text-white">خطبة الجمعة</h5>
                <p className="text-lg font-fredoka text-white">Khutbah Al-Jumu'ah</p>
                <hr className="border-t-2 border-gray-300 w-24 mx-auto" />
            </section>

            {/* ===== MAP + QUICK LINKS ===== */}
            <div className="bg-[#f5f5dc] rounded-xl border-4 border-[#5c4033] p-4 md:p-6 space-y-6 shadow-md">
                <div className="overflow-hidden rounded-lg border border-gray-200 shadow-inner">
                    <iframe title="sheikh zafarul hasan location" className="w-full h-80 md:h-96"
                        style={{ border: 0 }}
                        loading="lazy"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28842.16211101562!2d55.39253734946866!3d25.36225714412123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b88d3d8f74d%3A0x29ea228628c48421!2sAbdullah%20ibn%20Huthafah%20Mosque!5e0!3m2!1sen!2sae!4v1770920755313!5m2!1sen!2sae"
                        allowfullscreen="">
                    </iframe>
                </div>

                <div className="grid grid-cols-3 gap-2 md:gap-4 text-center">
                    <a
                        href="https://www.youtube.com/playlist?list=PLmZP1KIsC-hmuVCpduAT3dMDd-kZG6l4f"
                        target="_blank"
                        rel="noreferrer"
                        className="group flex flex-col items-center space-y-2 p-2 rounded-lg hover:bg-white/50 transition"
                    >
                        <i className="fa fa-youtube-play text-red-600 text-3xl"></i>
                        <span className="text-[#2e856e] font-semibold text-sm md:text-base">YouTube</span>
                    </a>

                    <a
                        href="https://maps.app.goo.gl/95v1cUuHYRevto8n7"
                        className="group flex flex-col items-center space-y-2 p-2 rounded-lg hover:bg-white/50 transition"
                    >
                        <i className="fa fa-map-marker text-black text-3xl"></i>
                        <span className="text-[#2e856e] font-semibold text-sm md:text-base">Location</span>
                    </a>

                    <a
                        href="https://mixlr.com/zafarulhasan/"
                        target="_blank"
                        rel="noreferrer"
                        className="group flex flex-col items-center space-y-2 p-2 rounded-lg hover:bg-white/50 transition"
                    >
                        <img src="/img/mixlr.png" alt="mixlr" className="w-8 h-8 rounded shadow-sm" />
                        <span className="text-[#2e856e] font-semibold text-sm md:text-base">Mixlr</span>
                    </a>
                </div>
            </div>

            {/* ===== 2022 ARCHIVE PLAYER ===== */}
            <div className="w-full bg-black rounded-lg overflow-hidden shadow-xl">
                <iframe
                    title="2022 khutbah"
                    src="https://archive.org/embed/2022-jumuah-khutbah-zafarulhasan-madani&playlist=1&list_height=550"
                    className="w-full h-[500px]"
                    frameBorder="0"
                    scrolling="no"
                />
            </div>

            {/* ===== HISTORICAL YEARS GRID ===== */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {khutbahYears.map(({ year, hijri, listen, download }) => (
                    <section key={year} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="bg-gray-50 text-center font-bold text-xl py-3 border-b text-gray-700">
                            {year}
                        </div>
                        <div className="p-6 space-y-4 text-center">
                            <h2 className="text-[#2e856e] text-2xl font-arabic leading-relaxed">{hijri}</h2>
                            <div className="flex gap-3">
                                <a
                                    href={listen}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex-1 bg-[#2e856e] text-[#f5f5dc] py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-righteous hover:bg-[#256e58] transition active:scale-95"
                                >
                                    <i className="fa fa-headphones"></i> Listen
                                </a>
                                <a
                                    href={download}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex-1 border-2 border-[#2e856e] text-[#2e856e] py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-righteous hover:bg-gray-50 transition active:scale-95"
                                >
                                    <i className="fa fa-download"></i> Download
                                </a>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}