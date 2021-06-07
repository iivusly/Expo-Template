import * as Notifications from 'expo-notifications'
import Constants from 'expo-constants'

class NotificationHandler {
    PushToken: Notifications.ExpoPushToken | null = null

    constructor() {
        Notifications.setNotificationHandler({
            handleNotification: async () => ({
                shouldShowAlert: true,
                shouldPlaySound: true,
                shouldSetBadge: true,
            }),
        })

        if (Constants.isDevice) {
            Notifications.getExpoPushTokenAsync().then((PushToken) => {
                this.PushToken = PushToken
            })
        }
    }

    async Notify(content: Notifications.NotificationContentInput) {
        await Notifications.scheduleNotificationAsync({
            content: content,
            trigger: null,
        })
    }
}

export default NotificationHandler
