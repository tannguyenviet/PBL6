package com.intern.plb6.data.model.api

import com.google.gson.annotations.SerializedName
import java.io.Serializable

data class TicketResponse (

    @SerializedName("id"           ) var id          : Int,
    @SerializedName("amount"       ) var amount      : Int?    = null,
    @SerializedName("price"        ) var price       : Int?    = null,
    @SerializedName("time_booking" ) var timeBooking : String,
    @SerializedName("show_time_id" ) var showTimeId  : Int?    = null,
    @SerializedName("location"     ) var location    : String? = null,
    @SerializedName("ticketQR"     ) var ticketQR    : String? = null,
    @SerializedName("theater"      ) var theater     : String? = null,
    @SerializedName("city"         ) var city        : String? = null,
    @SerializedName("date"         ) var date        : String? = null,
    @SerializedName("time_start"   ) var timeStart   : String? = null,
    @SerializedName("time_end"     ) var timeEnd     : String? = null,
    @SerializedName("film_name"    ) var filmName    : String? = null

): Serializable