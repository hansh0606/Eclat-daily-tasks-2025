import React from 'react';
import {Image, Pressable, StyleSheet, Text, View, FlatList} from 'react-native';
//import { FlatList } from "react-native-web";

const projects = [
  {
    id: '1',
    projectName: 'InQgen',
    description: 'A platform that generates interview questions from resumes.',
    technologies: 'React.js, PyPDF2, OpenAI',
  },
  {
    id: '2',
    projectName: 'Landmine Detection',
    description:
      'AI/ML-based object detection system for landmine categorization.',
    technologies: 'YOLO, AI, Object Detection',
  },
  {
    id: '3',
    projectName: 'Sports Central',
    description:
      'A Spring Boot Java application with CRUD functionality for efficient sports event management.',
    technologies: 'Spring Boot, Hibernate, React, MySQL',
  },
  {
    id: '4',
    projectName: 'KabaddiStrive',
    description:
      'A PostgreSQL-based console application for Kabaddi league management, handling courts, teams, matches, and players.',
    technologies: 'PostgreSQL',
  },
  {
    id: '5',
    projectName: 'Boxico',
    description:
      'A platform connecting boxers with trainers for personalized training experiences.',
    technologies: 'React.js, Node.js, MongoDB',
  },
];

function App() {
  return (
    <>
      <View style={{display: 'flex', alignItems: 'center'}}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Hanshvee Patil</Text>
      </View>
      <View style={{display: 'flex', alignItems: 'center'}}>
        <Image
          source={require('./src/assets/HanshveeFormalPhoto.jpg')}
          style={{
            width: 100,
            height: 100,
            borderRadius: 100,
          }}></Image>
        <Text>hanshpatil1982@gmail.com</Text>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text>LinkedIn</Text>
        <Text>GitHub</Text>
        <Text>hanshpatil1982@gmail.com</Text>
        <Text></Text>
      </View>
      <View style={{padding: 20}}>
        <FlatList
          data={projects}
          renderItem={({item}) => {
            return (
              <View style={{marginBottom: 20}}>
                <View style={{display: 'flex', flexDirection: 'row',justifyContent:'space-between'}}>
                  <Text> {item.projectName}</Text>
                  <Text>{item.technologies}</Text>
                </View>

                <Text>{item.description}</Text>
              </View>
            );
          }}></FlatList>
      </View>
    </>
  );
}

export default App;
