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

function Register() {
  const router = useRouter();
  const [username, setUsername] = useState(""); // Sửa cú pháp useState
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Thêm state cho nhập lại mật khẩu

  const handleRegister = async () => {
    // Kiểm tra hợp lệ
    if (!username || !email || !password || !confirmPassword) {
      Alert.alert("Thông báo", "Vui lòng nhập đầy đủ thông tin");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Thông báo", "Mật khẩu và xác nhận mật khẩu không khớp");
      return;
    }

    try {
      const userData = { username, email, password };
      await AsyncStorage.setItem("user", JSON.stringify(userData));
      Alert.alert("Thông báo", "Đăng ký thành công", [
        {
          text: "OK",
          onPress: () => router.push("/(tabs)/login-register/login"), // Chuyển hướng sau khi đăng ký
        },
      ]);
    } catch (error) {
      Alert.alert("Thông báo", "Đăng ký thất bại, vui lòng thử lại sau");
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1A1A2F",
        gap: 50,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 60,
          marginRight: 30,
          marginTop: -50,
        }}
      >
        <Image
          source={require("../../../assets/images/favicon.png")}
          style={{ width: 90, height: 90 }}
        />
        <Text style={{ fontSize: 35, color: "white" }}>Đăng ký</Text>
      </View>
      <View style={{ flexDirection: "column", width: "80%", gap: 10 }}>
        <TextInput
          style={styles.input}
          placeholder="Họ và Tên"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Nhập lại mật khẩu"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
      </View>
      <View
        style={{
          flexDirection: "column",
          marginTop: -20,
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={handleRegister} // Gọi hàm đăng ký
        >
          <Text>Đăng ký</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "#fff" }}>Đã có tài khoản: </Text>
          <TouchableOpacity
            onPress={() => router.push("/(tabs)/login-register/login")}
          >
            <Text style={{ color: "#fff" }}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
          marginTop: -30,
        }}
      >
        <Text style={{ color: "#fff" }}>Tiếp tục với: </Text>
        <TouchableOpacity>
          <Image
            source={require("../../../assets/images/favicon.png")}
            style={{ width: 50, height: 50 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../../../assets/images/favicon.png")}
            style={{ width: 50, height: 50 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    height: 45,
    borderRadius: 5,
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 40,
    borderRadius: 5,
  },
});

export default Register;