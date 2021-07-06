import "../public/styles/globals.css";
import { ThemeProvider } from "../context/themeTemplate";

function App({ Component, pageProps }: any) {
  return (
    <ThemeProvider initialTheme="light">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
