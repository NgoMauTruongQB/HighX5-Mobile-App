import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import colors from '../../constants/colors'
import NotificationItem from '../../components/NotificationItem'

export default function NotificationList() {
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            title: 'Xác nhận tham gia sự kiện',
            content: 'Bạn đã được xác nhận làm cộng tác viên cho sự kiện IT GenZ Festival do liên chi đoàn khoa Công nghệ thông tin tổ chức.',
            dateTime: '22:02 13-11-1023',
            isRead: true,
            image: 'https://i.scdn.co/image/ab6765630000ba8a772ab3432a4b798501cd9d21'
        },
        {
            id: 2,
            title: 'Tin nhắn mới',
            content: 'Một tin nhắn mới từ @minh_dac',
            dateTime: '14:02 13-10-1023',
            isRead: false,
            image: 'https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/284949647_3156128071322634_1478468963075710123_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=LHUwM9EAxsUAX8idSkI&_nc_ht=scontent.fdad2-1.fna&oh=00_AfAqZStCLLhnLPGm8CYTNXp5ctexeARzr-k7W5A22xfC3w&oe=65615FD4'
        },
        {
            id: 3,
            title: 'Sự kiện sắp bắt đầu',
            content: 'Sự kiện Uni Hack Đà Nẵng lần thứ 11 đã bắt đầu, hãy nhanh tay đăng kí để trở thành cộng tác viên hỗ trợ sự kiện và nhận về điểm rèn luyện cũng như những "sự vui vẻ" bạn nhé!',
            dateTime: '00:00 13-12-1023',
            isRead: true,
            image: 'https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/404116728_894960792055321_6523011029150830526_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=TjPm6YxYhvwAX8mY4QU&_nc_ht=scontent.fdad2-1.fna&oh=00_AfC_KGi1ZLv_W7o64xFbnmtyEjL4NsMEGOA7D9LDNyZllg&oe=65625E76'
        },
        {
            id: 4,
            title: 'Nhiệm vụ chưa hoàn thành',
            content: 'Kế hoạch tổng quan của sự kiện IT GenZ Festival chưa được hoàn thành. Nhanh tay làm bạn nhé!',
            dateTime: '00:00 13-12-1023',
            isRead: true,
            image: 'https://play-lh.googleusercontent.com/bGGbcS97bKY8qrHit_NW8pNr2zvgfoycMm4fL7jB8SmUToV8uPQ6pWwOx6JQmIgcnRnS'
        },
        {
            id: 5,
            title: 'Thông báo quan trọng',
            content: 'Một tin nhắn mới từ @mautruongconaitei',
            dateTime: '10:30 18-11-1023',
            isRead: true,
            image: 'https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/348470729_1553614581830967_517173605717923574_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4jfTDf3Gp4QAX_nfj0_&_nc_ht=scontent.fdad1-2.fna&oh=00_AfCCMHEfZwu_uiiSnOB5olCCFz-Im_kBTWUgB4kqMKcpTg&oe=65617A1B'
        },
        {
            id: 6,
            title: 'Thông tin đăng kí sự kiện',
            content: 'Hãy đăng kí sự kiện Uni Hack Đà Nẵng trước ngày 25-11-1023 để đảm bảo bạn có suất tham gia.',
            dateTime: '15:45 22-11-1023',
            isRead: false,
            image: 'https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/383338821_759441736212929_6403370624334235944_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=mmxq8G5svE0AX_aLB00&_nc_ht=scontent.fdad1-4.fna&oh=00_AfB3PllRFo47RnmXqWXSCtDmDg27Q8sM-jC9Lc-y2gbpxg&oe=655DCE49'
        },
        {
            id: 7,
            title: 'Lời mời tham gia sự kiện',
            content: 'Bạn nhận được lời mời tham gia buổi nói chuyện chia sẻ kinh nghiệm từ các chuyên gia trong ngành Công nghệ thông tin.',
            dateTime: '08:00 20-11-1023',
            isRead: true,
            image: null
        },
        {
            id: 8,
            title: 'Thông báo kết quả đăng kí',
            content: 'Kết quả đăng kí tham gia sự kiện Uni Hack Đà Nẵng sẽ được công bố vào ngày 27-11-1023. Chúc bạn may mắn!',
            dateTime: '18:30 25-11-1023',
            isRead: false,
            image: 'https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/383338821_759441736212929_6403370624334235944_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=mmxq8G5svE0AX_aLB00&_nc_ht=scontent.fdad1-4.fna&oh=00_AfB3PllRFo47RnmXqWXSCtDmDg27Q8sM-jC9Lc-y2gbpxg&oe=655DCE49'
        }
    ])

    const [categories, setCategories] = useState([
        'All', 'Verified', 'Message', 'Event', 'Deadline'
    ])
    const [activeIndex, setActiveIndex] = useState(0)

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                        setActiveIndex(index)
                        alert('Filter' + index)
                }}
                style={[
                    styles.categoryItem,
                    index === activeIndex && styles.activeCategoryItem
                ]}
            >
                <Text style={[styles.categoryText, index === activeIndex && styles.activeCategoryText]}>{item}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                keyExtractor={(item, index) => index.toString()}
                horizontal={true}
                style={styles.category}
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
            />
            <View style={styles.list}>
                <FlatList
                    data={notifications}
                    renderItem={({item}) => 
                        <NotificationItem 
                            notification={item} key={item.id}
                            onPress={() => {
                                alert(`You press item's name: ${item.title}`)
                            }}
                        />
                    }
                    keyExtractor={eachNotification => eachNotification.id}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        flexDirection: 'column',
    },
    category: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: colors.white,
        paddingTop: 20,
        paddingStart: 10,
    },
    categoryItem: {
        backgroundColor: colors.white,
        marginHorizontal: 4,
        height: 36,
        minWidth: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 0.6,
        borderColor: colors.dark_gray
    },
    activeCategoryItem: {
        backgroundColor: colors.primary,
        borderColor: colors.primary
    },
    categoryText: {
        color: colors.text,
        fontWeight: '600',
        fontSize: 16,
    },
    activeCategoryText: {
        color: colors.white,
    },
    list: {
        flex: 15,
    },
})
