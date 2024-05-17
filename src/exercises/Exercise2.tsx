import { Card } from "../components/Card"
import { TimelineList } from "../components/TimelineList"

export const Exercise2 = () => {
    return (
        <Card className='flex flex-col gap-2'>
            <h2 className="font-semibold">Exercise 2</h2>
            <p>
                <span className="italic">User Story: </span>
                As an outreach liaison, I want to see details in the timeline,
                so that I understand what other care team members have recorded for this patient.
            </p>
            <ul className="list-disc pl-5">
                <li>
                    Display detailed data for the timeline items.
                </li>
                <li>
                    For Appointment Scheduled, show the appointment type, whether it is virtual, and the start time.
                </li>
                <li>
                    For Care Plan Updated, show the goals.
                </li>
                <li>
                    For Hospitalization, show the facility and admission note.
                </li>
                <li>
                    For Outreach, show the modality and the note.
                </li>
            </ul>
            <hr className="my-4" />
            <TimelineList />
        </Card>
    )
}