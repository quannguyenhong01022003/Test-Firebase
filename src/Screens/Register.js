import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import { auth } from '../ultil/FirebaseConfig';


const Register = () => {
  
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const register = () => {
    if (password.length < 6) {
      ToastAndroid.show("Mật khẩu phải có ít nhất 6 ký tự", ToastAndroid.SHORT);
  
    }
    auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      ToastAndroid.show("Thành công", ToastAndroid.SHORT)
      // ...
    })
    .catch((error) => {
      ToastAndroid.show("Thất bại", ToastAndroid.SHORT)
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.textUser, {marginTop: 200}]}>
        Username <Text style={{color: 'red'}}>*</Text>
      </Text>
      <TextInput
        style={styles.textInput}
        onChangeText={email => setemail(email)}></TextInput>

      <Text style={[styles.textUser, {marginTop: 20}]}>
        Password <Text style={{color: 'red'}}>*</Text>
      </Text>
      <TextInput
        style={styles.textInput}
        secureTextEntry={true}
        onChangeText={password => setpassword(password)}></TextInput>

      <TouchableOpacity
        style={[styles.btnLogin, {backgroundColor: 'green'}]}
        onPress={register}>
        <Text style={styles.textLogin}>Register</Text>
      </TouchableOpacity>

      <Text style={[styles.remeber, {textAlign: 'center', marginTop: 15}]}>
        or continute with
      </Text>

      <View
        style={[
          styles.remeber,
          {justifyContent: 'space-between', marginTop: 20},
        ]}>
        <TouchableOpacity style={styles.imageBtnLogin}>
          <Image
            style={styles.imageBtn}
            source={require('../image/fb.png')}></Image>
          <Text style={[styles.textLogin, {color: '#667080'}]}>Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.imageBtnLogin}>
          <Image
            style={styles.imageBtn}
            source={require('../image/gg.png')}></Image>
          <Text style={[styles.textLogin, {color: '#667080'}]}>Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Poppins',
    marginStart: 10,
    marginEnd: 10,
    flexDirection: 'column',
  },
  text: {
    fontSize: 48,
    lineHeight: 72,
    color: '#050505',
    fontWeight: '700',
  },

  textWelcome: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    color: '#4E4B66',
    marginTop: 4,
    marginBottom: 40,
  },
  textUser: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
  },
  textInput: {
    padding: 10,
    borderColor: '#4E4B66',
    borderRadius: 6,
    borderWidth: 1,
    backgroundColor: 'white',
    marginTop: 10,
  },
  remeber: {
    flexDirection: 'row',
  },

  textLogin: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  btnLogin: {
    marginTop: 15,
    paddingHorizontal: 24,
    paddingVertical: 13,
    backgroundColor: '#1877F2',
    borderRadius: 6,
  },
  imageBtn: {
    width: 21,
    height: 21,
    end: 10,
  },
  imageBtnLogin: {
    flexDirection: 'row',
    backgroundColor: '#EEF1F4',
    width: 174,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
});
