import { observer } from "mobx-react-lite"
import React, { FC, /*useState*/ } from "react"
import { TouchableOpacity, View } from "react-native"
import { AppStackScreenProps, navigate } from "app/navigators"
import { CQImage } from "app/components/AutoImage/CQImage"
import { ErrorBoundary } from "app/screens"
import { CQText } from "app/components/Text/CQText"
import { palette } from "app/theme/palette"
import { InputField } from "app/components/InputField/InputField"
import { Controller, useForm } from "react-hook-form"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useStores } from "app/models"

interface BudgetScreenProps extends AppStackScreenProps<"Budget"> {}

interface BudgetData {
  amount: string;
}

export const BudgetScreen: FC<BudgetScreenProps> = observer(function BudgetScreen(_props) {
  const {authStore: {currentUser, updateInfos}} = useStores();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<BudgetData>({
    mode: 'all',
    defaultValues: { amount: '' },
  });

  // const [currentChecked, setCurrentChecked] = useState(0);

  const onSubmit = async(budgetData: BudgetData) => {
    await updateInfos({
      user: {
        id: currentUser?.id,
        username: currentUser?.username,
        birthDate: currentUser?.birthDate
      },
      profile: {
        first_name: 'Liana',
        last_name: 'Finaritra',
        sex: "M",
      },
      income: {
        earningFrequency: "DAILY",
        amount: parseInt(budgetData.amount, 10),
        savingTarget: 1
      },
      level: 0,
      balance: 0
    })
    navigate('Home');
  }

  return (
    <ErrorBoundary catchErrors='always'>
      <CQImage
        source={require('assets/images/budget-bg.png')}
        resizeMode='stretch'
        resizeMethod='auto'
        style={{height: '100%', width: '100%', position: 'absolute' }}
      />
      <View style={{ height: 300, width: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end'}}>
        <CQImage
          source={require('assets/images/cash-quest-logo.png')}
          resizeMode='stretch'
          resizeMethod='auto'
          style={{height: 100, width: 100 }}
        />
        <CQText style={{fontSize: 40, color: palette.black, fontWeight: 'bold', marginTop: 10}} text={"Budget Mode"}></CQText>
      </View>
      <View style={{ height: 250, width: '100%', alignItems: 'center', marginTop: 70}}>
        <View style={{marginVertical: 10, width: '70%', flexDirection: 'row', justifyContent: 'center'}}>
          <View style={{flex: 1,  justifyContent: 'flex-end', alignItems: 'center'}}>
            <MaterialCommunityIcons name='cash' size={33} color={palette.deepPink} />
          </View>
          <Controller
            control={control}
            name='amount'
            defaultValue=''
            render={({ field: { onChange, value } }) => (
              <InputField
                text={'Amount'}
                error={!!errors.amount}
                value={value}
                onChange={onChange}
                backgroundColor={palette.white}
                width={250}
              />
            )}
          />
        </View>
        <View style={{width: '100%', height: 50, marginTop: 10, flexDirection: 'row'}}>
          {/*<View style={{
            width: "30%",
            height: "100%",
            marginHorizontal: "1.5%",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}>
            <RadioButton.Android
              value="first"
              status={currentChecked === 0 ? "checked" : "unchecked"}
              onPress={() => setCurrentChecked(0)}
              color={palette.deepPink}
            />
            <CQText
              style={{
                color: palette.black,
                fontSize: 16,
              }}
              text={"Daily"}
            />
          </View>*/}
          {/*<View style={{
            width: "30%",
            height: "100%",
            marginHorizontal: "2%",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}>
            <RadioButton.Android
              value="second"
              status={currentChecked === 1 ? "checked" : "unchecked"}
              onPress={() => setCurrentChecked(1)}
              color={palette.deepPink}
            />
            <CQText
              style={{
                color: palette.black,
                fontSize: 16,
              }}
              text={"Weekly"}
            />
          </View>*/}
          {/*<View style={{
            width: "30%",
            height: "100%",
            marginHorizontal: "1.5%",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}>
            <RadioButton.Android
              value="third"
              status={currentChecked === 2 ? "checked" : "unchecked"}
              onPress={() => setCurrentChecked(2)}
              color={palette.deepPink}
            />
            <CQText
              style={{
                color: palette.black,
                fontSize: 16,
              }}
              text={"Monthly"}
            />
          </View>*/}
      </View>
        <View style={{marginVertical: 20, width: '100%', height: 50, justifyContent: 'center', alignItems: 'center'}}>
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
      <View style={{width: '100%', height: 100, position: 'absolute', bottom: 0, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
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
          style={{height: 50, width: 50, marginLeft: 10 }}
        />
      </View>
    </ErrorBoundary>
  )
})
