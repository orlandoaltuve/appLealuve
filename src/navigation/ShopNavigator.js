import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryProductScreen from "../screens/CategoryProductScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import { COLORS } from "../constants/colors";

const Stack = createNativeStackNavigator();

export default ShopNavigator = () => {
    return (
       
            <Stack.Navigator initialRouteName="Categories" screenOptions={{
                headerStyle: { backgroundColor: COLORS.primary },
                headerTintColor: COLORS.secundary,
                headerTitleStyle: {
                    fontWeight: "bold"
                },
            }}>
                <Stack.Screen
                    name="Categories"
                    component={CategoriesScreen}
                    options={{
                        title: "Lealuve"
                    }} />
                <Stack.Screen name="Product" component={CategoryProductScreen}
                    options={({ route }) => ({
                        title: route.params.name,
                    })} />
                <Stack.Screen name="Details" component={ProductDetailsScreen}
                    options={({ route }) => ({
                        title: route.params.name,
                    })} />
            </Stack.Navigator>
     
    )
}