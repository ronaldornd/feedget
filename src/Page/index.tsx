import { useEffect, useState } from "react";
import downloadImage from "../images/download.svg";
import qrImage from "../images/frame.svg";
import AnimatedText from 'react-animated-text-content';


export default function page() {
    const [message, setMessage] = useState(String);
    const [alerting, setAlerting] = useState(true)



    useEffect(() => {
        setAlerting(true)
        let seconds = 0;
        const timer = setInterval(() => {
            seconds += 1;
            console.log(seconds)

            switch (seconds) {
                case 1:
                    setMessage('Olá')
                    break;
                case 3:
                    setMessage('Obrigado pelo interesse no meu perfil 🥰')
                    break;
                case 5:
                    setMessage('Estou testando uma nova ferramenta')
                    break;
                case 7:
                    setMessage('E gostaria muito que você pudesse me ajudar!')
                    break;
                case 10:
                    setMessage('É só clicar no botão de download e instalar o app 😁💕')
                    break;
                case 13:
                    setMessage('Fica tranquilo que é tudo seguro, só não tive 💲 para colocar na PlayStore ')
                    clearInterval(timer)
                    setAlerting(false)
                    break;
            }
        }, 2000);

        return (() => clearInterval(timer))
    }, []);


    return (
        <div className="flex-col  h-screen items-center self-center w-screen p-20 content-center">
            {alerting ?
                (
                    <div className="flex flex-col border-4 border-black shadow-2xl shadow-green-800 self-center rounded-xl h-full w-full justify-center  p-10 bg-green-500">
                        <AnimatedText
                            type="chars" // animate words or chars

                            animationType="lights"
                            interval={0.1}
                            duration={0.09}
                            tag="h1"
                            className="animated-paragraph text-center text-3xl text-black font-semibold"
                            includeWhiteSpaces
                            threshold={1}
                            rootMargin="20%">{message}</AnimatedText>
                    </div>
                ) :
                <div className="flex flex-col items-center justify-center h-screem w-sreen">
                    <h1 className="text-4xl flex justify-self-center font-serif font-bold self-center mb-4">Compartilhe!</h1>
                    <img src={qrImage} className='flex w-64 mb-0 self-center' />
                    <a href="https://expo.dev/artifacts/eas/7HTyXvzvnEbV78YNm6XUpo.apk">
                        <div className="flex flex-row self-center gap-2 p-3 mt-10 rounded-2xl align-text-middle justify-center w-100 bg-green-500">

                            <img src={downloadImage} className='flex w-10 self-center h-10' />
                            <h1 className="flex self-center text-4xl p-2 text-black font-mono font-bold">Download</h1>
                        </div>
                    </a>
                </div>}

        </div>
    )
}