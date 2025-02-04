import React from 'react';
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
    projectName: 'Landmine Type Detection',
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
    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#87cefa'}}>
      {/* Profile Card */}
      <View
        style={{
          marginTop: 30,
          padding: 20,
          backgroundColor: '#ffffff',
          width: '90%',
          borderRadius: 10,
          elevation: 20, // Adds shadow for better visibility
          alignItems: 'center',
          marginBottom: 30,
        }}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>Hanshvee Patil</Text>
        <Image
          source={require('./src/assets/HanshveeFormalPhoto.jpg')}
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            marginBottom: 10,
            elevation: 50,
            shadowColor: '#0000cd',
            shadowOpacity: 0.3, 
            shadowRadius: 30,
          }}
        />
        <Text style={{color: '#888', marginBottom: 20}}>
          hanshpatil1982@gmail.com
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100%',
            marginBottom: 10,
          }}>
          <View
            style={{display: 'flex', flexDirection: 'row', alignContent: ''}}>
            <Image
              source={require('./src/assets/linkedIn.png')}
              style={{height: 30, width: 30}}></Image>

            <Text
              style={{color: '#333', fontSize: 16}}
              onPress={() =>
                Linking.openURL(
                  'https://www.linkedin.com/in/hanshvee-patil-b5765a28a',
                )
              }>
              LinkedIn
            </Text>
          </View>

          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Image
              source={require('./src/assets/github.png')}
              style={{height: 30, width: 30}}></Image>
            <Text
              style={{color: '#333', fontSize: 16}}
              onPress={() => Linking.openURL('https://github.com/hansh0606')}>
              GitHub
            </Text>
          </View>
        </View>
      </View>

      {/* Projects List */}

      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#FFFFFF',
          marginBottom: 20,
        }}>
        Projects
      </Text>
      <FlatList
        data={projects}
        renderItem={({item}) => {
          return (
            <View
              style={{
                marginBottom: 20,
                paddingHorizontal: 10,
                backgroundColor: '#ffffff',
                borderRadius: 10,
                paddingTop: 10,
                paddingBottom: 10,
                elevation: 5,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 5,
                  backgroundColor: '#ffffff',
                }}>
                <Text
                  style={{fontSize: 18, fontWeight: 'bold'}}
                  onPress={() => Linking.openURL(item.link)}>
                  {item.projectName}
                </Text>
                <Text style={{fontSize: 14, color: '#888'}}>
                  {item.technologies}
                </Text>
              </View>
              <Text style={{color: '#555'}}>{item.description}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

export default App;
