package com.intern.plb6.utils

import com.intern.plb6.data.model.api.TicketResponse

object SortUtils {

    fun sortTicket(listTicket: ArrayList<TicketResponse>): ArrayList<TicketResponse> {
        for (i in listTicket.indices) {
            for (j in i until  listTicket.size) {
                if (DateTimeUtils.convertStringToDate(listTicket[i].timeBooking) < DateTimeUtils.convertStringToDate(listTicket[j].timeBooking)) {
                    val temp = listTicket[i]
                    listTicket[i] = listTicket[j]
                    listTicket[j] = temp
                }
            }
        }
        return listTicket
    }

}