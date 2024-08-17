import { 
  Text, 
  View, 
  TextInput,
  TextInputProps,
  TouchableOpacity,
  Image, 
  TouchableWithoutFeedback
} from 'react-native'
import { forwardRef, useState } from 'react';
import { icons } from '../constants';

interface FormFieldProps extends TextInputProps  {
  title?: string;
  value?: string;
  placeholder?: string;
  handleChangeText?: (input: string) => void;
  customStyles?: string;
}

const FormField = forwardRef<TextInput, FormFieldProps>(({
  title,
  value,
  placeholder,
  handleChangeText,
  customStyles,
  ...props
}, ref) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <View className={`space-y-2 ${customStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

      <View className="border-2 border-black-200 w-full h-16 px-4 
      bg-black-100 rounded-2xl focus:border-secondary items-center flex-row">
        <TextInput 
          {...props}
          autoCapitalize="none"
          ref={ref}
          className="flex-1 text-white font-psemibold text-base h-full"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />

        {
          title === "Password" && (
            <TouchableWithoutFeedback
              onPress={() => setShowPassword(!showPassword)}
              className="p-2"
            >
              <Image 
                source={!showPassword ? icons.eye : icons.eyeHide}  
                className="w-6 h-6"
                resizeMode="contain"
              />
            </TouchableWithoutFeedback>
          )
        }
      </View>
    </View>
  )
})

export default FormField