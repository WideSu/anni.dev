"use client";

import { useTranslations } from "next-intl";
import { NextImage } from "@src/components/common";
import ContactImage from "@public/images/pages/home/contact.svg";

function FourthSection() {
    const t = useTranslations("Home.FourthSection");

    return (
        <section
            className="last-section-height flex items-center bg-primary-400"
            id="contact"
        >
            <div className="container flex cursor-default items-center justify-between gap-20 py-16">
                <div className="grid gap-4 font-semibold text-primary-300 md:w-1/2">
                    <h2 className="text-6xl font-bold">{t("title")}</h2>
                    <p>{t("paragraph-one")}</p>
                    <p>{t("paragraph-two")}</p>
                    <a
                        className="w-fit rounded-full border-2 border-primary-200 bg-primary-200 px-6 py-3 text-white transition-all hover:bg-primary-400 hover:text-primary-300"
                        href="mailto:gokhan_bakirci_53@hotmail.com?subject=Hello!"
                    >
                        {t("cta")}
                    </a>
                </div>
                <div className="hidden md:inline-block">
                    <NextImage
                        width={600}
                        height={400}
                        src={ContactImage}
                        alt=""
                    />
                </div>
            </div>
        </section>
    );
}

export default FourthSection;
