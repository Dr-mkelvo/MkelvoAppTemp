import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { Link } from "expo-router"
import { SafeAreaView } from 'react-native-safe-area-context';
import { Redirect, router } from 'expo-router';

import { images } from "../constants"
import CustomButton from '../components/CustomButton';
export default function App() {
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView contentContainerStyle={{ height: "100%" }}>
                <View className="w-full flex justify-top items-center min-h-[85vh] px-4">

                    <Image
                        source={images.logo}
                        className="w-[130px] h-[84px]"
                        resizeMode='contain'
                    />
                    <Image
                        source={images.cards}
                        className="max-w-[380px] w-full h-[300px]"
                        resizeMode='contain'
                    />



                    <View className="relative mt-5">
                        <Text className="text-3xl text-white font-bold text-center">
                            This is the Splash Page {" "}
                            <Text className="text-secondary-200">Mkelvo

                            </Text>

                        </Text>
                        <Image
                            source={images.path}
                            className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
                            resizeMode="contain"
                        />


                    </View>

                    <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
                        Brains at Work: Description about the splash page goes here
                    </Text>
                    <CustomButton
                        title="Continue with Email"
                        handlePress={() => router.push("/sign-in")}
                        containerStyles="w-full mt-7"
                    />
                </View>


            </ScrollView>
            <StatusBar backgroundColor="#161622" style="light" />

        </SafeAreaView>
    );
}

