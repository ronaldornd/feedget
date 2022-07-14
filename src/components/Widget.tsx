import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm'

export function Widget() {

    return (
        <Popover className='absolute bottom-5 right-5 md:bottom-7 md:right-7 flex flex-col items-end'>
            <Popover.Panel> <WidgetForm /> </Popover.Panel>
            <Popover.Button className="md:text-xl bg-green-500 rounded-full px-3 h-12 text-white flex items-center group">
                <ChatTeardropDots className="w-6 text-2xl" />
                <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500'>
                    <span className='pl-2'> Feedback</span>
                </span>
            </Popover.Button>
        </Popover>
    )
}