package com.intern.plb6.data.local.frefs

interface PreferencesHelper {

    fun getAccessToken() : String?
    fun setAccessToken(accessToken: String?)

    fun getCurrentEmail() : String?
    fun setCurrentEmail(email: String?)

    fun getCurrentUserId(): Int?
    fun setCurrentUserId(id: Int?)

    fun getCurrentUserName(): String?
    fun setCurrentUserName(name: String?)

    fun getCurrentPassWord(): String?
    fun setCurrentPassWord(pass: String?)

    fun checkRememberPass(): Boolean?
    fun setRememberPass(isRemember: Boolean)

}