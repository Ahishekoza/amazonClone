/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { AuthContextProvider } from './src/context/AuthContext';
const Main = () => {
    return (
        <AuthContextProvider>
            <App />
        </AuthContextProvider>
    )
}

AppRegistry.registerComponent(appName, () => Main);
