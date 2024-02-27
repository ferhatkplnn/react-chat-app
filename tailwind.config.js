/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        backgroundColor: "#f0f0f0",
        chatInputColor: "#ffffff",
        sentMessageColor: "#e6f7ff",
        receivedMessageColor: "#f4f4f4",
        blackColor: "#000000",
        darkGrayColor: "#333333",
      },
    },
  },
  plugins: [],
};
