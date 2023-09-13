

// Importing necessary libraries and components
import React, { useRef, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Defining the SwitchPages component
// This component accepts showUI and setShowUI to control the switch between iframe and UIComponent
// iframeURL is the url of the iframe to load
// homeURL is the startUp url of the iframe
// UIComponent is the React Native Component to display when switched
// showAddressBar controls the visibility of the address bar
const SwitchPages = ({ showUI, setShowUI, iframeURL, setIframeURL, homeURL, UIComponent, showAddressBar, fontFamily }) => {
    // Initializing WebView Reference for calling instance methods
    const webviewRef = useRef(null);

    // Initializing state for address bar
    const [address, setAddress] = useState(iframeURL);

    // Defining function to navigate back in the WebView history
    const goBack = () => webviewRef?.current?.goBack();

    // Defining function to navigate forward in the WebView history
    const goForward = () => webviewRef?.current?.goForward();

    // Defining function to reload the current WebView Page
    const reload = () => webviewRef?.current?.reload();

    // Defining function to navigate to the address in the address bar
    const goToAddress = () => {
        setIframeURL(null);
        setTimeout(() => setIframeURL(address), 100);
    }

    // Defining function to navigate to the Home URL in WebView
    const home = () => {
        setIframeURL(null);
        setTimeout(() => setIframeURL(homeURL), 100);

    }

    const onNavigationStateChange = (navState) => {
        // Update the address with the new URL when navigation state changes
        setAddress(navState.url);
    };

    // Rendering component
    // Depending upon the state of showUI, either the WebView or the UIComponent will be displayed
    // The navbar contains buttons for various actions: going back, going forward, reloading, switching and going to address in the address bar
    return (
        <View style={styles.container}>
            <View style={styles.bar}>
                {/* Home button */}
                {homeURL && <TouchableOpacity onPress={home} style={!showUI ? styles.visible : styles.invisible}>
                    <Icon name='home' size={20} />
                </TouchableOpacity>}

                {/* Back button */}
                <TouchableOpacity onPress={goBack} style={!showUI ? styles.visible : styles.invisible}>
                    <Icon name='arrow-back' size={20} />
                </TouchableOpacity>

                {/* Forward button */}
                <TouchableOpacity onPress={goForward} style={!showUI ? styles.visible : styles.invisible}>
                    <Icon name='arrow-forward' size={20} />
                </TouchableOpacity>

                {/* Reload button */}
                <TouchableOpacity onPress={reload} style={!showUI ? styles.visible : styles.invisible}>
                    <Icon name='refresh' size={20} />
                </TouchableOpacity>

                {/* Address bar */}
                {!showUI && showAddressBar &&
                    <TextInput
                        style={[styles.addressBar, { fontFamily: fontFamily }]}
                        value={address}
                        onChangeText={setAddress}
                        onSubmitEditing={goToAddress}
                    />
                }

                {/* Switch button to toggle between WebView and UIComponent displayed */}
                <TouchableOpacity onPress={() => setShowUI(!showUI)}>
                    <Icon name='menu' size={20} />
                </TouchableOpacity>
            </View>

            {/* Display WebView or custom UIComponent based on showUI value */}
            <View style={styles.bodyContainer}>
                {iframeURL && <WebView
                    onNavigationStateChange={onNavigationStateChange}
                    source={{ uri: iframeURL }}
                    ref={webviewRef} />}
                {showUI && <View style={styles.uiContainer}><UIComponent /></View>}
            </View>
        </View>
    );
}

// Defining styles for the SwitchPages component
const styles = StyleSheet.create({
    container: { flex: 1 },
    bodyContainer: { "position": "relative", flex: 1 },
    uiContainer: { "position": "absolute", flex: 1, top: 0, left: 0, bottom: 0, right: 0 },
    bar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 50 },
    visible: { opacity: 1, },
    invisible: { opacity: 0 },
    addressBar: { flex: 1 }
});

// Exporting the SwitchPages component
export { SwitchPages };

