
import { AppStackScreenProps, navigate, navigationRef } from "app/navigators"
import { ErrorBoundary } from 'app/screens';
import { palette } from 'app/theme/palette';
import React, { FC, useEffect } from "react"
import { Modal, TouchableOpacity, View } from "react-native"
import { useStores } from 'app/models';
import { CQText } from "app/components/Text/CQText"
import { Controller, useForm } from "react-hook-form"
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"
import { InputField } from "app/components/InputField/InputField"
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { useRoute } from "@react-navigation/native"
import UUIDGenerator from 'react-native-uuid';

interface TransactionData {
  amount: string;
  reason: string;
}

interface TransactionCreationScreenProps extends AppStackScreenProps<'TransactionCreation'> {}

export const TransactionCreationScreen: FC<TransactionCreationScreenProps> = _props => {
  const routes = useRoute()
  // @ts-ignore
  const { type } = routes?.params || {};
  const { authStore } = useStores();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TransactionData>({
    mode: 'all',
    defaultValues: { amount: '0', reason: '' },
  });

  useEffect(() => {
    console.tron.log(type)
  }, [])

  const onSubmit = async (transactionalData: TransactionData) => {
    const item = {
      id: UUIDGenerator.v4().toString(),
      reason: transactionalData.reason,
      amount: parseInt(transactionalData.amount, 10),
      type: type,
      creationDatetime: new Date().toISOString()
    }
    await authStore.createTransaction(item)
    await authStore.getTransaction()
    await authStore.getUser();
    // @ts-ignore
    navigationRef.current.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
    setTimeout(() => navigate('Home'), 1000);
  };

  return (
    <ErrorBoundary catchErrors='always'>
      <Modal visible={true} transparent={true}>
        <View
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: palette.lightGrey,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
            <View style={{ width: '96%', height: '50%', backgroundColor: palette.white, borderRadius: 10 }}>
              <View style={{width: '100%', alignItems: 'center', marginVertical: 50}}>
              <View
                style={{
                  marginVertical: 10,
                  width: '70%',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}
              >
                <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                  <FontAwesomeIcon name='exchange' size={26} color={palette.deepPink} />
                </View>
                <View style={{width: 250}}>
                  <CQText
                    style={{
                      color: palette.black,
                      fontSize: 16,
                      marginLeft: 10
                    }}
                    text={type ?? ''}
                  />
                </View>
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
                  <FontAwesomeIcon name='money' size={30} color={palette.deepPink} />
                </View>
                <Controller
                  control={control}
                  name='amount'
                  defaultValue=''
                  render={({ field: { onChange, value } }) => (
                    <InputField text={'Amount'} error={!!errors.amount} value={value} onChange={onChange} backgroundColor={palette.white} width={250} />
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
                  <EntypoIcon name='text' size={26} color={palette.deepPink} />
                </View>
                <Controller
                  control={control}
                  name='reason'
                  defaultValue=''
                  render={({ field: { onChange, value } }) => (
                    <InputField text={'Reason'} error={!!errors.reason} value={value} onChange={onChange} backgroundColor={palette.white} width={250} />
                  )}
                />
              </View>
              </View>
              <View
                style={{
                  width: '100%',
                  height: 60,
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                  flexDirection: 'row',
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
                  onPress={() => navigate('Home')}
                >
                  <View style={{ justifyContent: 'center' }}>
                    <CQText
                      style={{
                        color: palette.white,
                        fontSize: 16,
                      }}
                      text={'Cancel'}
                    />
                  </View>
                </TouchableOpacity>
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
                      text={'Save'}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
        </View>
      </Modal>
    </ErrorBoundary>
  );
};
