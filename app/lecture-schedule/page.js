'use client';


export default function SchedulePage() {
    return (
        <div>
            {/* Header */}
            <section className="py-10 text-center">
                <h2 className="text-2xl md:text-3xl font-semibold">
                    Regular Lecture Schedule
                </h2>
                <hr className="my-4 w-24 mx-auto border-gray-400" />
            </section>

            {/* Table */}
            <section className="px-4 pb-10">
                <div className="max-w-6xl mx-auto overflow-x-auto">
                    <table className="w-full border border-gray-700 text-white bg-gray-900">
                        <thead className="bg-black">
                            <tr>
                                <th className="p-3 text-left">Day</th>
                                <th className="p-3 text-left">Lecture Name</th>
                                <th className="p-3 text-left">Location</th>
                                <th className="p-3 text-left">Timing</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-700">
                            <tr>
                                <td className="p-3">Sunday</td>
                                <td className="p-3">Seerat&apos;un Nabi (ﷺ)</td>
                                <td className="p-3">After Isha</td>
                                <td className="p-3">
                                    <a
                                        href="https://youtube.com/Zafarulhasan"
                                        className="underline"
                                        target="_blank"
                                    >
                                        Online
                                    </a>
                                </td>
                            </tr>

                            <tr>
                                <td className="p-3">Monday</td>
                                <td className="p-3">
                                    Mukhtasar Sho&apos;bul Emaan / Riyadus Saliheen
                                </td>
                                <td className="p-3">After Isha</td>
                                <td className="p-3">
                                    <a
                                        href="https://youtube.com/Zafarulhasan"
                                        className="underline"
                                        target="_blank"
                                    >
                                        Online
                                    </a>
                                </td>
                            </tr>

                            <tr>
                                <td className="p-3">Tuesday</td>
                                <td className="p-3">
                                    Breezes of Imaan
                                    <hr className="my-2 border-gray-600" />
                                    Breezes of Imaan
                                </td>
                                <td className="p-3 space-y-2">
                                    <a
                                        href="https://maps.app.goo.gl/oYtgodMLQv6McE2r7"
                                        className="underline block"
                                        target="_blank"
                                    >
                                        Masjid Khadija bint Khuwailid – Al Nahda 2
                                    </a>
                                    <hr className="border-gray-600" />
                                    <a
                                        href="https://maps.app.goo.gl/kMoLGXqyhPBDpsxJ7"
                                        className="underline block"
                                        target="_blank"
                                    >
                                        Masjid Yusuf Baqar – Hor Al Anz
                                    </a>
                                </td>
                                <td className="p-3">
                                    After Maghrib
                                    <hr className="my-2 border-gray-600" />
                                    After Isha
                                </td>
                            </tr>

                            <tr>
                                <td className="p-3">Wednesday بروز بدھ</td>
                                <td className="p-3">Quran Tafseer</td>
                                <td className="p-3">
                                    <a
                                        href="https://maps.app.goo.gl/FrYfnHzK4wLbjb3k8"
                                        className="underline"
                                        target="_blank"
                                    >
                                        Masjid Mohammed bin Hasan – Al Twar 2
                                    </a>
                                </td>
                                <td className="p-3">After Isha</td>
                            </tr>

                            <tr>
                                <td className="p-3">Thursday بروز جمعرات</td>
                                <td className="p-3">Sharh Bulugh Al Maram</td>
                                <td className="p-3">
                                    <a
                                        href="https://maps.app.goo.gl/FrYfnHzK4wLbjb3k8"
                                        className="underline"
                                        target="_blank"
                                    >
                                        Masjid Mohammed bin Hasan – Al Twar 2
                                    </a>
                                </td>
                                <td className="p-3">After Isha</td>
                            </tr>

                            <tr>
                                <td className="p-3">Friday بروز جمعہ</td>
                                <td className="p-3">Sharh At-Targheeb wat-Tarheeb</td>
                                <td className="p-3">
                                    <a
                                        href="https://maps.app.goo.gl/FrYfnHzK4wLbjb3k8"
                                        className="underline"
                                        target="_blank"
                                    >
                                        Masjid Mohammed bin Hasan – Al Twar 2
                                    </a>
                                </td>
                                <td className="p-3">After Isha</td>
                            </tr>

                            <tr>
                                <td className="p-3">Saturday</td>
                                <td className="p-3">Beauty of Islam</td>
                                <td className="p-3">
                                    <a
                                        href="https://maps.app.goo.gl/mscog2WwkqiHVszA8"
                                        className="underline"
                                        target="_blank"
                                    >
                                        Masjid Ash-Shaikha Latifa Bint Hamdan
                                    </a>
                                </td>
                                <td className="p-3">After Isha</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Calendar Button */}
                <div className="text-center mt-8">
                    <a
                        href="https://calendar.google.com"
                        target="_blank"
                        className="inline-flex items-center gap-2 border border-[#5c4033] px-6 py-3 text-[#5c4033] bg-[#f5efe6] hover:bg-[#e9e1d5]"
                    >
                        📅 Add Schedule to Calendar
                    </a>
                </div>
            </section>

        </div>
    );
}