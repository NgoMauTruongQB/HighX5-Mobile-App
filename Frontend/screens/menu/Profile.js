import { StyleSheet, Text, View, Image, ImageBackground, FlatList } from 'react-native'
import React, { useState } from 'react'
import colors from '../../constants/colors'
import EventItem from '../../components/EventItem'

export default function Profile() {
    const [events, setEvents] = useState([
        {
            id: 1,
            name: 'K23 - Bén lửa sinh ra',
            slogan: 'Nhen nhóm - Bừng lên - Lan tỏa',
            description: 'Ngày hội “K23 - BÉN LỬA SINH RA” với các trạm trò chơi liên hoàn gắn liền với các môn học đầy "khó nhằn" của sinh viên IT như K23 và hòn đá giải tích, hội toán rời rạc, hoàng tử tín hiệu số, python và đồ án tử thần,... được sự tham gia sôi nổi của các bạn newbie nhà ITF. Đầy bất ngờ với phần văn nghệ kết hợp với đèn led hết sức mãn nhãn của các bạn K23, hình ảnh truyền nhau ánh đèn hoa đăng cũng vô cùng đẹp và ý nghĩa.',
            location: 'Sân khu F, Đại học bách khoa',
            status: 1,  // completed = 2, upcoming = 0, on going = 1
            dateStart: '20/11/2023',
            image: 'https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/344806465_1592945844466017_8432741159378952310_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=NgGKV12J4cIAX8A_082&_nc_ht=scontent.fdad2-1.fna&oh=00_AfDSTVmJwEDa2iDp1-t_wNxWzCfI7P43q4lwiE-Rmpjosg&oe=655E2633'
        },
        {
            id: 2,
            name: 'IT - GEN Z FESTIVAL',
            slogan: null,
            description: 'Sao bao ngày mong chờ thì ngày “định mệnh” ấy đã đến, IT – GEN Z FESTIVAL chính thức “ra lò” và chào đón tất cả các ITer đến tham dự. ',
            location: 'Sân khu F, Đại học bách khoa',
            status: 0,
            dateStart: '04/12/2022',
            image: 'https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/395936564_870249581777181_4950620071910599722_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=TRYwvPki--YAX8N39Z5&_nc_ht=scontent.fdad1-4.fna&oh=00_AfDPCoVK4r7kFZ1UXs-ChIIzkpa_Iq-_mUECB_YytjtufA&oe=655E84F4'
        },
        {
            id: 3,
            name: 'IT LEAGUE 2024',
            slogan: 'Who is the Champion?!',
            description: 'Hành trình kiếm tìm chủ nhân của chiếc cup vô địch giải đấu IT League. Cùng liên chi đoàn khoa công nghệ thông tin tham gia vào các khâu chuẩn bị để có một mùa giải mãn nhãn nhé. Nhanh tay đăng kí thôi.',
            location: 'Sân bóng Nguyễn Chánh 2 - Đường số 4, P. Hòa Khánh Bắc, Q.Liên Chiểu, TP. Đà Nẵng',
            status: 0,
            dateStart: '27/09/2022',
            image: 'https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/332738381_745587533580349_8554694040346860801_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=593rU8AzVX4AX8hPaU_&_nc_ht=scontent.fdad1-3.fna&oh=00_AfA-aTNaG0TNbCuRK2pg8uEy4qam2y8cZH7gm72TgPg5zg&oe=655DEC1A'
        },
        {
            id: 4,
            name: 'CodeFest 2023',
            slogan: 'Unleash the Coding Power',
            description: 'CodeFest là thách thức lập trình cuối cùng nơi các thí sinh sẽ đối mặt với những vấn đề lập trình khó khăn. Hãy sẵn sàng để giải phóng kỹ năng lập trình của bạn và cạnh tranh để giành những giải thưởng hấp dẫn!',
            location: 'Đấu trường Tech Hub',
            status: 2,
            dateStart: '10/02/2023',
            image: 'https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/383338821_759441736212929_6403370624334235944_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=mmxq8G5svE0AX_aLB00&_nc_ht=scontent.fdad1-4.fna&oh=00_AfB3PllRFo47RnmXqWXSCtDmDg27Q8sM-jC9Lc-y2gbpxg&oe=655DCE49'
        },
        {
            id: 5,
            name: 'TechXperience Expo',
            slogan: 'Explore the Future Tech',
            description: 'Bắt đầu một cuộc hành trình để khám phá những điều mới nhất và tuyệt vời nhất trong công nghệ. TechXperience Expo tổ chức những người yêu công nghệ, những người sáng tạo và chuyên gia ngành công nghiệp cho một ngày trải nghiệm công nghệ sâu sắc.',
            location: 'Trung tâm Đổi mới, Đại học Đà Nẵng',
            status: 1,
            dateStart: '15/11/2023',
            image: 'https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/398442587_732939362211159_686682553376480746_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tZBNlGJcxgAAX_i847g&_nc_ht=scontent.fdad2-1.fna&oh=00_AfCuehE3MH2tmROsV4zo2usKuHW4fmTlkDwB4gZNe6wJMQ&oe=655E6176'
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