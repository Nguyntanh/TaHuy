import { useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

function Search() {
    const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#1a1a2f",
      }}>
      {/* Fixed top header */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#242443',
          height: 150,
          paddingBottom: 20,
          paddingTop: 70,
          gap: 30,
          borderRadius: 20,
        }}>
        <TouchableOpacity
            style={{
                position: 'absolute',
                left: 35,
                top: 93,
                zIndex: 2,
            }}
            onPress={() => router.push("/(tabs)/home/tasks")}    
        >
            <Image
                source={require('../../../assets/images/Vector.png')}
                style={{
                width: 15,
                height: 15,
                }}
            />
        </TouchableOpacity>
        <TextInput
            style={{
                width: '90%',
                height: 40,
                backgroundColor: '#1a1a2f',
                paddingLeft: 40,
                paddingRight: 40,
                color: '#fff',
            }}/>
        <TouchableOpacity
            style={{
                marginLeft: -60,
            }}>
            <Image
            source={require('../../../assets/images/settings.png')}
            style={{
                width: 20,
                height: 20,
            }}
            />
        </TouchableOpacity>
        
      </View>

      {/* Main content with ScrollView for scrolling */}
      <ScrollView
        style={{ marginTop: 50 }} // Only apply styles like margin to the ScrollView itself
        contentContainerStyle={{
          alignItems: 'center',
          flexDirection: 'column',
          gap: 30,
        }}>
        <View
          style={{
            backgroundColor: '#242443',
            width: '90%',
            height: 50,
            borderRadius: 15,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            paddingLeft: 20,
            paddingRight: 20,
          }}>
          <Text
            style={{
              color: '#fff'
            }}>Previous Tasks</Text>
          <TouchableOpacity><Text style={{color: '#fff'}}>a</Text></TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: '#242443',
            width: '90%',
            height: 50,
            borderRadius: 15,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            paddingLeft: 20,
            paddingRight: 20,
          }}>
          <Text
            style={{
              color: '#fff'
            }}>Today Tasks</Text>
          <TouchableOpacity><Text style={{color: '#fff'}}>a</Text></TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: '#242443',
            width: '90%',
            height: 50,
            borderRadius: 15,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            paddingLeft: 20,
            paddingRight: 20,
          }}>
          <Text
            style={{
              color: '#fff'
            }}>Categories</Text>
          <TouchableOpacity><Text style={{color: '#fff'}}>a</Text></TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: '#242443',
            width: '90%',
            height: 50,
            borderRadius: 15,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            paddingLeft: 20,
            paddingRight: 20,
          }}>
          <Text
            style={{
              color: '#fff'
            }}>Completed Tasks</Text>
          <TouchableOpacity><Text style={{color: '#fff'}}>a</Text></TouchableOpacity>
        </View>
      </ScrollView>

      {/* Fixed bottom section */}
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20,
          marginBottom: 100,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#1a12ff',
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            height: 50,
            gap: 10,
          }}>
          <Image
            source={require('../../../assets/images/createNewTask.png')}
            style={{
              width: 20,
              height: 20,
            }}/>
          <Text
            style={{
              color: '#fff',
            }}>Create New Task</Text>
        </TouchableOpacity>
        <View
            style={{
            flexDirection: 'row',
            gap: 60,
            backgroundColor: '#242443',
            height: 80,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            }}>
            <TouchableOpacity
            style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Image
                source={require('../../../assets/images/menu.png')}
                style={{
                width: 30,
                height: 30,
                }}/>
            <Text
                style={{
                color: '#fff'
                }}>Menu</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Image
                source={require('../../../assets/images/tasks.png')}
                style={{
                width: 30,
                height: 30,
                }}/>
            <Text
                style={{
                color: '#fff'
                }}>Tasks</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Image
                source={require('../../../assets/images/calendar.png')}
                style={{
                width: 30,
                height: 30,
                }}/>
            <Text
                style={{
                color: '#fff'
                }}>Calendar</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Image
                source={require('../../../assets/images/mine.png')}
                style={{
                width: 30,
                height: 30,
                }}/>
            <Text
                style={{
                color: '#fff'
                }}>Mine</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Search;