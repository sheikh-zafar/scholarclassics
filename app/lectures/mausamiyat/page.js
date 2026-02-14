
"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { allmausamiyatyears } from "../../../public/lib/mausamiyatdata";


const mausamiyatData = [
    {
        title: "Muharram",
        image: "/img/muharram.jpg",
        listen: "/comingsoon",
        download:
            "https://drive.google.com/drive/folders/1b5HZv_HcOAhF7X01w3iovI0KzIqCpprK",
        externalListen: false,
    },
    {
        title: "Safar",
        image: "/img/safar.jpg",
        listen: "/comingsoon",
        download:
            "https://drive.google.com/drive/folders/1QLxr6xTkaik9HDA9jn02Wrz5Ghp64i0p",
        externalListen: false,
    },
    {
        title: "Ramadan",
        image: "/img/ramadan.jpg",
        listen:
            "https://archive.org/details/ramdan-2021-1442-zafarulhasan-madani",
        download:
            "https://drive.google.com/drive/folders/1sU6VFMVMRmzzubT2w0CYguodwGDsTd3y",
        externalListen: true,
    },
    ,
    {
        title: "Rajab",
        image: "/img/shaban.jpg",
        listen:
            "https://archive.org/details/ramdan-2021-1442-zafarulhasan-madani",
        download:
            "https://drive.google.com/drive/folders/1D57h2I6_UyjknJBqtn6PWaNhGe8Hx7fR",
        externalListen: true,
    },
    ,
    {
        title: "Dhul Hijjah",
        image: "/img/dhulhijjah.jpg",
        listen:
            "https://archive.org/details/ramdan-2021-1442-zafarulhasan-madani",
        download:
            "https://drive.google.com/drive/folders/1PiPdszibzFuRKipSHQvlVe79TdWNZoWW",
        externalListen: true,
    },
    ,
    {
        title: "Shaban",
        image: "/img/shaban.jpg",
        listen:
            "https://archive.org/details/ramdan-2021-1442-zafarulhasan-madani",
        download:
            "https://drive.google.com/drive/folders/13laZlvbf1xL-pA-g1Y23AjYlDbW2ck2P",
        externalListen: true,
    }
];

export default function MausamiyatSection() {
    const [openYear, setOpenYear] = useState(null);

    const groupedByHijri = allmausamiyatyears.reduce((acc, item) => {
        if (!acc[item.hijri]) acc[item.hijri] = [];
        acc[item.hijri].push(item);
        return acc;
    }, {});
    return (<div>
        <section className="py-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid gap-5 md:grid-cols-3 text-center">
                    {mausamiyatData.map(
                        ({ title, image, listen, download, externalListen }) => (
                            <div key={title} className="space-y-4">
                                {/* Image */}
                                <Image
                                    src={image}
                                    alt={title}
                                    width={500}
                                    height={500}
                                    className="w-full max-w-xs mx-auto rounded shadow"
                                />

                                {/* Buttons */}
                                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                    {externalListen ? (
                                        <a
                                            href={listen}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="w-1/2 mx-auto rounded-lg border border-[#5c4033] bg-[#5c4033] px-6 py-3 text-beige font-righteous hover:bg-[#4b3329] transition"
                                        >
                                            <i className="fa fa-headphones mr-2" /> Listen
                                        </a>
                                    ) : (
                                        <Link
                                            href={listen}
                                            target="_blank"
                                            className="w-1/2 mx-auto rounded-lg border border-[#5c4033] bg-[#5c4033] px-6 py-3 text-beige font-righteous hover:bg-[#4b3329] transition"
                                        >
                                            Listen
                                        </Link>
                                    )}

                                    <a
                                        href={download}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="w-42.5 mx-auto rounded-lg border border-[#5c4033] bg-[#5c4033] px-6 py-3 text-beige font-righteous hover:bg-[#4b3329] transition"
                                    >
                                        <i className="fa fa-download mr-2" /> Download
                                    </a>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
        <section className="max-w-5xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-semibold text-center mb-8 text-white">
                Mausamiyat Archive
            </h1>

            <div className="space-y-4">
                {Object.entries(groupedByHijri).map(([hijri, items]) => (
                    <div
                        key={hijri}
                        className="border rounded-lg overflow-hidden"
                    >
                        {/* Accordion Header */}
                        <button
                            onClick={() =>
                                setOpenYear(openYear === hijri ? null : hijri)
                            }
                            className="w-full flex justify-between items-center px-6 py-4 bg-emerald-50 text-emerald-800 font-semibold text-lg"
                        >
                            <span>
                                {hijri} [{items[0].year}]
                            </span>
                            <span>{openYear === hijri ? "−" : "+"}</span>
                        </button>

                        {/* Accordion Body */}
                        {openYear === hijri && (
                            <div className="bg-white divide-y">
                                {items.map((item, index) => (
                                    <div
                                        key={index}
                                        className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 py-4 text-center md:text-left"
                                    >
                                        <div className="text-lg font-medium text-black">
                                            {item.month}
                                        </div>

                                        <div>
                                            <Link
                                                href="/comingsoon"
                                                target="_blank"
                                                className="text-emerald-600 underline font-medium"
                                            >
                                                Listen
                                            </Link>
                                        </div>

                                        <div>
                                            <a
                                                href={item.drive}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-emerald-600 underline font-medium"
                                            >
                                                Download
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    </div>

    );
}
