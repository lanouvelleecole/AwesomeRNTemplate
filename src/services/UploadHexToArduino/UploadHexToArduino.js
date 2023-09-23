

// Import module
import { Linking, Platform } from 'react-native';

/**
 * 
 * Function that writes hex code to Arduino board over Serial USB
 * via a Android app called ArduinoGPTHex
 *  
 */
export async function UploadHexToArduino(hexString) {


    if (!hexString) {
        return false;
    }

    try {
        const currentPlatform = Platform.OS;

        if (currentPlatform == 'android') {
            await Linking.openURL(`maslow://arduinogpt.com?hex_str=${hexString}`);

            return true;
        } else {
            console.error('The UploadHexToArduino function is available on Android only ;-)');
        }

    } catch (error) {
        console.error(`Failed to install hex on Arduino UNO: ${error}`);
    }

    return false;
}

