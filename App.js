import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

// После публикации StudyFlow замените URL на адрес вашего GitHub Pages,
// например: https://username.github.io/studyflow-site/
const SITE_URL = 'https://ВАШ_ЛОГИН.github.io/studyflow-site/';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: SITE_URL }}
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        renderLoading={() => (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="#9b8cff" />
          </View>
        )}
        onError={(event) => console.warn('WebView loading error:', event.nativeEvent.description)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0b1020' },
  webview: { flex: 1 },
  loading: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
