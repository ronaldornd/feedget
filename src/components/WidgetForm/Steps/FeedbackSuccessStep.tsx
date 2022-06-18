import { CloseButton } from "../../CloseButton";
import check from "../../../images/check.svg"

interface FeedbackSuccessStepProps {
    onFeedbackRestartRequested: () => void;
}

export function FeedbackSuccessStep({ onFeedbackRestartRequested }: FeedbackSuccessStepProps) {
    return (
        <>
            <header>
                <CloseButton />
            </header>
            <div className="flex flex-col items-center py-8 w-[304px]">
                <img src={check} alt="" className="w-12 h-12" />
                <span className="tex-xl mt-2">Agradecemos o feedback!</span>
                <button
                    onClick={onFeedbackRestartRequested}
                    className="py-2 px-6 mt-6 bg-zinc-600 leading-6 rounded-md border-transparent text-sm hover:bg-zinc-700 transition-color focus:outline-none focus:ring-2 focus:ring-red-800 focus:ring-offset-2 focus:ring-offset-zinc-900 transition-colors disabled:bg-red-600 disabled:hover:bg-red-600"
                >
                    Quero enviar outro
                </button>
            </div>
        </>
    )
}