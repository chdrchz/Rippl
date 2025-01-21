import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { BlueGradient, BrownGradient } from "./components/GradientBackgrounds";
import founders from '../assets/images/founders.jpeg';

interface AboutMeData {
  name: string;
  title: string;
  bio: string;
}

// Static/default data
const aboutMeData: AboutMeData = {
  name: 'Savanna Davis and Frank Blation',
  title: 'Founders',
  bio: 'Passionate about helping people find, keep, and build their communinty.',
};

export default function AboutMe() {
  return (
    <BlueGradient style={styles.blueGradient}>
      <ScrollView contentContainerStyle={styles.container}>
        <BrownGradient style={styles.brownGradient}>
          <View style={styles.contentWrapper}>
            <View style={styles.imageWrapper}>
              <Image
                source={founders}
                style={styles.image}
              />
            </View>
            <View style={styles.textWrapper}>
              <Text style={styles.title}>{aboutMeData.title}</Text>
              <Text style={styles.name}>{aboutMeData.name}</Text>
              <Text style={styles.bio}>{aboutMeData.bio}</Text>

              {/* Added the new sections */}
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Our Mission</Text>
                <Text style={styles.sectionText}>
                  To build a community where people can explore their hobbies, find like-minded individuals, and create meaningful connections.
                </Text>
              </View>

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Features</Text>
                <Text style={styles.sectionText}>
                  - Swipe matching to connect with people sharing your interests{'\n'}
                  - Discover classes and events tailored to your hobbies{'\n'}
                  - Personalized feeds to stay updated on your network
                </Text>
              </View>

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Why Choose Us?</Text>
                <Text style={styles.sectionText}>
                  We go beyond just connecting people. Hobby Hop helps you dive deep into your interests while fostering a sense of belonging in a community that truly resonates with your passions.
                </Text>
              </View>
            </View>
          </View>
        </BrownGradient>
      </ScrollView>
    </BlueGradient>
  );
}

const styles = StyleSheet.create({
  blueGradient: {
    minHeight: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  brownGradient: {
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    width: '100%',
    padding: 16,
  },
  contentWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageWrapper: {
    width: 500,
    height: 500,
    marginRight: 16,
  },
  image: {
    width: '50vh',
    height: '50vh',
    borderRadius: 60,
    resizeMode: 'cover',
  },
  textWrapper: {
    flex: 1,
  },
  title: {
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: '600',
    color: '#3b82f6',
  },
  name: {
    marginTop: 8,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  bio: {
    marginTop: 16,
    fontSize: 16,
    color: '#4b5563',
  },
  section: {
    marginTop: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  sectionText: {
    marginTop: 8,
    fontSize: 16,
    color: '#4b5563',
  },
});
