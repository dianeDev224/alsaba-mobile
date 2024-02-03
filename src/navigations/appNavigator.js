import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AjouterCaveaux from '../screens/ajouterCaveaux/ajouterCaveauxView';
import AnnoncesNavigator from './annoncesNavigation';
import DrawerNavigator from './drawerNavigator';
import MouvemetNavigator from './mouvementNavigator';
import ParametreNavigator from './parametreNavigator';
import SimulationNavigation from './simulationNavigator';

const AppStack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer screenOptions={{
            title: false,
        }} >
            <AppStack.Navigator>
                {/* <AppStack.Screen name='Login' component={LoginScreen} options={{ header: () => null }} /> */}
                <AppStack.Screen name='DrawerNavigator' component={DrawerNavigator} options={{ header: () => null }} />
                <AppStack.Screen name='SimulationNavigator' component={SimulationNavigation} options={{ header: () => null }} />
                <AppStack.Screen name='AnnoncesNavigator' component={AnnoncesNavigator} options={{ header: () => null }} />
                {/* <AppStack.Screen name='BilanNavigator' component={BilanNavigator} options={{ header: () => null }} /> */}
                <AppStack.Screen name='MouvementNavigator' component={MouvemetNavigator} options={{ header: () => null }} />
                <AppStack.Screen name='ParametreNavigator' component={ParametreNavigator} options={{ header: () => null }} />
                <AppStack.Screen name='AjouterCaveaux' component={AjouterCaveaux} options={{ header: () => null }} />

            </AppStack.Navigator>
        </NavigationContainer>
    );
}
