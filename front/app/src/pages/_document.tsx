import { Html, Head, Main, NextScript } from 'next/document'
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import React from "react";

export default function Document() {
    return (
        <Html lang="fr">
            <Head/>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}