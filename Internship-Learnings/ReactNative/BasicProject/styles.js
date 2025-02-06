import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

// Set a breakpoint for tablets (e.g., screens wider than 600px)
const isTablet = width >= 600;

const style = {
  Main_container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#87cefa',
    padding: isTablet ? 20 : 10,  // Add more padding for tablet screens
  },

  profileCard: {
    marginTop: isTablet ? 40 : 30,  // Larger margin on tablet
    padding: isTablet ? 30 : 20,  // Larger padding on tablet
    backgroundColor: '#ffffff',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    elevation: 20, 
    alignItems: 'center',
    marginBottom: 30,
    display: 'flex',
    width: isTablet ? '80%' : '90%',  // Restrict width for tablet
  },

  profileImage: {
    width: isTablet ? 150 : 120,  // Larger profile image on tablet
    height: isTablet ? 150 : 120,
    borderRadius: isTablet ? 75 : 60,
    marginBottom: 10,
    elevation: 50,
    shadowColor: '#0000cd',
    shadowOpacity: 0.3,
    shadowRadius: 30,
  },

  gmail: {
    color: '#888',
    marginBottom: 20,
    fontSize: isTablet ? 18 : 14,  // Larger text on tablet
  },

  MainContactView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 10,
  },

  contactView: {
    display: 'flex',
    flexDirection: 'row',
  },

  contactImage: {
    height: isTablet ? 40 : 30,  // Larger contact image on tablet
    width: isTablet ? 40 : 30,
  },

  contactText: {
    color: '#333',
    fontSize: isTablet ? 18 : 16,  // Larger text on tablet
  },

  projectHeading: {
    fontSize: isTablet ? 24 : 20,  // Larger heading on tablet
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    backgroundColor: '#87cefa',
    padding: 8,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 7,
    elevation: 5,
  },

  flatlistView: {
    marginBottom: 20,
    paddingHorizontal: isTablet ? 20 : 10,  // More padding on tablet
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    elevation: 5,
    borderWidth: 1,
  },

  textView: {
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: 'space-between',
    marginBottom: 5,
    marginLeft: isTablet ? 20 : 10,  // Larger margin on tablet
    marginRight: isTablet ? 20 : 10, // Larger margin on tablet
    backgroundColor: '#ffffff',
  },

  textStyle: {
    fontSize: isTablet ? 18 : 14,  // Larger text on tablet
    color: '#888',
  },

  descriptionText: {
    color: '#555',
    marginLeft: isTablet ? 20 : 10,  // Larger margin on tablet
    marginRight: isTablet ? 20 : 10, // Larger margin on tablet
  }
};

export default style;
