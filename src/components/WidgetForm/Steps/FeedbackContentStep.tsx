import { ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { ScreenshootButton } from "../SreenshootButton";

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onFeedbackRestartRequested: () => void;
    onFeedbackSent: () => void;
}

export function FeedbackContentStep({ feedbackType, onFeedbackRestartRequested, onFeedbackSent }: FeedbackContentStepProps) {
    const feedbackTypeInfo = feedbackTypes[feedbackType];
    const [screenshoot, setScreenshot] = useState<string | null>(null);
    const [comment, setComment] = useState<string | null>();

    function handleSubmitFeedback(event: FormEvent) {
        event.preventDefault();
        console.log(
            screenshoot,
            comment
        )
        onFeedbackSent();
    }

    return (
        <>
            <header>
                <button
                    type="button"
                    className="top-5 left-5 absolute text-zinc-400  hover:text-zinc-100"
                    onClick={onFeedbackRestartRequested}>
                    <ArrowLeft weight="bold" className="w-4 h-4" />
                </button>
                <span className="text-xl leading-6 flex items-center gap-2">
                    <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6" />
                    {feedbackTypeInfo.title}
                </span>
                <CloseButton />
            </header>
            <form className="my-3 w-full" onSubmit={handleSubmitFeedback}>
                <textarea
                    className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md resize-none focus:border-red-500 focus:ring-red-500 focus:ring-2 focus:outline-none srcollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                    placeholder="Conte mais sobre o que está acontecendo:"
                    onChange={event => setComment(event.target.value)}
                >

                </textarea>
                <footer className="flex flex-row gap-2">
                    <ScreenshootButton
                        screenshoot={screenshoot}
                        onScreenshootTook={setScreenshot}
                    />

                    <button
                        type="submit"
                        disabled={comment?.length === 0}
                        className="p-2 bg-red-600 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-800 focus:ring-offset-2 focus:ring-offset-zinc-900 transition-colors disabled:bg-red-600 disabled:hover:bg-red-600"
                    >
                        Enviar feedback!
                    </button>
                </footer>
            </form>
        </>
    )
}