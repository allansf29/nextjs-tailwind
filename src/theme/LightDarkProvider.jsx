'use client';

const { ThemeProvider } = require("next-themes");

function LightDarkProvider({ children }) {
    return (
        <ThemeProvider enableSystem={true} attribute="class">
            {children}
        </ThemeProvider>
    );
}

module.exports = LightDarkProvider;
