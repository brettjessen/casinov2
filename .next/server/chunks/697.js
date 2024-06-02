"use strict";
exports.id = 697;
exports.ids = [697];
exports.modules = {

/***/ 2660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EX": () => (/* binding */ TOKENLIST),
/* harmony export */   "Ft": () => (/* binding */ FOOTER_TWITTER_LINK),
/* harmony export */   "Jr": () => (/* binding */ PLATFORM_CREATOR_FEE),
/* harmony export */   "bc": () => (/* binding */ FOOTER_LINKS),
/* harmony export */   "cg": () => (/* binding */ PLATFORM_JACKPOT_FEE),
/* harmony export */   "fT": () => (/* binding */ LIVE_EVENT_TOAST),
/* harmony export */   "sK": () => (/* binding */ BASE_SEO_CONFIG)
/* harmony export */ });
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_0__);
// src\constants.ts

// Platform fees
const PLATFORM_CREATOR_FEE = 0.05; // 5%
const PLATFORM_JACKPOT_FEE = 0.01; // 1%
// Toggle live toast events - (true = on, false = off)
const LIVE_EVENT_TOAST = true;
/******************************************
 * ┌──────────────────────────────────────┐ *
 * │          FOOTER LINKS                │ *
 * └──────────────────────────────────────┘ *
 ******************************************/ const FOOTER_LINKS = [
    {
        href: "https://github.com/BankkRoll/Gamba-V2-Next.js",
        title: "\uD83D\uDC68‍\uD83D\uDCBB Build your own"
    },
    {
        href: "https://explorer.gamba.so/create",
        title: "\uD83D\uDE80 Create Pool"
    },
    {
        href: "https://gamba.so/docs",
        title: "\uD83D\uDCD6 Gamba Docs"
    },
    {
        href: "https://discord.com/invite/HSTtFFwR",
        title: "\uD83D\uDCAC Join Discord"
    }, 
];
const FOOTER_TWITTER_LINK = {
    href: "https://twitter.com/bankkroll_eth",
    title: "\xa9 2024 Template made with ❤️ by Bankk"
};
/******************************************
 * ┌──────────────────────────────────────┐ *
 * │          METATAGS (SEO)              │ *
 * └──────────────────────────────────────┘ *
 ******************************************/ const BASE_SEO_CONFIG = {
    defaultTitle: "Gamba - NEXTjs Demo",
    description: "The gambleFi protocol with end-to-end tools for on-chain degeneracy on Solana.",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://play-gamba.vercel.app/",
        title: "Gamba - NEXTjs Demo",
        description: "The gambleFi protocol with end-to-end tools for on-chain degeneracy on Solana.",
        images: [
            {
                url: "https://play-gamba.vercel.app/seo.png",
                alt: "Gamba - NEXTjs Demo"
            }, 
        ],
        site_name: "Gamba - NEXTjs Demo"
    },
    twitter: {
        cardType: "summary_large_image",
        site: "https://twitter.com/gambalabs",
        handle: "@gambalabs"
    },
    additionalMetaTags: [
        {
            name: "keywords",
            content: "casino, gaming, rewards, gambling, entertainment"
        },
        {
            name: "theme-color",
            content: "#000000"
        }, 
    ]
};
/******************************************
 * ┌──────────────────────────────────────┐ *
 * │      SUPPORTED PLATFORM TOKENS       │ *
 * └──────────────────────────────────────┘ *
 ******************************************/ const TOKENLIST = [
    // SOL
    {
        mint: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey("So11111111111111111111111111111111111111112"),
        name: "Solana",
        symbol: "SOL",
        image: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png",
        decimals: 9,
        baseWager: 0.01e9
    },
    // USDC
    {
        mint: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),
        name: "USD Coin",
        symbol: "USDC",
        image: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png",
        decimals: 9,
        baseWager: 0.01e9
    },
    // GUAC
    {
        mint: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey("AZsHEMXd36Bj1EMNXhowJajpUXzrKcK57wW4ZGXVa7yR"),
        name: "Guacamole",
        symbol: "GUAC",
        image: "https://bafkreiccbqs4jty2yjvuxp5x7gzgepquvv657ttauaqgxfhxghuz5us54u.ipfs.nftstorage.link/",
        decimals: 5,
        baseWager: 2000000e5
    }, 
];


/***/ })

};
;