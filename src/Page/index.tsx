import downloadImage from "../images/download.svg";
import qrImage from "../images/frame.png";
export default function page() {
    return (
        <>
            <div className="flex flex-col gap-5 items-center justify-center mt-20 h-200 w-100">
                <img src={qrImage} className='flex border-4 border-green-500 rounded-lg w-80 self-center h-80' />
                <a href="https://expo.dev/artifacts/eas/o4qNGY5eya8tNcdbDr5Xiw.apk">
                    <div className="flex flex-row self-center gap-2 p-3 rounded-2xl align-text-middle justify-center w-100 bg-green-500">

                        <img src={downloadImage} className='flex w-10 self-center h-10' />
                        <h1 className="flex self-center text-4xl p-2 text-black font-mono font-bold">Download</h1>
                    </div>
                </a>
            </div>
        </>
    )
}