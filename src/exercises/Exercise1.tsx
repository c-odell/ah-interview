import { Card } from "../components/Card"
import { TimelineList } from "../components/TimelineList"

export const Exercise1 = () => {
    return (
        <Card className='flex flex-col gap-2'>
            <h2 className="font-semibold">Exercise 1</h2>
            <p>
                <span className="italic">User Story: </span>
                As an outreach liaison, I want to see any recent events related to a patient,
                so that I have the context of what's been happening in their care.
            </p>
            <p>
                <span className="italic">Dev Notes: </span>
                Endpoint <pre className="inline">/v1/timeline</pre> will return all timeline items in desc chronological order (mocked for this exercise).
                Each timeline item will include data for its given type.
            </p>
            <ul className="list-disc pl-5">
                <li>
                    Display a timeline item component for each entry.
                </li>
                <li>
                    It should show a title based on the item type: "Appointment Scheduled", "Care Plan Updated", "Hospitalization", or "Outreach"
                </li>
                <li>
                    It should show the month, day, year, and time of the event
                </li>
            </ul>
            <hr className="my-4" />
            <TimelineList />
        </Card>
    )
}