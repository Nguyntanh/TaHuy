import Constants from "expo-constants";
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

// Lấy APP_URL từ expo-constants, mặc định là localhost
const APP_URL = Constants.expoConfig?.extra?.APP_URL;

function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Thông báo", "Vui lòng nhập đầy đủ thông tin");
      return;
    }

    // Kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Thông báo", "Email không hợp lệ");
      return;
    }

    try {
      const response = await fetch(`${APP_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("Response status:", response.status, "Response data:", data); // Log để debug

      if (response.ok) {
        Alert.alert("Thông báo", "Đăng nhập thành công", [
          { text: "OK", onPress: () => router.push("/(tabs)/home/tasks") },
        ]);
      } else {
        const errorMessage =
          data.message ||
          (response.status === 400
            ? "Dữ liệu không hợp lệ"
            : response.status === 401
            ? "Email hoặc mật khẩu không đúng"
            : "Đăng nhập thất bại, vui lòng thử lại");
        Alert.alert("Thông báo", errorMessage);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error logging in:", error.message, error.stack);
      } else {
        console.error("Error logging in:", error);
      }
      Alert.alert("Thông báo", "Lỗi kết nối server, vui lòng kiểm tra kết nối và thử lại");
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
        <Text style={{ fontSize: 35, color: "white", fontWeight: "bold" }}>
          Đăng nhập
        </Text>
      </View>
      <View style={{ flexDirection: "column", width: "80%", gap: 10 }}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          placeholderTextColor="#999"
          value={password}
          onChangeText={setPassword}
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
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Đăng nhập</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <Text style={{ color: "#fff" }}>Chưa có tài khoản? </Text>
          <TouchableOpacity
            onPress={() => router.push("/(tabs)/login-register/register")}
          >
            <Text style={{ color: "#1E90FF", fontWeight: "bold" }}>
              Đăng ký
            </Text>
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
    fontSize: 16,
  },
  button: {
    backgroundColor: "#1E90FF",
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    height: 45,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Login;