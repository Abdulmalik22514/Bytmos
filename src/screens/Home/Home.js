import {ActivityIndicator, Image, ScrollView, Text, View} from 'react-native'
import React, {useState} from 'react'
import {FONTS, SIZES} from '../../constants/theme'
import Header from '../../components/Header'
import icons from '../../constants/icons'
import HomeCard, {CardItems} from '../../components/HomeCard'
import Modal from 'react-native-modal'
import CustomButton from '../../components/CustomButton'
import {ACCOUNT_SCREEN, MANAGE_ORDERS_SCREEN, PACKAGE_SCREEN, RECENT_WORKS_SCREEN, SERVICE_ORDERS_SCREEN, SERVICE_SCREEN} from '../../constants/screens'
import Rating from '../../components/Performance'
import {HomeStyles as styles} from './styles'
import {useFlusDispatcher, useFlusStores} from 'react-flus'
import NotchResponsive from '../../components/NotchResponsive'
import {sleep} from '../../utils/utils'
import {useAuthApis} from '../../services/api/Auth/auth.index'
import {useMutation} from 'react-query'
import {UPDATE_USER} from '../../flus/constants/auth.const'
import {useAppApis} from '../../services/api/app/app.index'
import AwaitResponse from '../../components/AwaitResponse'

const Home = ({navigation}) => {
	const [isModalVisible, setModalVisible] = useState(false)

	const {auth} = useFlusStores()
	const dispatcher = useFlusDispatcher()

	const toggleModal = () => {
		setModalVisible(!isModalVisible)
	}

	/* handle account creation if user account type is null  */
	const {CreateAccount} = useAuthApis()
	const {initializeApp, CheckUserStatus} = useAppApis()

	/* Create user account  */
	const createAccountApi = useMutation(CreateAccount, {
		onSuccess: (res, params) => {
			toggleModal()

			if (res?.status) {
				switch (params?.account_type) {
					case 0:
						dispatcher({type: UPDATE_USER, payload: {data: {user_type: 'Personal'}}})

						navigation.navigate(ACCOUNT_SCREEN, {
							accountType: 'Personal',
						})
						break
					case 1:
						dispatcher({type: UPDATE_USER, payload: {data: {user_type: 'Business'}}})

						navigation.navigate(ACCOUNT_SCREEN, {
							accountType: 'Business',
						})

					default:
				}
			}
		},
	})

	/* Create user account  */
	const handleAccountCreation = (accountType = 0) => createAccountApi.mutate({account_type: accountType})

	const handleAction = title => {
		/* This section handle to user account tap on dashboard  */
		if (title === 'Account') {
			/* Here decide where to move the user to if the user account type is already provied */
			if (auth?.user?.user_type !== null) {
				/* check the user account type variable to determined where to send the user to  */
				switch (auth?.user?.user_type?.toLowerCase()) {
					/* goto business or company account  */
					case 'company':
						navigation.navigate(ACCOUNT_SCREEN, {
							accountType: 'Business',
						})
						break
					/* goto personal account  */
					case 'personal':
						navigation.navigate(ACCOUNT_SCREEN, {
							accountType: 'Personal',
						})
						break
					/* goto person account  */
					default:
				}
			} else {
				/* toggle user model to create new account  */

				toggleModal()
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

	/* initialize user profile data including the activity performance and account type */
	const initializeAppApi = useMutation(initializeApp, {
		onSuccess: responses => {
			const userProfileData = {}

			/* for performance analysis */
			if (responses[0]?.status) {
				userProfileData['performance'] = responses[0]?.data
			}

			/* get the user account type  */
			if (responses[1]?.status) {
				userProfileData['account'] = responses[1]?.data
			}

			dispatcher({type: UPDATE_USER, payload: {data: {profile: {...userProfileData}}}})
		},
	})

	/* Check the user account status */
	const checkAccountStatusApi = useMutation(CheckUserStatus, {
		onSuccess: res => {
			if (res?.status) {
				dispatcher({type: UPDATE_USER, payload: {data: {account: res?.data}}})

				/* initialize app  */
				initializeAppApi.mutateAsync(res?.data?.user_type.toLowerCase())
			}
		},
	})

	/* The api request loading state  */
	const isLoading = createAccountApi.isLoading

	const handleAppInitialization = async () => await checkAccountStatusApi.mutateAsync()

	return (
		<>
			<AwaitResponse api={handleAppInitialization}>
				<View style={styles.container}>
					<NotchResponsive />
					<View>
						<Header onPress={() => navigation.openDrawer()} />
					</View>

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
					<Modal onBackdropPress={toggleModal} isVisible={isModalVisible} backdropOpacity={0.7}>
						<View>
							<View style={styles.modalContent}>
								{/* display Activity indicator when creating account for user */}
								{isLoading && <ActivityIndicator size={50} />}

								{/* **Only display the options when no activity is working in the background */}
								{!isLoading && (
									<>
										<Text style={styles.modalText}>Create a</Text>
										<CustomButton title="Personal Account" style={styles.modalButton} onPress={() => handleAccountCreation(0)} />
										<Text style={{...FONTS.body4, fontSize: 22}}>OR</Text>
										<CustomButton title="Business Account" style={styles.modalButton} onPress={() => handleAccountCreation(1)} />
									</>
								)}
							</View>
						</View>
					</Modal>
				</View>
			</AwaitResponse>
		</>
	)
}

export default Home
