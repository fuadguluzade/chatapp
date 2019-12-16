import React from 'react';
import { Message } from './../../components'
import './Home.scss';

const Home = () => (
    <section className="home">
        <Message
            avatar="https://pickaface.net/gallery/avatar/acrovin559439058dc7f.png"
            text="Разработка чата на ReactJS + NodeJS: Formik, React Router, вёрстка компонентов #1"
            date={new Date("Sun Dec 15 2019 00:14:41")}
            attachments = {[
                {
                    filename: 'image.jpg',
                    url: 'https://source.unsplash.com/100x100/?random=1&girl'
                },
                {
                    filename: 'image.jpg',
                    url: 'https://source.unsplash.com/100x100/?random=2&girl'
                },
                {
                    filename: 'image.jpg',
                    url: 'https://source.unsplash.com/100x100/?random=3&girl'
                }
            ]}
        />

        <Message
            avatar="https://pickaface.net/gallery/avatar/rodonna153aae313b7423.png"
            text="You're cute!"
            date={new Date("Sun Dec 15 2019 00:10:41")}
            isMe={true}
            isReaded={false}
            
        />
    </section>
)

export default Home;