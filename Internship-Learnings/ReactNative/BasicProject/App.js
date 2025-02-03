import React from 'react';
import {FlatList, Image, ScrollView, Text, View} from 'react-native';

const demoList = [
  {id: 1, name: 'Hanshvee'},
  {id: 2, name: 'Hriday'},
  {id: 3, name: 'Heet'},
];
const CustomComponent = () => {
  return (
    <View>
      <Text>Custom Component</Text>
    </View>
  );
};
const getFullName = (Fname, MName, SName) => {
  return Fname + ' ' + MName + ' ' + SName;
};

function App() {
  return (
    <ScrollView>
      <View>
        <Text>
          Text Component : {getFullName('Hanshvee', 'Aditya', 'Patil')}
        </Text>
        <Text>{getFullName('Hriday', 'Aditya', 'Patil')}</Text>
        <Text style={{padding: 20}}>
          About Me: I'm Hanshvee Patil IT student from Dharmsinh Desai
          University. With a deep passion for coding and design, I am a tech
          enthusiast eager to make my mark in the digital realm. Beyond IT, my
          talents extend to being a national-level boxer and an adventurous
          mountaineer and trekker. My creative mindset merges with analytical
          prowess to craft captivating and user-friendly interfaces, with the
          goal of revolutionizing user experiences. Through my sportsmanship and
          honed leadership skills, I aspire to leave a lasting impact on the IT
          landscape, shaping a future where technology empowers and enhances
          lives. Keep an eye on me, an IT prodigy and intrepid adventurer,
          destined to achieve remarkable feats and inspire those around me.
        </Text>
        <Image
          source={require('./src/assets/BabyHanshvee.jpg')}
          style={{width: 200, height: 200}}></Image>
        <FlatList
          data={demoList}
          renderItem={({item}) => (
            <Text>
              {item.id} {item.name}
            </Text>
          )}
          keyExtractor={item => item.id.toString()}
          style={{
            marginTop: 20,
            backgroundColor: '#1BFC06',
          }}></FlatList>
        <CustomComponent />
      </View>

      <View>
        <Text>
          Text Component : {getFullName('Hanshvee', 'Aditya', 'Patil')}
        </Text>
        <Text>{getFullName('Hriday', 'Aditya', 'Patil')}</Text>
        <Text style={{padding: 20}}>
          About Me: I'm Hanshvee Patil IT student from Dharmsinh Desai
          University. With a deep passion for coding and design, I am a tech
          enthusiast eager to make my mark in the digital realm. Beyond IT, my
          talents extend to being a national-level boxer and an adventurous
          mountaineer and trekker. My creative mindset merges with analytical
          prowess to craft captivating and user-friendly interfaces, with the
          goal of revolutionizing user experiences. Through my sportsmanship and
          honed leadership skills, I aspire to leave a lasting impact on the IT
          landscape, shaping a future where technology empowers and enhances
          lives. Keep an eye on me, an IT prodigy and intrepid adventurer,
          destined to achieve remarkable feats and inspire those around me.
        </Text>
        <Image
          source={require('./src/assets/BabyHanshvee.jpg')}
          style={{width: 200, height: 200}}></Image>
        <FlatList
          data={demoList}
          renderItem={({item}) => (
            <Text>
              {item.id} {item.name}
            </Text>
          )}
          keyExtractor={item => item.id.toString()}
          style={{
            marginTop: 20,
            backgroundColor: '#1BFC06',
          }}></FlatList>
        <CustomComponent />
      </View>
    </ScrollView>
  );
}

export default App;
