import React from 'react';
import {StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import TextHeader from '../../components/Header/TextHeader';
import Colors from '../../constants/Colors';
import {notifData} from './notifData';

const NotificationScreen = () => {
  const [currentScreen, setCurrentScreen] = React.useState('All Notifications');
  const handleSortItemPress = label => {
    setCurrentScreen(label);
  };
  const sortItems = [
    {
      label: 'All Notifications',
      onPress: () => handleSortItemPress('All Notifications'),
    },
    {
      label: 'Unread Notifications',
      onPress: () => handleSortItemPress('Unread Notifications'),
    },
    {
      label: 'Only Chats',
      onPress: () => handleSortItemPress('Only Chats'),
    },
    {
      label: 'Unread Chats',
      onPress: () => handleSortItemPress('Unread Chats'),
    },
  ];
  const _renderNotifItem = (item, index) => (
    <View
      style={[
        styles.renderItem,
        {
          backgroundColor: item.highlight ? Colors.violetLightShade : '#fff',
        },
      ]}
      key={index}>
      <View style={styles.itemLeft}>
        <View style={styles.avatar}></View>
      </View>
      <View style={styles.itemRight}>
        <Text style={styles.content}>{item.title}</Text>
        {item.description.length > 0 && (
          <Text style={styles.des}>{item.description}</Text>
        )}
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <TextHeader
        headerText={currentScreen}
        showBackArrow={false}
        showFilter={true}
        showRight={false}
        headerStyle={{
          height: 130,
          justifyContent: 'center',
        }}
        sortItems={sortItems}
        showPopup={true}
        selectedItem={currentScreen}
      />
      <View
        style={{
          flex: 1,
        }}>
        <ScrollView>
          <View
            style={{
              paddingHorizontal: 20,
              marginVertical: 8,
            }}>
            <Text style={styles.sectionTitle}>EARLIER</Text>
          </View>
          {notifData.earlier.map((item, index) => {
            return _renderNotifItem(item, index);
          })}
          <View
            style={{
              paddingHorizontal: 20,
              marginVertical: 8,
            }}>
            <Text style={styles.sectionTitle}>LAST MONTH</Text>
          </View>
          {notifData.lastMonth.map((item, index) => {
            return _renderNotifItem(item, index);
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  renderItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  itemLeft: {
    width: '20%',
    justifyContent: 'center',
  },
  itemRight: {
    width: '80%',
    justifyContent: 'center',
  },
  avatar: {
    width: 55,
    height: 55,
    backgroundColor: '#D9DBE9',
    borderRadius: 50,
  },
  content: {
    fontSize: 14,
    lineHeight: 16,
    marginBottom: 2,
    fontWeight: '700',
  },
  des: {
    fontSize: 12,
    marginVertical: 2,
  },
  date: {
    color: '#BCA4FF',
    fontSize: 12,
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '700',
  },
});
