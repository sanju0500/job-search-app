import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Search from "./components/Search";
import JobListings from "./components/JobListings";
import AppHeader from "./components/AppHeader";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4943d9",
    },
    secondary: {
      main: "#54efc3",
    },
  },
  typography: {
    fontFamily: [
      "Lexend",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Container maxWidth={false}>
          <Stack spacing={2}>
            <AppHeader />
            <Search />
            <JobListings />
          </Stack>
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
