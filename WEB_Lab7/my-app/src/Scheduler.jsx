import React from 'react'
import Calendar from "./Calendar.jsx"
import { Notes } from "./Notes.jsx"

export class Scheduler extends React.Component {
    render() {
        return (
            <Calendar Component={Notes} />
        )
    }
}

