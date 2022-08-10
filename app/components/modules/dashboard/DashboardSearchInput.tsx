import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import TextInput from '../../base/form/BaseTextInput/BaseTextInput';
import BasePage from '../../base/partials/BasePage';

const DashboardSearchInput = () => {
  const [search, setSearch] = useState('');
  const searching = (text: string) => setSearch(text);
  return (
    <BasePage style={styles.container} backgroundColor={false}>
      <TextInput
        style={styles.searchBox}
        placeholder={'Hi Hassen, Find Parking?'}
        onChangeText={searching}
        value={search}
      />
    </BasePage>
  );
};

export default DashboardSearchInput;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 120,
    // left: 10,
    width: '100%',
  },
  // textInputStyle: {
  //   borderRadius: 10,
  //   margin: 10,
  //   color: '#000',
  //   borderColor: '#666',
  //   backgroundColor: '#FFF',
  //   borderWidth: 1,
  //   height: 45,
  //   paddingHorizontal: 10,
  //   fontSize: 18,
  // },
  textInputStyle: {
    height: 54,
    margin: 0,
    borderRadius: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 15,
    borderWidth: 1,
    borderColor: '#DDD',
    fontSize: 18,
  },
  searchBox: {
    height: 54,
    // margin: 0,
    borderRadius: 0,
    // paddingTop: 0,
    // paddingBottom: 0,
    // paddingLeft: 20,
    // paddingRight: 20,
    width: '90%',
    // marginTop: 0,
    marginLeft: 20, //TODO NEED better solution here
    // marginRight: 0,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 15,
    borderWidth: 1,
    borderColor: '#DDD',
    fontSize: 18,

    // position: 'absolute',
    // marginTop: Platform.OS === 'ios' ? 40 : 20,
    // flexDirection: 'row',
    // backgroundColor: '#fff',
    // width: '90%',
    // alignSelf: 'center',
    // borderRadius: 5,
    // padding: 10,
    // shadowColor: '#ccc',
    // shadowOffset: {width: 0, height: 3},
    // shadowOpacity: 0.5,
    // shadowRadius: 5,
    // elevation: 10,
  },
});
