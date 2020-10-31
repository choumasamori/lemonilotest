import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './app/screens/Home.js'
import { Navigation } from 'react-native-navigation';
import Activity from './app/screens/Activity.js'
import Setting from './app/screens/Setting.js'
import Account from './app/screens/Account.js'

  Navigation.registerComponent('Home', () => Home);
  Navigation.registerComponent('Activity', () => Activity);
  Navigation.registerComponent('Setting', () => Setting);
  Navigation.registerComponent('Account', () => Account);
  Navigation.setDefaultOptions({
    statusBar: {
      backgroundColor: '#4d089a'
    },
    topBar: {
      title: {
        color: 'white'
      },
      backButton: {
        color: 'white'
      },
      background: {
        color: '#4d089a'
      }
    },
    bottomTab: {
      fontSize: 14,
      selectedFontSize: 14
    }
  });
  Home.options = {
    topBar: {
      title: {
        text: 'Home'
      }
    },
    bottomTab: {
      text: 'Home'
    }
  };
  Activity.options = {
    topBar: {
      title: {
        text: 'Activity'
      }
    },
    bottomTab: {
      text: 'Activity'
    }
  };
  Setting.options = {
    topBar: {
      title: {
        text: 'Setting'
      }
    },
    bottomTab: {
      text: 'Setting'
    }
  };
  Account.options = {
    topBar: {
      title: {
        text: 'Account'
      }
    },
    bottomTab: {
      text: 'Account'
    }
  };
  Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          id: 'BOTTOM_TABS_LAYOUT',
          children: [
            {
              stack: {
                id: 'HOME_TAB',
                children: [
                  {
                    component: {
                      id: 'HOME_SCREEN',
                      name: 'Home'
                    }
                  }
                ],
                options: {
                  bottomTab: {
                    icon: require('./app/image/home.png')
                  }
                }
              }
            },
            {
              stack: {
                id: 'ACTIVITY_TAB',
                children: [
                  {
                    component: {
                      id: 'ACTIVITY_SCREEN',
                      name: 'Activity'
                    }
                  }
                ],
                options: {
                  bottomTab: {
                    icon: require('./app/image/activity.png')
                  }
                }
              }
            },
            {
              stack: {
                id: 'SETTING_TAB',
                children: [
                  {
                    component: {
                      id: 'SETTING_SCREEN',
                      name: 'Setting'
                    }
                  }
                ],
                options: {
                  bottomTab: {
                    icon: require('./app/image/setting.png')
                  }
                }
              }
            },
            {
              stack: {
                id: 'ACCOUNT_TAB',
                children: [
                  {
                    component: {
                      id: 'ACCOUNT_SCREEN',
                      name: 'Account'
                    }
                  }
                ],
                options: {
                  bottomTab: {
                    icon: require('./app/image/account.png')
                  }
                }
              }
            }
          ]
        }
      }
    });
  });
