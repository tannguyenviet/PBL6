package com.intern.plb6.data.model.api

import com.google.gson.annotations.SerializedName

data class Info (

    @SerializedName("id"         ) var id         : Int?    = null,
    @SerializedName("username"   ) var username   : String? = null,
    @SerializedName("name"       ) var name       : String? = null,
    @SerializedName("phone"      ) var phone      : String? = null,
    @SerializedName("email"      ) var email      : String? = null,
    @SerializedName("address"    ) var address    : String? = null,
    @SerializedName("birthday"   ) var birthday   : String? = null,
    @SerializedName("gender"     ) var gender     : String? = null,
    @SerializedName("emailToken" ) var emailToken : String? = null,
    @SerializedName("isVerified" ) var isVerified : Int?    = null,
    @SerializedName("role_id"    ) var roleId     : Int?    = null

)