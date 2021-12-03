package com.intern.plb6.data.model.api

import com.google.gson.annotations.SerializedName

data class RegisterRequest (

    @SerializedName("username" ) var username : String? = null,
    @SerializedName("password" ) var password : String? = null,
    @SerializedName("name"     ) var name     : String? = null,
    @SerializedName("phone"    ) var phone    : String? = null,
    @SerializedName("email"    ) var email    : String? = null,
    @SerializedName("role_id"  ) var roleId   : Int?    = null

)