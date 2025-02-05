import {StyleSheet} from 'react-native';

const style = {
  Main_container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#87cefa',
  },

  profileCard: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#ffffff',
    // width: '90%',//this wil restrict the flatlist to scroll
    marginLeft:10,
    marginRight:10,
    borderRadius: 10,
    elevation: 20, // Adds shadow for better visibility
    alignItems: 'center',
    marginBottom: 30,
    display:"flex"
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    elevation: 50,
    shadowColor: '#0000cd',
    shadowOpacity: 0.3,
    shadowRadius: 30,
  },

  gmail: {
    color: '#888',
    marginBottom: 20,
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
    height: 30,
    width: 30,
  },

  contactText: {
    color: '#333',
    fontSize: 16,
  },

  projectHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    backgroundColor: '#87cefa',
    padding: 8,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 7,
    elevation:5
  },

  flatlistView: {
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    elevation: 5,
    borderWidth:1
    
  },

  textView: {
    flexDirection: 'row',
    flexWrap:"wrap",
    justifyContent: 'space-between',
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#ffffff',
  },

  textStyle: {fontSize: 14, color: '#888'},
  descriptionText:{
    color: '#555', marginLeft: 10, marginRight: 10
  }
};

export default style;
