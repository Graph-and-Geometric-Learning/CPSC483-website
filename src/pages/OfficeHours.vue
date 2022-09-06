<template>
<v-container>
    <v-row>
        <v-col>
        <v-sheet class="pa-8" elevation="6">
            <h1>Office Hours Calendar</h1>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<vue-cal style="height: 1000px;" :events="events" :disable-views="['years', 'year']" :time-from="9 * 60" :time-to="22 * 60" :time-cell-height="80" :on-event-click="onEventClick"/>
        </v-sheet>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

function getRepeatDates(start, start_time, end, end_time, day, TITLE, LOCATION) {
    var dates = []
    var start_date = new Date(start)
    var end_date = new Date(end)
    while (start_date < end_date) {
        start_date.setDate(start_date.getDate() + (((day + 7 - start_date.getDay()) % 7) || 7))
        var date = start_date.getFullYear() + '-' + String(start_date.getMonth()+1).padStart(2, '0') + '-' + String(start_date.getDate()).padStart(2, '0')
        if (
            (date !== "2022-09-21") &&
            (date !== "2022-10-19") &&
            (date !== "2022-11-23")
        )
        dates.push({
            title: TITLE,
            start: date + start_time,
            end: date + end_time,
            content: LOCATION
        })
    }
    return dates
}
// console.log(getRepeatDates("2022-08-24", "2022-12-29", 3))

export default {
    selectedEvent: {},
    components: { VueCal },
    data: () => ({
        events: getRepeatDates("2022-08-31", " 14:00", "2022-12-07", " 15:00", 3, "Rex Ying OH", 'Dunham 226A')
            .concat(getRepeatDates("2022-09-05", " 10:00", "2022-12-09", " 11:00", 1, "Chen OH", 'AKW 207'))
            .concat(getRepeatDates("2022-09-05", " 18:00", "2022-12-09", " 19:00", 2, "Alec OH", 'Zoom'))
            .concat(getRepeatDates("2022-09-05", " 13:00", "2022-12-09", " 14:00", 4, "Hannah OH", 'Bass L03'))
            .concat(getRepeatDates("2022-09-05", " 15:00", "2022-12-09", " 16:00", 5, "Borui OH", 'YINS 3rd Floor'))
        }),

}
</script>