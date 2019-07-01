import React from 'react'
import { Platform } from 'react-native'
import LoadingScreen from '../screens/Loading'
import LoginScreen from '../screens/Login'
import AuthorizationScreen from '../screens/Authorization'
import RegisterScreen from '../screens/Register'
import VerbScreen from '../screens/Verb'
import VerbTensesScreen from '../screens/VerbTenses'
import TestingScreen from '../screens/Testing'
import RulesScreen from '../screens/Rules'
import { DEEP_BLUE, WHITE } from '../../constants'
import {
    createBottomTabNavigator,
    createMaterialTopTabNavigator,
    createAppContainer,
    createStackNavigator,
    createSwitchNavigator,
    /*NavigationScreenProps,
    NavigationTransitionProps,
    StackViewTransitionConfigs,
    TransitionConfig*/
} from 'react-navigation'
import Icon from 'react-native-vector-icons/Feather'

const AuthorizationStack = createAppContainer(createStackNavigator(
    {
        AuthorizationScreen: AuthorizationScreen,
    },
    {
        headerMode: 'none',
        initialRouteName: 'AuthorizationScreen'

    }
))

const RegisterStack = createAppContainer(createStackNavigator(
    {
        RegisterScreen: RegisterScreen,
    },
    {
        headerMode: 'none',
        initialRouteName: 'RegisterScreen'

    }
))

const LoginStack = createAppContainer(createStackNavigator(
    {
        LoginScreen: {
            screen: LoginScreen,
            navigationOptions: {
                header: null,
            }
        },
        AuthorizationStack: {
            screen: AuthorizationStack,
            navigationOptions: {
                title: 'Авторизация',
            }
        },
        RegisterStack: {
            screen: RegisterStack,
            navigationOptions: {
                title: 'Регистрация',
            }
        }
    },
    {
        initialRouteName: 'LoginScreen',
        defaultNavigationOptions: {
            headerTintColor: DEEP_BLUE,
            headerTitleStyle: {
                fontWeight: 'normal',
            },
            headerStyle: {
                backgroundColor: 'rgba(18, 200, 242, 0.05)',
                shadowOpacity: 0,
                shadowOffset: {
                    height: 0
                },
                shadowRadius: 0,
                borderBottomWidth: 0,
                elevation: 0
            }
        },

    }
))

const HomeNavigator = createMaterialTopTabNavigator(
    {
        VerbScreen1: {
            screen: VerbScreen,
            navigationOptions: {
                title: 'Глаголы',
            }
        },
        VerbScreen2: {
            screen: VerbScreen,
            navigationOptions: {
                title: 'Мои глаголы',
            }
        },
    },
    {
        initialRouteName: 'VerbScreen1',
        tabBarOptions: {
            labelStyle: {
                color: 'rgb(238,248,250)',
                fontSize: 14,
                fontWeight: "bold",
            },
            style: {
                backgroundColor: DEEP_BLUE,
            },
            indicatorStyle: {
                backgroundColor: 'rgb(238,248,250)'
            }
        },
        backBehavior: 'none',
        swipeEnabled: true,
        animationEnabled: true

    }
)

const HomeStack = createAppContainer(createStackNavigator(
    {
        HomeNavigator: {
            screen: HomeNavigator,
            navigationOptions: {
                title: 'Глаголы',
                headerStyle: {
                    backgroundColor: DEEP_BLUE,
                    shadowOpacity: 0,
                    shadowOffset: {
                        height: 0
                    },
                    shadowRadius: 0,
                    borderBottomWidth: 0,
                    elevation: 0
                }
            },
        },
        VerbTensesScreen: {
            screen: VerbTensesScreen
        }
    },
    {
        initialRouteName: 'HomeNavigator',
        defaultNavigationOptions: {
            headerTintColor: 'rgb(238,248,250)',
            headerTitleStyle: {
                fontWeight: 'normal',
            },
            headerStyle: {
                backgroundColor: DEEP_BLUE,
            }
        },

    }
))

const TestingStack = createAppContainer(createStackNavigator(
    {
        TestingScreen: {
            screen: TestingScreen,
            navigationOptions: {
                title: 'Тесты',
            },
        }
    },
    {
        initialRouteName: 'TestingScreen',
        defaultNavigationOptions: {
            headerTintColor: 'rgb(238,248,250)',
            headerTitleStyle: {
                fontWeight: 'normal',
            },
            headerStyle: {
                backgroundColor: DEEP_BLUE,
            }
        },

    }
))

const RulesStack = createAppContainer(createStackNavigator(
    {
        RegulationsScreen: {
            screen: RulesScreen,
            navigationOptions: {
                title: 'Правила',
            },
        }
    },
    {
        initialRouteName: 'RegulationsScreen',
        defaultNavigationOptions: {
            headerTintColor: 'rgb(238,248,250)',
            headerTitleStyle: {
                fontWeight: 'normal',
            },
            headerStyle: {
                backgroundColor: DEEP_BLUE,
            }
        },
    }
))

const MainNavigator = createBottomTabNavigator(
    {
        'Глаголы': {
            screen: HomeStack,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => <Icon name='book' size={25} color={tintColor} />
            },
        },
        'Правила': {
            screen: RulesStack,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => <Icon name='clock' size={25} color={tintColor} />
            },
        },
        'Тесты': {
            screen: TestingStack,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => <Icon name='edit' size={25} color={tintColor} />
            },
        }
    },
    {
        initialRouteName: 'Глаголы',
        tabBarOptions: {
            activeTintColor: DEEP_BLUE,
            inactiveTintColor: 'rgba(3,60,103, 0.5)',
            labelStyle: {
                fontWeight: "bold",
            },
            style: {
                backgroundColor: WHITE,
            },
        },
        backBehavior: 'none',

    }
)

const Navigator = createAppContainer(createSwitchNavigator(
    {
        LoadingScreen: LoadingScreen,
        LoginStack: LoginStack,
        MainNavigator: MainNavigator
    }
))

export default Navigator


