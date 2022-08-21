<template>
    <v-container>
        <v-row>
            <v-col>
                <v-sheet>
                    <FullCalendar :options="calendarOptions" />

                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
    components: {
        FullCalendar // make the <FullCalendar> tag available
    },
    data() {
        return {
            calendarOptions: {
                plugins: [dayGridPlugin, interactionPlugin],
                initialView: 'dayGridMonth',
                events: [
                    { title: 'Rex Ying', date: '2022-08-24' }
                ]
            }
        }
    }
}

</script>

<style>

.fc-today-buttom .fc-button-primary {
    background: #FF0000;
}

.fc .fc-button-primary {
    background-color: #455A64;
}
</style>