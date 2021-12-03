package com.intern.plb6.data.model.api

import com.google.gson.annotations.SerializedName

data class RegisterResponse(
    @SerializedName("message") var message: String? = null
)