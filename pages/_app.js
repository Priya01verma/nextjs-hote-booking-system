import { MuiThemeProvider } from '@material-ui/core';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import RootReducer from "../RootReducer";
import thunk from "redux-thunk";
import theme from "../styles/theme";

const rxStore = createStore(RootReducer, applyMiddleware(thunk, logger));

export default function App({Component,pageProps}){
    return(
        <MuiThemeProvider theme={theme} >
        <Provider store={rxStore} >
                <Component {...pageProps} />
        </Provider>
    </MuiThemeProvider>
    )
}