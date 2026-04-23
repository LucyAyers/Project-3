import React from 'react';
import AssignmentPlanner from './AssignmentPlanner';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AssignmentPlanner"
          component={AssignmentPlanner}
          options={{ title: 'Assignment Planner' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}