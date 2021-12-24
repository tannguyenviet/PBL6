package com.intern.plb6.data

import com.intern.plb6.data.local.frefs.PreferencesHelper
import com.intern.plb6.data.model.api.Info
import com.intern.plb6.data.remote.ApiHelper

interface DataManager: ApiHelper, PreferencesHelper {

    fun updateUserInfo(
        accessToken: String?,
        userId: Int?,
        userName: String?,
        email: String?,
        pass: String,
        info: Info
    )

    fun getUserInfo(): Info

}