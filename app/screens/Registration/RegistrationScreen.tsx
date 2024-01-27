import { observer } from 'mobx-react-lite';
import React, { FC } from "react"
import { TouchableOpacity, View } from 'react-native';
import { AppStackScreenProps, navigate } from 'app/navigators';
import { CQImage } from 'app/components/AutoImage/CQImage';
import { ErrorBoundary } from 'app/screens';
import { CQText } from 'app/components/Text/CQText';
import { palette } from 'app/theme/palette';
import { InputField } from 'app/components/InputField/InputField';
import { Controller, useForm } from 'react-hook-form';
import IoniconIcon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { useStores } from "app/models"

interface RegistrationScreenProps extends AppStackScreenProps<'Registration'> {}

interface RegistrationData {
  username: string;
  password: string;
  birthdate: string;
}

export const RegistrationScreen: FC<RegistrationScreenProps> = observer(function RegistrationScreen(_props) {
  const {authStore: {signUp, login}} = useStores();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegistrationData>({
    mode: 'all',
    defaultValues: { username: '', password: '', birthdate: '' },
  });

  const onSubmit = async (registrationData: RegistrationData) => {
    const [day, month, year] = registrationData.birthdate.split('/');
    const formattedDate = `${year}-${month}-${day}`;
    await signUp(formattedDate, registrationData.username, registrationData.password)
    await login(registrationData.username, registrationData.password)
    navigate('Budget');
  }

  return (
    <ErrorBoundary catchErrors='always'>
      <CQImage
        source={require('assets/images/sign-up-bg.png')}
        resizeMode='stretch'
        resizeMethod='auto'
        style={{ height: '100%', width: '100%', position: 'absolute' }}
      />
      <View style={{ height: 170, width: '100%', alignItems: 'center', justifyContent: 'flex-end' }}>
        <CQText style={{ fontSize: 50, color: palette.black, fontWeight: 'bold' }} text={'Sign Up'}></CQText>
      </View>
      <View style={{ height: 400, width: '100%', alignItems: 'center', marginTop: 150 }}>
        <View
          style={{
            marginVertical: 10,
            width: '70%',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
            <FontAwesomeIcon name='user-o' size={33} color={palette.deepPink} />
          </View>
          <Controller
            control={control}
            name='username'
            defaultValue=''
            render={({ field: { onChange, value } }) => (
              <InputField text={'Username'} error={!!errors.username} value={value} onChange={onChange} backgroundColor={palette.white} width={250} />
            )}
          />
        </View>
        <View
          style={{
            marginVertical: 10,
            width: '70%',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
            <IoniconIcon name='lock-closed-outline' size={35} color={palette.deepPink} />
          </View>
          <Controller
            control={control}
            name='password'
            defaultValue=''
            render={({ field: { onChange, value } }) => (
              <InputField text={'Password'} error={!!errors.password} value={value} onChange={onChange} backgroundColor={palette.white} width={250} />
            )}
          />
        </View>
        <View
          style={{
            marginVertical: 10,
            width: '70%',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
            <AntDesignIcon name='calendar' size={35} color={palette.deepPink} />
          </View>
          <Controller
            control={control}
            name='birthdate'
            rules={{
              pattern: {
                value: /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/,
                message: 'Invalid birthdate',
              },
            }}
            render={({ field: { onChange, value } }) => (
              <InputField text={'Birthdate'} error={!!errors.birthdate} value={value} onChange={onChange} backgroundColor={palette.white} width={250} />
            )}
          />
        </View>
        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'flex-end' }}>
          <TouchableOpacity
            style={{
              width: 200,
              height: 40,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'flex-end',
              marginRight: 50,
            }}
            onPress={() => navigate('Login')}
          >
            <CQText
              style={{
                color: palette.black,
                fontSize: 16,
                textDecorationLine: 'underline',
              }}
              text={'Already have an account? '}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginVertical: 20,
            width: '100%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: palette.deepPink,
              width: 150,
              height: 40,
              borderRadius: 5,
              justifyContent: 'center',
              flexDirection: 'row',
            }}
            onPress={handleSubmit(onSubmit)}
          >
            <View style={{ justifyContent: 'center' }}>
              <CQText
                style={{
                  color: palette.white,
                  fontSize: 16,
                }}
                text={'Connect'}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: 100,
          position: 'absolute',
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <CQText
          style={{
            color: palette.black,
            fontSize: 30,
          }}
          text={'CashQuest'}
        />
        <CQImage
          source={require('assets/images/cash-quest-logo.png')}
          resizeMode='stretch'
          resizeMethod='auto'
          style={{ height: 50, width: 50, marginLeft: 10 }}
        />
      </View>
    </ErrorBoundary>
  );
});
