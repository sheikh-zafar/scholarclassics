"use client"
import React from "react";
import { tafseerdata } from "../../../public/lib/tafseerdata";
import Tafseer from "../../../component/Tafseer";

export default function TadweenSunnah() {
    const [data] = React.useState(tafseerdata);

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
                <Tafseer tafseer={data} />
            </div>

        </div>
    );
}