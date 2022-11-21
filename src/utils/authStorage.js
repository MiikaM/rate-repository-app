import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
    constructor(namespace = 'auth') {
        this.namespace = namespace;
    }

    async getAccessToken() {
        // Get the access token for the storage
        const rawAccessToken = await AsyncStorage.getItem(
            `${this.namespace}:accesstoken`
        );

        return rawAccessToken
    }

    async setAccessToken(accessToken) {
        // Add the access token to the storage
        await AsyncStorage.setItem(
            `${this.namespace}:accesstoken`,
            accessToken
        );
    }

    async  removeAccessToken() {
        // Remove the access token from the storage
        await AsyncStorage.removeItem(`${this.namespace}:accesstoken`);
    }
}

export default AuthStorage;