import downloadImage from "../images/download.svg";
import qrImage from "../images/frame.svg";
export default function page() {
    return (
        <>
            <div className="flex flex-col items-center justify-center mt-20 h-200 w-100">
                <h1 className="text-4xl flex justify-self-center font-serif font-bold self-center mb-4">Compartilhe!</h1>
                <img src={qrImage} className='flex w-64 mb-0 self-center' />
                <a href="https://expo.dev/artifacts/eas/dqGhwKHamaxCgCWVZ1E6vw.apk">
                    <div className="flex flex-row self-center gap-2 p-3 mt-10 rounded-2xl align-text-middle justify-center w-100 bg-green-500">

                        <img src={downloadImage} className='flex w-10 self-center h-10' />
                        <h1 className="flex self-center text-4xl p-2 text-black font-mono font-bold">Download</h1>
                    </div>
                </a>
            </div>
        </>
    )
}