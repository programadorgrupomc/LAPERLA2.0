/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        FondoPerla: "#FCF5EB",
        AzulPerla: "#471D7C",
        BlancoFoo: "#F8F8F8",
        GrisDr: "#DEDEDE",
        NaranjaPerla: "#FF7439",
        FondoNp1: "#F5EADA",
        FondoNp2: "#F2E4CE",
        MarronPerla: "#463725",
        NaranjaOscuroPerla: "#D4531D",
        FondoCul1: "#fbf3e5",
        FondoCul2: "#f6efe0",
      },
      fontFamily: {
        KarbonRegular: ["KarbonRegular"],
        TestKarbonBold: ["TestKarbonBold"],
        TestKarbonBoldItalic: ["TestKarbonBoldItalic"],
        TestKarbonHairline: ["TestKarbonHairline"],
        TestKarbonHairlineItalic: ["TestKarbonHairlineItalic"],
        TestKarbonLight: ["TestKarbonLight"],
        TestKarbonLightItalic: ["TestKarbonLightItalic"],
        TestKarbonMedium: ["TestKarbonMedium"],
        TestKarbonMediumItalic: ["TestKarbonMediumItalic"],
        TestKarbonRegular: ["TestKarbonRegular"],
        TestKarbonRegularItalic: ["TestKarbonRegularItalic"],
        TestKarbonSemiBold: ["TestKarbonSemiBold"],
        TestKarbonSemiBoldItalic: ["TestKarbonSemiBoldItalic"],
        TestKarbonThin: ["TestKarbonThin"],
        TestKarbonThinItalic: ["TestKarbonThinItalic"],
        MuseoSans: ["LeelawadeeRegular"],
        GilroyBold: ["GilroyBold"],
      },
    },
  },
  plugins: [],
}