
import { AppStackScreenProps, navigate } from "app/navigators"
import { ErrorBoundary } from 'app/screens';
import { palette } from 'app/theme/palette';
import React, { FC, useEffect } from "react"
import { Modal, TouchableOpacity, View } from "react-native"
import { CQText } from "app/components/Text/CQText"
import { useRoute } from "@react-navigation/native"

interface StatScreenProps extends AppStackScreenProps<'Stat'> {}

export const StatScreen: FC<StatScreenProps> = _props => {
  const routes = useRoute()
  // @ts-ignore
  const { income, outcome } = routes?.params || {};

  useEffect(() => {
    console.tron.log(income, outcome);
  }, [])

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
            <View style={{ width: '96%', height: '30%', backgroundColor: palette.white, borderRadius: 10 }}>
              <View style={{width: '100%', alignItems: 'center', marginVertical: 50}}>
                <View style={{width: '100%', height: 100, justifyContent: 'space-evenly', paddingLeft: 30}}>
                  <CQText
                    style={{
                      color: palette.lighterBlack,
                      fontSize: 26,
                    }}
                    text={`Income of the day: ${income}`}
                  />
                  <CQText
                    style={{
                      color: palette.lighterBlack,
                      fontSize: 26,
                    }}
                    text={`Outcome of the day: ${outcome}`}
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
                  onPress={() => {
                    navigate('Home')
                    setTimeout(() => {
                      navigate('Calendar')
                    }, 100)
                  }}
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
            </View>
        </View>
        </View>
      </Modal>
    </ErrorBoundary>
  );
};
