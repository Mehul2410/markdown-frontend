import "../public/styles/globals.css";
import { ThemeProvider } from "../context/themeTemplate";

function App({ Component, pageProps }: any) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
