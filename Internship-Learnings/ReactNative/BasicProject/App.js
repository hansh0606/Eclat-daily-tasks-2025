import React from 'react';
import { Image, Pressable, StyleSheet, Text, View, FlatList } from 'react-native';

// Sample project data
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
    description: 'AI/ML-based object detection system for landmine categorization.',
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
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#f5f5f5' }}>
      {/* Profile Card */}
      <View
        style={{
          marginTop: 30,
          padding: 20,
          backgroundColor: '#ffffff',
          width: '90%',
          borderRadius: 10,
          elevation: 5, // Adds shadow for better visibility
          alignItems: 'center',
          marginBottom: 30,
        }}>
        <Image
          source={require('./src/assets/HanshveeFormalPhoto.jpg')}
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            marginBottom: 10,
          }}
        />
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Hanshvee Patil</Text>
        <Text style={{ color: '#888', marginBottom: 20 }}>hanshpatil1982@gmail.com</Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100%',
            marginBottom: 10,
          }}>
          <Pressable onPress={() => console.log('LinkedIn pressed')}>
            <Text style={{ color: '#0077b5', fontSize: 16 }}>LinkedIn</Text>
          </Pressable>
          <Pressable onPress={() => console.log('GitHub pressed')}>
            <Text style={{ color: '#333', fontSize: 16 }}>GitHub</Text>
          </Pressable>
        </View>
      </View>

      {/* Projects List */}
      <FlatList
        data={projects}
        renderItem={({ item }) => {
          return (
            <View style={{ marginBottom: 20, paddingHorizontal: 10 }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 5,
                }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                  {item.projectName}
                </Text>
                <Text style={{ fontSize: 14, color: '#888' }}>{item.technologies}</Text>
              </View>
              <Text style={{ color: '#555' }}>{item.description}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

export default App;
