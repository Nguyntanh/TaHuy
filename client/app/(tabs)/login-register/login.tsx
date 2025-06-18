import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Alert,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

function Login() {
  const router = useRouter();
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!emailOrPhone || !password) {
      Alert.alert("Thông báo", "Vui lòng nhập đầy đủ thông tin");
      return;
    }

    try {
      const storedUser = await AsyncStorage.getItem("user");
      if (storedUser) {
        const userData = JSON.parse(storedUser);
        if (
          (userData.email === emailOrPhone || userData.username === emailOrPhone) &&
          userData.password === password
        ) {
          Alert.alert("Thông báo", "Đăng nhập thành công", [
            { text: "OK", onPress: () => router.push("/(tabs)/home/tasks") },
          ]);
        } else {
          Alert.alert("Thông báo", "Email/Số điện thoại hoặc mật khẩu không đúng");
        }
      } else {
        Alert.alert("Thông báo", "Không tìm thấy tài khoản. Vui lòng đăng ký.");
      }
    } catch (error) {
      Alert.alert("Thông báo", "Đăng nhập thất bại, vui lòng thử lại sau");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../../assets/images/favicon.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Đăng nhập</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={emailOrPhone}
          onChangeText={setEmailOrPhone}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text>Đăng nhập</Text>
        </TouchableOpacity>
        <View style={styles.registerLink}>
          <Text style={styles.text}>Chưa có tài khoản: </Text>
          <TouchableOpacity
            onPress={() => router.push("/(tabs)/login-register/register")}
          >
            <Text style={styles.text}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.socialLogin}>
        <Text style={styles.text}>Đăng nhập bằng: </Text>
        <TouchableOpacity>
          <Image
            source={require("../../../assets/images/favicon.png")}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../../../assets/images/favicon.png")}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1A1A2F",
    gap: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 60,
    marginRight: 30,
    marginTop: -50,
  },
  logo: {
    width: 90,
    height: 90,
  },
  title: {
    fontSize: 35,
    color: "white",
  },
  inputContainer: {
    flexDirection: "column",
    width: "80%",
    gap: 10,
  },
  input: {
    backgroundColor: "#fff",
    height: 45, // Tăng chiều cao để nhất quán với Register
    borderRadius: 5,
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: "column",
    marginTop: -20,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 40,
    borderRadius: 5,
  },
  registerLink: {
    flexDirection: "row",
  },
  socialLogin: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginTop: -30,
  },
  text: {
    color: "#fff",
  },
  socialIcon: {
    width: 50,
    height: 50,
  },
});

export default Login;