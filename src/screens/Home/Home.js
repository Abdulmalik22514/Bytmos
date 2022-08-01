import {Alert, Image, ScrollView, Text, View} from 'react-native'
import React from 'react'
import {FONTS, SIZES} from '../../constants/theme'
import Header from '../../components/Header'
import HomeCard, {CardItems} from '../../components/HomeCard'
import {ACCOUNT_SCREEN, ACCOUNT_TYPE, MANAGE_ORDERS_SCREEN, PACKAGE_SCREEN, RECENT_WORKS_SCREEN, SERVICE_ORDERS_SCREEN, SERVICE_SCREEN} from '../../constants/screens'
import Rating from '../../components/Performance'
import {HomeStyles as styles} from './styles'
import {useFlusDispatcher, useFlusStores} from 'react-flus'
import Container from '../../components/Container'
import {useAppApis} from '../../services/api/app/app.index'
import {useMutation} from 'react-query'
import AwaitResponse from './../../components/AwaiteResponse'
import {UPDATE_USER} from '../../flus/constants/auth.const'
import {useNavigation} from '@react-navigation/native'

const Home = ({navigation}) => {
	const {auth} = useFlusStores()
	const navigator = useNavigation()

	const dispatcher = useFlusDispatcher()

	const {CheckUserStatus, initializeApp} = useAppApis()

	const checkAccountApi = useMutation(CheckUserStatus, {
		onSuccess: res => {
			if (res?.status) {
				const {has_created_account, has_verified_account} = res?.data

				if (!has_created_account) {
					Alert.alert('Account Update Required', 'Please update your account.')
					navigator(ACCOUNT_TYPE)
				}

				if (has_created_account && has_verified_account) {
					dispatcher({type: UPDATE_USER, payload: {data: {account: res?.data}}})
				}
			} else if (has_verified_account !== true) {
				console.log('has not verified yet')
			} else {
				console.log('dispatching...')
			}
		},
	})

	const handleAccountChecking = async () => await checkAccountApi.mutateAsync()

	const handleAction = title => {
		if (title === 'Account') {
			// Here, user needs to navigate to the account type selected during account creation
			if (auth?.user?.account?.user_type?.toLowerCase() === 'personal') {
				navigation.navigate(ACCOUNT_SCREEN, {accountType: 'Personal'})
			}

			if (auth?.user?.account?.user_type?.toLowerCase() === 'company') {
				navigation.navigate(ACCOUNT_SCREEN, {accountType: 'Business'})
			}
		}
		if (title === 'Packages') {
			return navigation.navigate(PACKAGE_SCREEN)
		}
		if (title === 'My Services') {
			return navigation.navigate(SERVICE_SCREEN)
		}
		if (title === 'Service Orders') {
			return navigation.navigate(SERVICE_ORDERS_SCREEN)
		}
		if (title === 'Manage Orders') {
			return navigation.navigate(MANAGE_ORDERS_SCREEN)
		}
		if (title === 'My Recent Works') {
			return navigation.navigate(RECENT_WORKS_SCREEN)
		}
	}

	return (
		<Container style={styles.container}>
			<AwaitResponse api={handleAccountChecking}>
				<Header onPress={() => navigation.toggleDrawer()} />
				<ScrollView style={{paddingHorizontal: SIZES.font10}} showsVerticalScrollIndicator={false}>
					<Image source={{uri: auth?.user?.profile_photo}} resizeMode="contain" style={styles.profilepic} />
					<Text style={styles.accountName}>
						{auth?.user?.first_name} {auth?.user?.last_name}
					</Text>

					<View style={styles.itemContainer}>
						{CardItems.map((item, index) => {
							return <HomeCard key={index} icon={item.icon} label={item.label} onPress={() => handleAction(item.label)} />
						})}
					</View>

					<View style={{paddingHorizontal: SIZES.font8}}>
						<Text style={{...FONTS.h10, marginBottom: SIZES.font1}}>Performance</Text>
						<Rating label="Client Ranking" />
						<Rating label="Service Points" />
						<Rating label="Tribality" />
						<Rating label="Tribal Presence" />
					</View>
				</ScrollView>
			</AwaitResponse>
		</Container>
	)
}

export default Home
