import 'react-native-gesture-handler';

import { EventProvider } from 'react-native-outside-press';

import AppContext from './src/hooks/appContext';
import AppNavigator from './src/navigations/appNavigator';

export default function App() {

  return (
    // <GestureHandlerRootView>
    <EventProvider>
      <AppContext>
        <AppNavigator />
        {/* <Test /> */}
      </AppContext>
    </EventProvider>
    // </GestureHandlerRootView>
  );
}

