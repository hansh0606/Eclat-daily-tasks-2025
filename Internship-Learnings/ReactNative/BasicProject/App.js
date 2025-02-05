import React from 'react';
import style from './styles.js'
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList,
  Linking,
} from 'react-native';

// Sample project data
const projects = [
  {
    id: '1',
    projectName: 'InQgen',
    description: 'A platform that generates interview questions from resumes.',
    technologies: 'React.js, PyPDF2, OpenAI',
    link: 'https://github.com/hansh0606/InQueGen',
  },
  {
    id: '2',
    projectName: 'Landmine Types',
    description:
      'AI/ML-based object detection system for landmine categorization.',
    technologies: 'YOLO, AI, Object Detection',
    link: 'https://github.com/hansh0606/Landmine_type_Detection',
  },
  {
    id: '3',
    projectName: 'Sports Central',
    description:
      'A Spring Boot Java application with CRUD functionality for efficient sports event management.',
    technologies: 'Spring Boot, Hibernate, React, MySQL',
    link: 'https://github.com/hansh0606/SportsCentral',
  },
  {
    id: '4',
    projectName: 'KabaddiStrive',
    description:
      'A PostgreSQL-based console application for Kabaddi league management, handling courts, teams, matches, and players.',
    technologies: 'PostgreSQL',
    link: 'https://github.com/hansh0606/KabaddiStrive',
  },
  {
    id: '5',
    projectName: 'Boxico',
    description:
      'A platform connecting boxers with trainers for personalized training experiences.',
    technologies: 'React.js, Node.js, MongoDB',
    link: 'https://github.com/hansh0606/Boxico',
  },
];

function App() {
  return (
    <View style={style.Main_container}>
      {/* Profile Card */}
      <View
        style={style.profileCard}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>Hanshvee Patil</Text>
        <Image
          source={require('./src/assets/HanshveeFormalPhoto.jpg')}
          style={style.profileImage}
        />
        <Text
          style={style.gmail}
          onPress={() => Linking.openURL('mailto:hanshpatil1982@gmail.com')}>
          hanshpatil1982@gmail.com
        </Text>

        <View
          style={style.MainContactView}>
          <View
            style={style.contactView}>
            <Image
              source={require('./src/assets/linkedIn.png')}
              style={style.contactImage}></Image>

            <Text
              style={style.contactText}
              onPress={() =>
                Linking.openURL(
                  'https://www.linkedin.com/in/hanshvee-patil-b5765a28a',
                )
              }>
              LinkedIn
            </Text>
          </View>

          <View style={style.contactView}>
            <Image
              source={require('./src/assets/github.png')}
              style={style.contactImage}></Image>
            <Text
              style={style.contactText}
              onPress={() => Linking.openURL('https://github.com/hansh0606')}>
              GitHub
            </Text>
          </View>
        </View>

      
      {/* Projects List */}

      <Text
        style={style.projectHeading}>
        Projects
      </Text>
      <FlatList
        data={projects}
        renderItem={({item}) => {
          return (
            <View
              style={style.flatlistView}>
              <View
                style={style.textView}>
                <Text
                  style={{fontSize: 18, fontWeight: 'bold'}}
                  onPress={() => Linking.openURL(item.link)}>
                  {item.projectName}
                </Text>
                <Text style={style.textStyle}>
                  {item.technologies}
                </Text>
              </View>
              <Text style={style.descriptionText}>
                {item.description}
              </Text>
            </View>
          );
        }}
      />
      </View>
    </View>
  );
}

export default App;
