import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypesProps {
    onFeedbackTypeChanged: (type: FeedbackType) => void;
}
export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypesProps) {
    return (
        <>
            <header>
                <span className="text-xl leading-6">Deixe seu Feedback!</span>
                <CloseButton />
            </header>
            <div className="flex py-7 gap-2 w-full">
                {Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                        <button
                            key={key}
                            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-4 border-transparent hover:border-red-500 focus:border-red-500 focus:outline-none"
                            type="button"
                            onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
                        >
                            <img className="w-12 h-12" src={value.image.source} alt={value.image.alt} />
                            <span>{value.title}</span>
                        </button>
                    );
                })}
            </div>
        </>
    )
}