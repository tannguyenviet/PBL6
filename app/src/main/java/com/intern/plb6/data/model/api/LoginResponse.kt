package com.intern.plb6.data.model.api

import com.google.gson.annotations.SerializedName

data class LoginResponse (

    @SerializedName("info"  ) var info  : Info?   = Info(),
    @SerializedName("token" ) var token : String? = null

)