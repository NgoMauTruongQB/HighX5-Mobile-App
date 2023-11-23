import { StyleSheet, Text, View, Image, ImageBackground, FlatList } from 'react-native'
import React, { useState } from 'react'
import colors from '../../constants/colors'
import EventItem from '../../components/EventItem'

export default function Profile() {
    const [events, setEvents] = useState([
        {
            id: 6,
            name: 'Thách thức Data Crunch',
            slogan: 'Crack the Data Code',
            description: 'Gọi tất cả những người đam mê dữ liệu! Tham gia Thách thức Data Crunch và thể hiện kỹ năng phân tích dữ liệu của bạn. Phân tích bộ dữ liệu thực tế và giải mã để khám phá thông tin quý báu.',
            location: 'Phòng Lab Dữ liệu',
            status: 1,
            dateStart: '08/11/2023',
            image: 'https://i.scdn.co/image/ab6765630000ba8a772ab3432a4b798501cd9d21'
        },
        {
            id: 7,
            name: 'InnoHackathon 2023',
            slogan: 'Innovate, Code, Win!',
            description: 'InnoHackathon là thách thức đổi mới cuối cùng. Tập hợp đội của bạn, nảy ra những giải pháp sáng tạo và lập trình đường đến chiến thắng. Đến lúc biến những ý tưởng đổi mới của bạn thành hiện thực!',
            location: 'Trung tâm Đổi mới',
            status: 0,
            dateStart: '20/12/2023',
            image: 'https://eelisa.eu/wp-content/uploads/2022/09/Colores-corporativos-Post-de-Instagram.png'
        },
        {
            id: 8,
            name: 'Hội nghị FutureTech',
            slogan: 'Shaping Tomorrow’s Tech',
            description: 'Tham gia cùng các nhà lãnh đạo ngành, nhà nghiên cứu và người hâm mộ công nghệ tại Hội nghị FutureTech. Khám phá những công nghệ đột phá, thảo luận về xu hướng tương lai và tham gia vào việc định hình bức tranh công nghệ của ngày mai.',
            location: 'Trung tâm Hội nghị Công nghệ',
            status: 2,
            dateStart: '02/03/2023',
            image: 'https://play-lh.googleusercontent.com/bGGbcS97bKY8qrHit_NW8pNr2zvgfoycMm4fL7jB8SmUToV8uPQ6pWwOx6JQmIgcnRnS'
        }
    ])
    return (
        <View style={styles.container}>
            <ImageBackground 
                source={require('../../assets/images/bg_haikei.png')}
                style={styles.top}
            >
                <View style={styles.content}>
                    <Image source={require('../../assets/icons/ui-elements/user.png')} style={styles.avatar}/>
                    <Text style={styles.username}>@03nmt</Text>
                    <Text style={styles.name}>Ngo Mau Truong</Text>
                </View>
                <View style={styles.infor}>
                    <Text style={{fontSize: 14, fontWeight: '600', marginTop: 16}}>02 <Text style={{fontWeight: '400'}}>Attending</Text> </Text>
                    <Text style={{fontSize: 14, fontWeight: '600', marginTop: 16}}>12 <Text style={{fontWeight: '400'}}>Events</Text></Text>
                </View>
            </ImageBackground>
            <View style={styles.list}>
            <FlatList
                data={events}
                renderItem={({item}) => 
                    <EventItem 
                        event={item} key={item.id}
                        onPress={() => {
                            alert(`You press item's name: ${item.name}`)
                        }}
                    />
                }
                keyExtractor={eachEvent => eachEvent.id}
            />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
    },
    top: {
        paddingTop: 50,
        height: '100%',
        width: 200,
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: colors.dark_gray,
        borderRadius: 20
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 10
    },
    avatar: {
        width: 110,
        height: 110,
        borderWidth: 2,
        borderRadius: 100,
        borderColor: colors.white
    },
    username: {
        paddingTop: 10,
        marginVertical: 8,
        fontSize: 18,
        fontWeight: '700',
        color: colors.accent
    },
    name: {
        fontSize: 24,
        textAlign: 'center',
        color: colors.accent
    },
    infor: {
        width: '100%',
        flexDirection: 'row',
        paddingVertical: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 2.5,
    },
    list: {
        flex: 6,
        width: '100%',
    }
})