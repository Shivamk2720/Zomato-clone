import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  Platform,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import auth from '@react-native-firebase/auth';
import {LOGIN_TITLE, THEME_COLOR} from '../strings';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {
  Grayscale,
  Sepia,
  Tint,
  ColorMatrix,
  concatColorMatrices,
  invert,
  contrast,
  saturate,
} from 'react-native-color-matrix-image-filters';
import {useNavigation} from '@react-navigation/native';
const Login = () => {
  const [mobile, setMobile] = useState('');
  const [confirm, setConfirm] = useState(null);
  const [visible, setVisible] = useState(false);
  const [otp, setOtp] = useState('');
  const navigation = useNavigation();
  const [languages, setLanguages] = useState([
    {name: 'English', selected: true},
    {name: 'हिन्दी', selected: false},
    {name: 'తెలుగు', selected: false},
    {name: 'اردو', selected: false},
  ]);
  const signInWithPhoneNumber = async () => {
    const confirmation = await auth().signInWithPhoneNumber('+91' + mobile);
    setConfirm(confirmation);
    console.log(confirmation);
  };

  const verifyCode = async () => {
    try {
      const res = await confirm.confirm(otp);
      console.log(res);
      setConfirm(null);
      alert('user Registered on Firebase');
    } catch (error) {
      console.log('Invalid code.');
    }
  };
  const OnSelect = index => {
    let tempLang = languages;
    tempLang.map((item, ind) => {
      if (ind == index) {
        if (item.selected == true) {
          item.selected = false;
        } else {
          item.selected = true;
        }
      } else {
        item.selected = false;
      }
    });
    let x = [];
    tempLang.map(item => {
      x.push(item);
    });
    setLanguages(x);
    setVisible(false);
  };
  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <View style={styles.topView}>
        <Image source={require('../images/banner.png')} style={styles.banner} />
        <TouchableOpacity
          style={styles.changeLangBtn}
          onPress={() => {
            setVisible(true);
          }}>
          <Image
            source={require('../images/translating.png')}
            style={styles.langIcon}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.logintitle}>{LOGIN_TITLE}</Text>
      <View style={styles.divider}>
        <View
          style={[
            styles.dividerView,
            {marginRight: 20, marginLeft: 20},
          ]}></View>
        <Text style={styles.dividerText}>Login or Sign up</Text>
        <View
          style={[
            styles.dividerView,
            {marginRight: 20, marginLeft: 20},
          ]}></View>
      </View>

      {confirm == null ? (
        <View>
          <TextInput
            placeholder="mobile number"
            style={styles.mobileInput}
            keyboardType={'number-pad'}
            value={mobile}
            onChangeText={txt => {
              setMobile(txt);
            }}
          />
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
              // signInWithPhoneNumber();
              // setVisible(true);
              navigation.navigate('MainScreen');
            }}>
            <Text style={styles.loginBtnTxt}>Login</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <OTPInputView
            style={{
              width: '80%',
              height: 50,
              alignSelf: 'center',
              marginBottom: 50,
              marginTop: 50,
            }}
            pinCount={6}
            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            // onCodeChanged = {code => { this.setState({code})}}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
              setOtp(code);
            }}
          />
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
              // verifyCode();
            }}>
            <Text style={styles.loginBtnTxt}>Verify OTP</Text>
          </TouchableOpacity>
        </View>
      )}

      <Modal
        isVisible={visible}
        style={styles.modalStyle}
        animationIn={'slideInUp'}
        onBackdropPress={() => {
          setVisible(false);
        }}>
        <View style={styles.modalContainer}>
          <FlatList
            data={languages}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={[
                    styles.languageItem,
                    {
                      borderColor:
                        item.selected == true ? THEME_COLOR : '#8e8e8e',
                    },
                  ]}
                  onPress={() => {
                    OnSelect(index);
                  }}>
                  <View
                    style={{
                      width: '100%',
                      height: '100%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingLeft: 20,
                      justifyContent: 'space-between',
                      backgroundColor:
                        item.selected == true ? '#fff7f7' : '#fff',
                      borderRadius: 10,
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      {item.selected == true ? (
                        <Image
                          source={require('../images/selected.png')}
                          style={{
                            width: 24,
                            height: 24,
                            tintColor: THEME_COLOR,
                          }}
                        />
                      ) : (
                        <Image
                          source={require('../images/unselected.png')}
                          style={{width: 24, height: 24}}
                        />
                      )}
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '700',
                          marginLeft: 10,
                          color:
                            item.selected == true ? THEME_COLOR : '#8e8e8e',
                        }}>
                        {item.name}
                      </Text>
                    </View>
                    {item.selected == true ? (
                      <Image
                        source={require('../images/languages.png')}
                        style={{width: 50, height: 50, marginRight: 20}}
                      />
                    ) : (
                      <Grayscale style={{marginRight: 20}}>
                        <Image
                          source={require('../images/languages.png')}
                          style={{width: 50, height: 50, opacity: 0.5}}
                        />
                      </Grayscale>
                    )}
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </Modal>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topView: {
    height: responsiveHeight(35),
  },
  banner: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: Platform.OS == 'ios' ? 50 : 0,
    borderBottomRightRadius: Platform.OS == 'ios' ? 50 : 0,
  },
  logintitle: {
    fontSize: responsiveFontSize(3.5),
    fontWeight: '800',
    color: '#000',
    alignSelf: 'center',
    width: '85%',
    textAlign: 'center',
    marginTop: responsiveHeight(5),
  },
  divider: {
    flexDirection: 'row',
    width: '100%',
    marginTop: responsiveHeight(4),
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  dividerView: {
    height: 1,
    backgroundColor: '#8e8e8e',
    width: '25%',
    opacity: 0.5,
  },
  dividerText: {
    fontSize: responsiveFontSize(2.5),
    color: '#8e8e8e',
  },
  mobileInput: {
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    borderColor: '#8e8e8e',
    marginTop: 20,
    width: '90%',
    paddingLeft: 10,

    alignSelf: 'center',
  },
  loginButton: {
    backgroundColor: THEME_COLOR,
    width: '90%',
    height: 50,
    borderRadius: 10,
    marginTop: responsiveHeight(5),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  loginBtnTxt: {
    fontSize: responsiveFontSize(2),
    fontWeight: '600',
    color: '#fff',
  },
  underlineStyleBase: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#000',
    color: '#000',
  },

  underlineStyleHighLighted: {
    borderColor: THEME_COLOR,
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    height: 300,
    width: '100%',
  },
  modalStyle: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  changeLangBtn: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 5,
    position: 'absolute',
    top: 50,
    left: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  langIcon: {
    width: 24,
    height: 24,
  },
  languageItem: {
    width: '90%',
    alignSelf: 'center',
    height: 60,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 10,
  },
});
