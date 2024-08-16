// Components
import { View, Text, ScrollView, Image, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// Hooks
import {useState} from 'react'

// Utils 
import images from "../../constants/images"
import { ISignUpForm, initialSignUpFormState } from '@/constants/auth'
import { Link } from 'expo-router'

const SignIn = () => {
  const [formState, setFormState] = useState<ISignUpForm>(initialSignUpFormState);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      console.log("Submitting...");
      setTimeout(() => {
        console.log("Credentials", formState);
        setIsLoading(false);
      }, 2000)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <KeyboardAwareScrollView>
        <ScrollView>
          <View className="w-full justify-center px-4 my-6">
            <Image 
              source={images.logo}
              className="w-[115px] h-[50px]"
              resizeMode="contain"
            />

            <Text className="text-white text-2xl text-semibold mt-5 font-psemibold">
              Sign up to Aora
            </Text>

            {/* Username */}
            <FormField
              title="Username"
              value={formState.email}
              handleChangeText={(input) => setFormState({ ...formState, username: input })}
              customStyles="mt-7"
              keyboardType="default"
            />

            {/* Email */}
            <FormField
              title="Email"
              value={formState.email}
              handleChangeText={(input) => setFormState({ ...formState, email: input })}
              customStyles="mt-7"
              keyboardType="email-address"
            />

            {/* Password */}
            <FormField
              title="Password"
              value={formState.password}
              handleChangeText={(input) => setFormState({ ...formState, password: input })}
              customStyles="mt-7"
              keyboardType="visible-password"
            />

            <CustomButton 
              title="Sign in"
              handlePress={handleSubmit}
              containerStyles="w-full mt-7"
              isLoading={isLoading}
            >
                <ActivityIndicator animating={isLoading} />
            </CustomButton>

            <View className="justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-gray-100 font-pregular">
                Already had an account?
              </Text>
              <Link href="/sign-in" className="text-lg font-semibold text-secondary-200">
                Login
              </Link>
            </View>
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default SignIn;