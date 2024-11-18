import React from 'react'
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Services = () => {
    const { userId } = useParams();

    const [services, setServices] = React.useState([
        {
            id: uuidv4(),
            name: 'Coca cola service qr code',
            qrCode: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
            description: 'Coca cola service qr code',
            date: '2021-01-01',
            status: 'active'
        },
        {
            id: uuidv4(),
            name: 'Coca cola service qr code',
            qrCode: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
            description: 'Coca cola service qr code',
            date: '2021-01-01',
            status: 'active'
        },
        {
            id: uuidv4(),
            name: 'Coca cola service qr code',
            qrCode: 'https://www.google.com / images / branding / googlelogo / 1x/ googlelogo_color_272x92dp.png',
            description: 'Coca cola service qr code',
            date: '2021-01-01',
            status: 'active'
        },
    ])

    // qr code api endpoint
    // https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example

    // when the user hovers over the card the card should rotate 
    // 180 degrees to show the qr code to be scanned by the user

    return (
        <div className='h-screen'>Services
            <h1>{userId}</h1>
            <ul>
                <li>Coca cola service qr code</li>
                <li>Coca cola service qr code</li>
                <li>Coca cola service qr code</li>
                <li>Coca cola service qr code</li>
                <li>Coca cola service qr code</li>
            </ul>
            {/* QR codes */}
        </div>

    )
}

export default Services;