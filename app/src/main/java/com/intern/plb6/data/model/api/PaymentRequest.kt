package com.intern.plb6.data.model.api

import com.google.gson.annotations.SerializedName

data class PaymentRequest(
    @SerializedName("price") var price: Int? = null,
    @SerializedName("amount") var amount: Int? = null,
    @SerializedName("time_booking") var timeBooking: String? = null,
    @SerializedName("account_id") var accountId: Int? = null,
    @SerializedName("show_time_id") var showTimeId: Int? = null,
    @SerializedName("location") var location: String? = null
)